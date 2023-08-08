import "./style.scss";
import { EventElement } from "./components/Event";
import { Renderer } from "./services/Renderer";
import { Router } from "./services/Router";
import { Events } from "./services/Events";
import { Api } from "./services/Api";

window.app = {};
app.renderer = Renderer;
app.router = Router;
app.events = Events;
app.api = Api;

document.addEventListener("DOMContentLoaded", (e) => {
  app.scopes = {
    collumns: document.querySelector(".collumns"),
    scrollbar: document.querySelector(".scrollbar"),
    timestamps: document.querySelectorAll(".timestamp"),
    eventTL: document.querySelector("#event-template"),
    taskTL: document.querySelector("#task-template"),
    stateTL: document.querySelector("#state-template"),
  };

  console.time("element insert");
  let i = new EventElement(app.scopes.eventTL, "Task 1", "12:30 15:30");
  console.timeEnd("element insert");
  app.scopes.collumns.children[1].appendChild(i);
  i.duration = "asd";
  app.renderer.init(app.scopes, app.api);
  app.events.SyncScrollbars(app.scopes.collumns, app.scopes.scrollbar);
  app.events.SyncScrollbars(app.scopes.scrollbar, app.scopes.collumns);
  app.events.init();
  app.api.init();
});
