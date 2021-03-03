import global from '../global';

export const pageview = (url: URL) => {
  if (global.gtag && global.__ga_tracking_id) {
    global.gtag('config', global.__ga_tracking_id, {
      page_path: url,
    });
  }
};
