import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks"; // Hooks 플러그인 추가

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended, // 기본 JS 규칙
  pluginReact.configs.flat.recommended, // React 기본 규칙
  {
    plugins: {
      "react-hooks": pluginReactHooks, // react-hooks 플러그인 명시
    },
    rules: {
      // React 기본 규칙 커스터마이징
      "react/react-in-jsx-scope": "off", // React 자동 변환 허용
      "react/prop-types": "off", // prop-types 경고 끄기

      // React Hooks 규칙 추가
      "react-hooks/rules-of-hooks": "error", // Hooks 규칙 강제 (오류로 표시)
      "react-hooks/exhaustive-deps": "warn", // 의존성 배열 경고
    },
    settings: {
      react: {
        version: "detect", // React 버전 자동 감지
      },
    },
  },
];
