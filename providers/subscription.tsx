'use client';

export type SubscriptionContextType = {
  isSubscribed: boolean;
  plan: 'hobby' | 'pro' | 'enterprise' | undefined;
};



export const useSubscription = () => {
  return {
    isSubscribed: true,
    plan: 'pro',
  };
};
