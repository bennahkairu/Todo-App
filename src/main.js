import { createApp } from "vue";
import { createPinia } from "pinia";
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

import App from "./App.vue";
import "./assets/main.css";

const app = createApp(App);

Sentry.init({
  app,
  dsn: "https://9021f8fe1064450e921ff4e9449957a2@o4504446196514816.ingest.sentry.io/4504446201692160",
  integrations: [
    new BrowserTracing({
      tracePropagationTargets: [
        "localhost:5173",
        "https://kazi-quest-kairu.netlify.app",
        /^\//,
      ],
    }),
  ],
  tracesSampleRate: 1.0,
});

app.use(createPinia());
app.mount("#app");
