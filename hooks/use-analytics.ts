import type { Properties } from 'posthog-js';
import { usePostHog } from 'posthog-js/react';

export const useAnalytics = () => {
  const posthog = usePostHog();

  const track = (
    category: string,
    object: string,
    action: string,
    metadata: Properties
  ) => {
    // https://posthog.com/docs/product-analytics/best-practices#suggested-naming-guide
    const eventName = `${category}:${object}_${action}`;

    posthog.capture(eventName, metadata);
  };

  return { track };
};
