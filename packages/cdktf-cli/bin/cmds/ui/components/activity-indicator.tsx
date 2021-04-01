import React, {useEffect, useState} from "react";
import {Text} from "ink";
import spinners from 'cli-spinners';

interface Props {
    readonly color?: string;
}

const DEFAULT_INDICATOR_COLOR = "green";

type Unsubscribe = () => void;
type Subscription = () => void;

class SpinnerClock {

    private subscriptions: Subscription[] = [];
    private interval?: NodeJS.Timeout;

    constructor(private spinRate: number = 1000) {
    }

    subscribe(subscription: Subscription): Unsubscribe {

        this.subscriptions.push(subscription);

        this.start();

        return () => {
            this.removeSubscription(subscription);
        };
    }

    private start() {
        if (!this.interval) {
            this.interval = setInterval(() => {
                this.notify();
            }, this.spinRate);
        }
    }

    private stop() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = undefined;
        }
    }

    private notify() {
        for (const subscription of this.subscriptions) {
            subscription()
        }
    }

    private removeSubscription(subscription: Subscription) {
        this.subscriptions = this.subscriptions.filter((sub) => sub !== subscription);

        if (this.subscriptions.length === 0) {
            this.stop();
        }
    }
}

const sharedSpinnerClock = new SpinnerClock();

const Spinner = () => {
    const [frame, setFrame] = useState(0);
    const spinner = spinners["circleQuarters"];

    useEffect(() => {
        return sharedSpinnerClock.subscribe(() => {
            setFrame(previousFrame => {
                const isLastFrame = previousFrame === spinner.frames.length - 1;
                return isLastFrame ? 0 : previousFrame + 1;
            });
        });
    }, [spinner]);

    return <Text>{spinner.frames[frame]}</Text>;
};

export const ActivityIndicator: React.FC<Props> = React.memo((props) => {
    return <Text color={props.color || DEFAULT_INDICATOR_COLOR}><Spinner/>{props.children}</Text>
});
