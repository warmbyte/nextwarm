import React, { Fragment } from 'react';

export interface GAScriptProps {
  trackingID: string;
}

export const GAScript: React.FC<GAScriptProps> = ({ trackingID }) => {
  return (
    <Fragment>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.__ga_tracking_id = "${trackingID}"
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${trackingID}', {
                page_path: window.location.pathname,
              });
          `,
        }}
      />
    </Fragment>
  );
};
