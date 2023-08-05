import "./style.scss";
import scrollsync from "./src/components/Scrollbar";
import { Renderer } from "./src/services/Renderer";
import { Router } from "./src/services/Router";
import { Events } from "./src/services/Events";
import { Api } from "./src/services/Api";

const app: App = {};

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
  setTimeout(() => {
    app.renderer.init(app.scopes);
    app.events.SyncScrollbars(app.scopes.collumns, app.scopes.scrollbar);
    app.events.SyncScrollbars(app.scopes.scrollbar, app.scopes.collumns);
    app.events.init();
    app.api.init();
  }, 100);
});
