export const Renderer = {
  ignoreScrollEvents: true,

  UpdateRow: function (rownum, val) {
    document.querySelectorAll(`#line${rownum}`).forEach((e) => {
      e.style.marginBottom = val * 61 + "px";
    });
    let temp = document.querySelector(`#timestamp${rownum}`);
    temp.style.marginBottom = val * 61 - temp.offsetHeight + "px";
  },

  init: function (Scopes) {
    Scopes.timestamps.forEach((e, i) => {
      e.children[0].textContent = i + "";
      e.id = "timestamp" + i;
      e.style.top = `${-e.offsetHeight / 2}px`;
      e.style.marginBottom = `${61 - e.offsetHeight}px`;
    });

    const fragment = document.createDocumentFragment();
    document.querySelectorAll(".collumn").forEach((e, i) => {
      let line = document.createElement("div");
      line.className = "line";
      line.id = `line0`;
      line.style.marginBottom = `${60}px`;
      line.style.backgroundColor = "#ffffff00";
      fragment.appendChild(line);

      for (let index = 1; index < 25; index++) {
        let line = document.createElement("div");
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
