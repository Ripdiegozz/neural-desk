import { ConvexError } from 'convex/values';
import { query, mutation } from './_generated/server.js';

export const getMany = query({
  args: {},
  handler: async (ctx) => {
    const users = await ctx.db.query('users').collect();
    return users;
  },
});

export const add = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();

    if (identity === null) {
      throw new ConvexError('You are not authenticated!');
    }

    const userId = await ctx.db.insert('users', {
      name: `User ${Date.now()}`,
    });

    return userId;
  },
});
