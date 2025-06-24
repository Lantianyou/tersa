import { getCredits } from '@/app/actions/credits/get';
import { env } from './env';


export const currentUser = async () => {
  return { id: 'foo' };
};

export const currentUserProfile = async () => {
  const user = await currentUser();

  if (!user) {
    throw new Error('User not found');
  }

  return {
    id: "mock-profile-123",
    userId: user.id,
    email: "mockuser@example.com",
    name: "Mock User",
    onboardedAt: new Date("2024-01-01T00:00:00Z"),
    subscriptionId: "mock-subscription-456",
    productId: "mock-product-789",
    createdAt: new Date("2023-12-01T00:00:00Z"),
    updatedAt: new Date("2024-01-15T00:00:00Z"),
    customerId: "mock-customer-123",
  };
};

export const getSubscribedUser = async () => {
  const user = await currentUser();

  if (!user) {
    throw new Error('Create an account to use AI features.');
  }

  const profile = await currentUserProfile();

  if (!profile) {
    throw new Error('User profile not found');
  }

  if (!profile.subscriptionId) {
    throw new Error('Claim your free AI credits to use this feature.');
  }

  const credits = await getCredits();

  if ('error' in credits) {
    throw new Error(credits.error);
  }

  if (
    profile.productId === env.STRIPE_HOBBY_PRODUCT_ID &&
    credits.credits <= 0
  ) {
    throw new Error(
      'Sorry, you have no credits remaining! Please upgrade for more credits.'
    );
  }

  return user;
};
