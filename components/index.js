class myElement extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" })
    }
      getTemplate() {
        const template = document.createElement("template");
          template.innerHTML = `
            <header>
              <hgroup>
               <h3>
                <slot name="slg"></slot>
               </h3>
               <h2>
                <slot name="h"></slot>
               </h2>
               <h1>
                <slot name="lt"></slot>
               </h1>
              </hgroup>
            </header>
          ${this.getStyles()}
          `;
  
          return template
        }
        getStyles()
        {
          return`
          <style>
            :host
            {
              width: 80%;
              max-width: 900px;
              min-width: 280px;
              margin: 0 auto;
            }
          </style>
          `;
        }
      render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
      }
    connectedCallback() {
            this.render()
          }
    }
  
  customElements.define("my-element", myElement)
  