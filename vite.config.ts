import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: "/curlytales-visuals/",

  tanstackStart: {
    server: { entry: "server" },
  },
});
