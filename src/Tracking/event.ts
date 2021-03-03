import global from '../global';

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

export const event = ({ action, category, label, value }: GTagEvent) => {
  if (global.gtag) {
    global.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
