import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next", "next/core-web-vitals", "prettier", "eslint-config-prettier"),
  {
    rules: {
      quotes: ["error", "double"],
      "import/no-unresolved": 0,
      "object-curly-spacing": 0,
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "max-len": [
        1,
        100,
        2,
        {
          ignorePattern: "^import\\s.+\\sfrom\\s.+;$",
          ignoreUrls: true,
        },
      ],
      "require-jsdoc": "off",
      "new-cap": 0,
    },
  },
];

export default eslintConfig;
