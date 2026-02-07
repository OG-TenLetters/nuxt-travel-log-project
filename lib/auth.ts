// lib/auth.ts
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { createAuthMiddleware } from "better-auth/api";
import db from "./db/index";
import env from "./env";

export function getAuth() {
  return betterAuth({
    hooks: {
      after: createAuthMiddleware(async (ctx) => {
        if (ctx.path === "/get-session") {
          if (!ctx.context.session) {
            return ctx.json({
              session: null,
              user: null,
            });
          }
          return ctx.json(ctx.context.session);
        }
      }),
    },
    baseURL: env.BETTER_AUTH_URL,
    trustedOrigins: [
      "https://nuxt-travel-log-project.vercel.app",
      "http://localhost:3000",
    ],
    database: drizzleAdapter(db, {
      provider: "sqlite",
    }),
    socialProviders: {
      github: {
        clientId: env.GITHUB_CLIENT_ID,
        clientSecret: env.GITHUB_CLIENT_SECRET,
      },
    },
  });
}
