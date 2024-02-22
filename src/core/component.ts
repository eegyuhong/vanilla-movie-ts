interface IComponentPayload {
  tagName?: string
  props?: {
    [key: string]: unknown
  }
  state?: {
    [key: string]: unknown
  }
}

export default class Component {
  public el;
  public props;
  public state;

  constructor(payload: IComponentPayload = {}) {
    const { tagName = 'div', props = {}, state = {} } = payload;

    this.el = document.createElement(tagName);
    this.props = props;
    this.state = state;
    this.render();
  }
  
  render() {
    // ...
  }
}
