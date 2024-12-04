import { createRouteHandler } from "uploadthing/next";
import { fileRouter } from "./core";

// LE CODE EST BON

export const { GET, POST } = createRouteHandler({
  router: fileRouter,
});
