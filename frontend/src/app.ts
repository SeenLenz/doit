import "./style.scss";
import scrollsync from "./components/scrollbar";
import { Renderer } from "./services/Renderer";
import { Router } from "./services/Router";
import { Events } from "./services/Events";
import { Api } from "./services/Api";

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

  await app.api.init();
  app.renderer.init(app.scopes);
  app.events.SyncScrollbars(app.scopes.collumns, app.scopes.scrollbar);
  app.events.SyncScrollbars(app.scopes.scrollbar, app.scopes.collumns);
  app.events.init();
});
