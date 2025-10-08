declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (command: string, action: string, parameters?: unknown) => void;
  }
}

export {};
