interface Window {
  gtag?: (
    command: 'event' | 'config' | 'set',
    targetId: string,
    parameters?: {
      event_category?: string;
      event_label?: string;
      value?: number;
      [key: string]: any;
    }
  ) => void;
}