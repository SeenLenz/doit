import "./style.scss";
let collumns: HTMLDivElement = document.querySelector(".collumns");
let scrollbar: HTMLDivElement = document.querySelector(".scrollbar");
let timestamps: NodeListOf<HTMLElement> =
  document.querySelectorAll<HTMLElement>(".timestamp");
let ignoreScrollEvents = false;
let inserted_timestamps: NodeListOf<HTMLElement>;

let apiobject: object = {
  1: {
    date: "2023.06.19:June:Monday",
    todo: [
      {
        type: "event",
        position: "8:00-14:00",
        title: "Training",
        color: "#323541",
        notes: false,
        reminder: false,
      },
      {
        type: "event",
        position: "12:00-14:00",
        title: "Training",
        color: "#324521",
        notes: false,
        reminder: false,
      },
    ],
  },
  2: { date: "2023.06.19:June:Tuesday" },
  3: { date: "2023.06.19:June:Wednesday" },
  4: { date: "2023.06.19:June:Thursday" },
  5: { date: "2023.06.19:June:Friday" },
  6: { date: "2023.06.19:June:Saturday" },
  7: { date: "2023.06.19:June:Sunday" },
};

console.time("load-timer");

timestamps.forEach((e: HTMLElement, i: number) => {
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

console.timeEnd("load-timer");

function scrollsync(element1: HTMLDivElement, element2: HTMLDivElement) {
  element1.addEventListener("scroll", (e) => {
    var ignore = ignoreScrollEvents;

    if (ignore) {
      ignoreScrollEvents = false;
      return;
    }

    ignoreScrollEvents = true;
    element2.scrollTop = element1.scrollTop;
  });
}

scrollsync(collumns, scrollbar);
scrollsync(scrollbar, collumns);

function updateRow(rownum: number, val: number): void {
  document.querySelectorAll<HTMLElement>(`#line${rownum}`).forEach((e) => {
    e.style.marginBottom = val * 61 + "px";
  });
  let temp = document.querySelector<HTMLElement>(`#timestamp${rownum}`);
  temp.style.marginBottom = val * 61 - temp.offsetHeight + "px";
}

console.time("row-update");
updateRow(3, 2);
console.timeEnd("row-update");
