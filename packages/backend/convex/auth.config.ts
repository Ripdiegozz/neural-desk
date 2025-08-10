const domain = process.env.CLERK_JWT_ISSUER_DOMAIN;
if (!domain) {
  throw new Error('Missing CLERK_JWT_ISSUER_DOMAIN env var. Set it to your Clerk JWT issuer domain.');
}

export default {
  providers: [
    {
      domain,
      applicationID: 'convex',
    },
  ],
} as const;
