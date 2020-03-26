interface UserProps {
  name?: string;
  age?: number;
}

type CallBack = () => void;

export class User {
  events: { [key: string]: CallBack[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callBack: CallBack): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callBack);
    this.events[eventName] = handlers; // ???
  }
}
