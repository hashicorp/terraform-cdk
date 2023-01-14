import { App, AppOptions } from "cdktf";
import { MyStack } from 'src/myStack';

export class MyApp extends App {
  public readonly myStack: MyStack;

  constructor(options?: AppOptions) {
    super(options);

    this.myStack = new MyStack(this, "{{ $base }}");
  }
}
