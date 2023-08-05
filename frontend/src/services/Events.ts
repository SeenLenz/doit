export const Events = {
  init: function () {
    document
      .querySelector(".pre_bt")
      .addEventListener("click", this.PreviousPage());
    document
      .querySelector(".nxt_bt")
      .addEventListener("click", this.PreviousPage());
    document
      .querySelector(".append_bt")
      .addEventListener("click", this.AppendToCal());
  },
  SyncScrollbars: function (element1: HTMLElement, element2: HTMLElement) {
    element1.addEventListener("scroll", (e: Event) => {
      var ignore = this.ignoreScrollEvents;

      if (ignore) {
        this.ignoreScrollEvents = false;
        return;
      }

      this.ignoreScrollEvents = true;
      element2.scrollTop = element1.scrollTop;
    });
  },
  NextPage: function (e: Event) {},
  PreviousPage: function (e: Event) {},
  AppendToCal: function (e: Event) {},
  CheckboxCheck: function (e: Event) {
    console.log(e);
  },
};
