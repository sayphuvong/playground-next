type GtagValue = {
  app_name?: string;
  screen_name?: string;
  customName?: string;
};

type GtagFunction = (event: string, action: string, value: GtagValue) => void;

type WindowWithDataLayer = Window & {
  gtag?: GtagFunction;
};

declare const window: WindowWithDataLayer;

export const pushGtagEvent = (action: string, value: GtagValue) => {
  if (typeof window.gtag === "function") {
    window.gtag("event", action, value);
  }
};
