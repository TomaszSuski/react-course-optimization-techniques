import million from "million/compiler";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// million.js config
// install million by npm install million
// details at million js website
export default defineConfig({
  plugins: [
    million.vite({
      auto: {
        threshold: 0.05,
        skip: ["useBadHook", /badVariable/g],
      },
    }),
    react(),
  ],
});

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
