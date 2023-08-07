import { ScopesTS } from "../tstuff/interfaces";
import { RendererTS } from "../tstuff/interfaces";

export const Renderer: RendererTS = {
  ignoreScrollEvents: true,

  UpdateRow: function (rownum: number, val: number): void {
    document.querySelectorAll<HTMLElement>(`#line${rownum}`).forEach((e) => {
      e.style.marginBottom = val * 61 + "px";
    });
    let temp = document.querySelector<HTMLElement>(`#timestamp${rownum}`);
    temp.style.marginBottom = val * 61 - temp.offsetHeight + "px";
  },

  init: function (Scopes: ScopesTS) {
    Scopes.timestamps.forEach((e: HTMLElement, i: number) => {
      e.children[0].textContent = i + "";
      e.id = "timestamp" + i;
      e.style.top = `${-e.offsetHeight / 2}px`;
      e.style.marginBottom = `${61 - e.offsetHeight}px`;
    });

    const fragment = document.createDocumentFragment();
    document.querySelectorAll<HTMLElement>(".collumn").forEach((e, i) => {
      let line: HTMLDivElement = document.createElement("div");
      line.className = "line";
      line.id = `line0`;
      line.style.marginBottom = `${60}px`;
      line.style.backgroundColor = "#ffffff00";
      fragment.appendChild(line);

      for (let index = 1; index < 25; index++) {
        let line: HTMLDivElement = document.createElement("div");
        line.className = "line";
        line.id = `line${index}`;
        line.style.marginBottom = `${60}px`;
        fragment.appendChild(line);
      }
      e.appendChild(fragment);
    });

    return true;
  },
};
