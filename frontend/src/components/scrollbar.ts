let ignoreScrollEvents = false;
let inserted_timestamps: NodeListOf<HTMLElement>;

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

export default scrollsync;
