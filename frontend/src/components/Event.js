export class EventElement extends HTMLElement {
  constructor(
    template,
    name,
    duration,
    labels = {},
    colspan = 2,
    rowspan = 8,
    color
  ) {
    super();

    this.root = this.attachShadow({ mode: "open" });
    this.root.appendChild(template.content.cloneNode(true));
    let event_body = this.root.children[1];

    console.log(
      event_body.children[0].children[1].children[0].addEventListener(
        "click",
        () => {
          console.log("more options");
        }
      )
    );

    if (colspan) {
      event_body.style.width = `calc(${colspan * 100}% + ${
        (colspan - 1) * 6
      }px)`;
    }

    if (rowspan) {
      event_body.style.height = rowspan * 61 - 3 + "px";
    }

    event_body.style.backgroundColor = color;
    event_body.children[0].children[0].innerHTML = name;
    event_body.children[0].children[1].children[1].innerHTML = duration;

    if (labels) {
      event_body.children[1].style.display = "block";
      console.log(
        event_body.children[1].children[0].children[1].addEventListener(
          "click",
          () => {
            console.log("add tag");
          }
        )
      );
    }
  }

  static observedAttributes = ["name", "duration"];

  attriubteChangedCallback(name, oldValue, newValue) {
    console.log(name);
  }

  connectedCallback() {}
}

customElements.define("event-element", EventElement);
