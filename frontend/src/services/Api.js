import { EventElement } from "../components/Event";

export const Api = {
  host: "http://127.0.0.1:8000/",
  date: new Date(),
  init: async function () {
    let left = new Date(this.date);
    left.setDate(this.date.getDate() - 15);
    let right = new Date(this.date);
    right.setDate(this.date.getDate() + 15);
    console.log(
      `${
        this.host
      }${left.getFullYear()}-${left.getMonth()}-${left.getDate()}/${right.getFullYear()}-${
        right.getMonth() + 1
      }-${right.getDate()}`
    );
    await fetch(
      `${
        this.host
      }${left.getFullYear()}-${left.getMonth()}-${left.getDate()}/${right.getFullYear()}-${
        right.getMonth() + 1
      }-${right.getDate()}`
    )
      .then((res) => res.json())
      .then((data) =>
        data.map((element) => {
          if (element.type == "event") {
            console.log(element);
          }
        })
      );
  },
  load_page: async function () {},
};
