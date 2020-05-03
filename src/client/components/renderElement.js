export default class RenderElement extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.events();
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (newVal !== oldVal) {
      if (this.isReady()) {
        this.innerHTML = this.render();
        this.events();
      }
    }
  }
  isReady() {
    return true;
  }
  events() {
    return 'Not implemented';
  }
  render() {
    return 'Not implemented';
  }
  on(selector, event, func) {
    if (!selector || arguments.length === 2) {
      this.addEventListener(arguments[0], arguments[1]);
    } else {
      const element = this.querySelector(selector);
      if (element && event && func) {
        element.addEventListener(event, func);
      }
    }
  }
  getAttribute(name, type) {
    return toObject(super.getAttribute(name), type);
  }
  setAttribute(name, value, type) {
    if (type === Boolean) {
      if (value) {
        super.setAttribute(name, '');
      } else {
        super.removeAttribute(name);
      }
    } else {
      super.setAttribute(name, toString(value, type));
    }
  }
}

const toString = (value, type) => {
  switch (type) {
    case Boolean:
      return value && value !== 'false' && value !== '0' ? 'true' : 'false';
    case Object:
    case Array:
      return value && JSON.stringify(value);
      break;
    default:
      return '' + value;
  }
};

const toObject = (value, type) => {
  switch (type) {
    case Boolean:
      return value && value !== 'false' ? true : false;
    case Number:
      return value && Number(value);
    case Object:
    case Array:
      return value && JSON.parse(value);
    default:
      return value;
  }
};
