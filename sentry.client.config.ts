// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://c08c8382d42f6b4109a510d665fdd882@o4508899438755840.ingest.de.sentry.io/4508899443343440",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
