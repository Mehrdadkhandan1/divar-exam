import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    // Next.js و فایل‌های تولید شده
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Dependencies
    "node_modules/**",
    ".vercel/**",
    // فایل‌های build
    ".turbo/**",
  ]),
  {
    rules: {
      // قوانین سفارشی
      "react/display-name": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
]);

export default eslintConfig;
