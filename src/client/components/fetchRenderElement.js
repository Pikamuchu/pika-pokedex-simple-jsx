import RenderElement from './renderElement';

export default class FetchRenderDataElement extends RenderElement {
  constructor() {
    super();
  }
  static get observedAttributes() {
    return ['src', 'loading'];
  }
  get src() {
    return this.getAttribute('src');
  }
  set src(src) {
    this.setAttribute('src', src);
  }
  get loading() {
    return this.getAttribute('loading', Boolean);
  }
  set loading(loading) {
    this.setAttribute('loading', loading, Boolean);
  }
  get data() {
    return this._data;
  }
  set data(data) {
    this._data = data
  }
  isReady() {
    return !this.loading && this.data;
  }
  async fetchData() {
    this.loading = true;
    try {
      const response = await fetch(`${this.src}?${serialize(this.params)}`);
      this.data = await response.json();
    } catch(e) {
      console.log(e.stack);
    }
    this.loading = false;
  }
}

const serialize = obj => {
  const str = [];
  for (let p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}
