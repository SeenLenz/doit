export class EventElement extends HTMLElement {
  root: ShadowRoot;

  constructor() {
    super();

    this.root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const template: any = document.getElementById("event-template");
    const content = template.content.cloneNode(true);
    console.log(template);
    this.root.appendChild(content);
  }
}

customElements.define("event-element", EventElement);
