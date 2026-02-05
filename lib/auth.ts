// lib/auth.ts
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "./db/index";
import env from "./env";

export function getAuth() {
  return betterAuth({
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
