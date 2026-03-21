import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "vite-plugin-sitemap";

const SITE_URL = "https://synchronicity.ju-acm.com";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: SITE_URL,
      dynamicRoutes: [
        "/home",
        "/event/cybersecurity",
        "/event/web-development",
        "/event/ai-ml",
        "/event/web3",
        "/problem/web-development/1",
        "/problem/web-development/2",
        "/problem/web3/1",
        "/problem/web3/2",
        "/problem/ai-ml/1",
        "/problem/ai-ml/2",
      ],
    }),
  ],
});
