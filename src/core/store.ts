interface IStoreObservers {
  [key: string]: ISubscripbeCallback[]
}

interface ISubscripbeCallback {
  (arg: unknown): void
}

export default class Store<S> {
  public state = {} as S;
  private observers = {} as IStoreObservers;

  constructor(state: S) {
    for (const key in state) {
      Object.defineProperty(this.state, key, {
        get: () => state[key],
        set: val => {
          state[key] = val;
          if (Array.isArray(this.observers[key])) {
            this.observers[key].forEach(observer => observer(val));
          }
        }
      });
    }
  }

  // 상태 변경 구독!
  subscribe(key: string, cb: ISubscripbeCallback) {
    Array.isArray(this.observers[key])
      ? this.observers[key].push(cb)
      : this.observers[key] = [cb];
  }
}
