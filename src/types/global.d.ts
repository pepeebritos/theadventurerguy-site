declare global {
  interface Window {
    dataLayer: any[];
    gtag: (command: string, action: string, parameters?: any) => void;
  }
}

export {};
