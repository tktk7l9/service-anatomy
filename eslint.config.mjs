import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import reactPkg from "react/package.json" with { type: "json" };

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // OpenNext / wrangler の生成物。lint 対象に入れると数百件のエラーになる。
    ".open-next/**",
    ".wrangler/**",
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "coverage/**",
  ]),
  {
    // eslint-plugin-react's `version: "detect"` calls context.getFilename(),
    // which ESLint 10 removed. Pin the version from the installed package.
    settings: { react: { version: reactPkg.version } },
  },
]);

export default eslintConfig;
