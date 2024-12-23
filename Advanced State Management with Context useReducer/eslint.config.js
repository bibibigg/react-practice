import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect", // React 버전을 자동으로 감지
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // React 자동 변환 허용
      "react/prop-types": "off", // prop-types 경고
    },
  },
];
