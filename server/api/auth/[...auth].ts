// server/api/auth/[...].ts
import { getAuth } from "../../../lib/auth";

export default defineEventHandler((event) => {
  const auth = getAuth();
  return auth.handler(toWebRequest(event));
});
