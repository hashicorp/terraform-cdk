// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
function extractJsonLogLineIfPresent(logLine: string): string {
  try {
    const extractedMessage = JSON.parse(logLine)["@message"];
    return extractedMessage ? extractedMessage.trim() : logLine;
  } catch (e) {
    return logLine;
  }
}

export function extractJsonLogIfPresent(logLines: string): string {
  return logLines.split("\n").map(extractJsonLogLineIfPresent).join("\n");
}
