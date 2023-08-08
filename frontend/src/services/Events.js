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
  SyncScrollbars: function (element1, element2) {
    element1.addEventListener("scroll", (e) => {
      var ignore = this.ignoreScrollEvents;

      if (ignore) {
        this.ignoreScrollEvents = false;
        return;
      }

      this.ignoreScrollEvents = true;
      element2.scrollTop = element1.scrollTop;
    });
  },
  NextPage: function (e) {},
  PreviousPage: function (e) {},
  AppendToCal: function (e) {},
  CheckboxCheck: function (e) {
    console.log(e);
  },
};
