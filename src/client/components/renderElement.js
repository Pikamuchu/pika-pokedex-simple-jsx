export default class RenderElement extends HTMLElement {
  constructor() {
    super();
  }
  get loading() {
    return this.hasAttribute('loading');
  }
  set loading(loading) {
    if (loading) {
      this.setAttribute('loading', '');
    } else {
      this.removeAttribute('loading');
    }
  }
  get ready() {
    return !this.loading;
  }
  connectedCallback() {
    this.events()
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (newVal !== oldVal) {
      if (this.ready) {
        this.innerHTML = this.render();
        this.events();
      }
    }
  }
  render() {}
  events() {}
}
