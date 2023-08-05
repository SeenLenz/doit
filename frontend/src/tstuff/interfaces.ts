interface App {
  init?: () => void;
  scopes?: Scopes;
  router?: Router;
  renderer?: Renderer;
  events?: Events;
  api?: Api;
}
interface Router {
  init: () => void;
}
interface Api {
  date: Date;
  init: () => Promise<void>;
  load_page: () => void;
}
interface Events {
  init: () => void;
  SyncScrollbars: (scrollbar1: HTMLElement, scrollbar2: HTMLElement) => void;
  NextPage: (e: Event) => void;
  PreviousPage: (e: Event) => void;
  AppendToCal: (e: Event) => void;
}
interface Renderer {
  init: (Scopes: Scopes) => void;
  UpdateRow: (rownum: number, val: number) => void;
  ignoreScrollEvents: Boolean;
}

interface Scopes {
  collumns: HTMLElement;
  scrollbar: HTMLElement;
  timestamps: NodeListOf<HTMLElement>;
}
