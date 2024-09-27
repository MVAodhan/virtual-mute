declare global {
  interface Window {
    runtime: any;
  }
}

export interface Shortcut {
  id: string;
  keyValue: string;
  ctrl: boolean;
  shift: boolean;
}
