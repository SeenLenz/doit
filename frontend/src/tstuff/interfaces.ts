export interface AppTS {
  init?: () => void;
  scopes?: ScopesTS;
  router?: RouterTS;
  renderer?: RendererTS;
  events?: EventsTS;
  api?: ApiTS;
}
export interface RouterTS {
  init: () => void;
}
export interface ApiTS {
  date: Date;
  init: () => Promise<void>;
  load_page: () => void;
}
export interface EventsTS {
  init: () => void;
  SyncScrollbars: (scrollbar1: HTMLElement, scrollbar2: HTMLElement) => void;
  NextPage: (e: Event) => void;
  PreviousPage: (e: Event) => void;
  AppendToCal: (e: Event) => void;
}
export interface RendererTS {
  init: (Scopes: ScopesTS) => void;
  UpdateRow: (rownum: number, val: number) => void;
  ignoreScrollEvents: Boolean;
}

export interface ScopesTS {
  collumns: HTMLElement;
  scrollbar: HTMLElement;
  timestamps: NodeListOf<HTMLElement>;
}
