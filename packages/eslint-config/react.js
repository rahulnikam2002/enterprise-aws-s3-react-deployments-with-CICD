import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export const reactConfig = tseslint.config(
    {
        ignores: [
            "dist",
            "coverage",
            "jest.config.cjs",
            "vite.config.ts"
        ]
    },

    js.configs.recommended,

    ...tseslint.configs.recommended,

    {
        files: ["**/*.{ts,tsx}"],

        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },

            globals: globals.browser,
        },

        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },

        rules: {
            ...reactHooks.configs.recommended.rules,

            "react-refresh/only-export-components": [
                "warn",
                {
                    allowConstantExport: true,
                },
            ],

            "no-console": "warn",
            "prefer-const": "error",
        },
    }
);