export class StateElement extends HTMLElement {
  constructor(template) {
    super();

    this.root = this.attachShadow({ mode: "open" });
    this.root.appendChild(template.content.cloneNode(true));
    let event_body = this.root.children[1];
  }

  connectedCallback() {}
}

customElements.define("event-element", EventElement);
