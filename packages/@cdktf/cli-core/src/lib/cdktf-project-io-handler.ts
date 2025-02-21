/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import {
  ProjectEvent,
  isWaitingForUserInputUpdate,
  MultiStackUpdate,
  LogMessage,
} from "./cdktf-project";

/**
 * This class is used to buffer events while the user is being asked for input. It is solely consumed by the CdktfProject class,
 * and is mostly created as a separation of concerns to keep the CdktfProject class as clean as possible.
 */
export class CdktfProjectIOHandler {
  // Pauses all progress / status events from being forwarded to the user
  // If set from true to false, the events will be sent through the channels they came in
  // (until a waiting for approval event is sent)
  private waitingForUserInput = false;
  private eventBuffer: Array<ProjectEvent> = [];

  public awaitUserInput() {
    this.waitingForUserInput = true;
  }

  public filterUserInputEventsFromBuffer() {
    this.eventBuffer = this.eventBuffer.filter(
      (event) =>
        event.type === "projectUpdate"
          ? !isWaitingForUserInputUpdate(event.value) // we want to filter out the waiting for approval events
          : true, // we want all other types
    );
  }

  public resumeAfterUserInput(stackName: string) {
    // remove waiting for approval event that should be resumed
    this.eventBuffer = this.eventBuffer.filter(
      (event) =>
        !(
          event.type === "projectUpdate" &&
          isWaitingForUserInputUpdate(event.value) &&
          (event.value as MultiStackUpdate).stackName === stackName
        ),
    );

    if (
      this.eventBuffer.length &&
      this.eventBuffer[0].type === "projectUpdate" &&
      isWaitingForUserInputUpdate(this.eventBuffer[0].value)
    ) {
      // we are still waiting on approval for the current stack
      // we removed a future "waiting for approval" event for some other stack
      return;
    }

    // We first need to flush all events, we can not resume if there is a new waiting for approval update
    let event = this.eventBuffer.shift();
    while (event) {
      if (event.type === "projectUpdate") {
        event.cb(event.value);
        if (isWaitingForUserInputUpdate(event.value)) {
          // We have to wait for user input again, therefore we can not resume
          return;
        }
      }
      if (event.type === "logMessage") {
        event.cb(event.value);
      }

      event = this.eventBuffer.shift();
    }

    // If we reach this point there was no waiting for user input event, so we can safely resume
    this.waitingForUserInput = false;
  }

  public isWaitingForUserInput() {
    return this.waitingForUserInput;
  }

  public pushEvent(event: ProjectEvent) {
    this.eventBuffer.push(event);
  }

  public bufferWhileAwaitingUserInput(cb?: (msg: LogMessage) => void) {
    if (!cb) {
      return undefined;
    }

    return (msg: LogMessage) => {
      if (this.waitingForUserInput) {
        this.eventBuffer.push({
          cb,
          value: msg,
          type: "logMessage",
        });
      } else {
        cb(msg);
      }
    };
  }
}
