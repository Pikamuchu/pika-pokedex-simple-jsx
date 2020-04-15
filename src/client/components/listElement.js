import RenderElement from './renderElement';

export default class ListElement extends RenderElement {
  constructor() {
    super();
  }
  get ready() {
    return super.ready && this.items;
  }
  static get observedAttributes() {
    return ['loading', 'src'];
  }
  get src() {
    return this.getAttribute('src');
  }
  set src(src) {
    this.setAttribute('src', src);
  }
  get items() {
    return this._items;
  }
  set items(items) {
    this._items = items
  }
  async fetchList(params) {
    this.loading = true;
    try {
      const response = await fetch(`${this.src}?${_serialize(params)}`);
      this.items = await response.json();
    } catch(e) {
      console.log(e.stack);
    }
    this.loading = false;
  }
  _serialize(obj) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }
}
