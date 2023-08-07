import "./style.scss";
import { EventElement } from "./components/Event";
import { Renderer } from "./services/Renderer";
import { Router } from "./services/Router";
import { Events } from "./services/Events";
import { Api } from "./services/Api";
import { AppTS } from "./tstuff/interfaces";

const app: AppTS = {};
app.renderer = Renderer;
app.router = Router;
app.events = Events;
app.api = Api;

document.addEventListener("DOMContentLoaded", (e: Event) => {
  app.scopes = {
    collumns: document.querySelector(".collumns"),
    scrollbar: document.querySelector(".scrollbar"),
    timestamps: document.querySelectorAll<HTMLElement>(".timestamp"),
  };
  app.scopes.collumns.appendChild(document.createElement("event-element"));
  setTimeout(() => {
    app.renderer.init(app.scopes);
    app.events.SyncScrollbars(app.scopes.collumns, app.scopes.scrollbar);
    app.events.SyncScrollbars(app.scopes.scrollbar, app.scopes.collumns);
    app.events.init();
    app.api.init();
  }, 100);
});
