/* eslint-disable @next/next/next-script-for-ga */
import { appConfig } from "@/configs/appConfig";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google tag (gtag.js) */}
        {Boolean(appConfig.GTM_KEY) && (
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${appConfig.GTM_KEY}`}
          />
        )}
        {Boolean(appConfig.GTM_KEY) && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${appConfig.GTM_KEY}');
            `,
            }}
          />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
