import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://2cc862a458104026aa08fa39770169e5@o4505252349149184.ingest.sentry.io/4505252353212416',
  tracesSampleRate: 1,
  debug: false
});
