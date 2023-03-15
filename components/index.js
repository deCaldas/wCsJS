class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  getTemplate() {
    const template = document.createElement("template");
    const header = document.createElement("header");
    const hgroup = document.createElement("hgroup");
    const h3 = document.createElement("h3");
    const h2 = document.createElement("h2");
    const h1 = document.createElement("h1");
    const slot1 = document.createElement("slot");
    const slot2 = document.createElement("slot");
    const slot3 = document.createElement("slot");

    h3.appendChild(slot1);
    h2.appendChild(slot2);
    h1.appendChild(slot3);
    hgroup.appendChild(h3);
    hgroup.appendChild(h2);
    hgroup.appendChild(h1);
    header.appendChild(hgroup);
    template.content.appendChild(header);
    template.content.appendChild(this.getStyle());

    return template;
  }

  getStyle() {
    const style = document.createElement("style");
    style.textContent = `
      :host {
        width: 80%;
        max-width: 900px;
        min-width: 280px;
        margin: 0 auto;
      }
    `;
    return style;
  }
}

customElements.define("my-element", MyElement);
