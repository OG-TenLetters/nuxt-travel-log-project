import { getAuth } from "~~/lib/auth";

const auth = getAuth();

export default defineEventHandler(async (event) => {
  if (event.path.startsWith("/dashboard")) {
    const session = await auth.api.getSession({
      headers: event.headers,
    });
    if (!session?.user) {
      await sendRedirect(event, "/", 302);
    }
  }
});
