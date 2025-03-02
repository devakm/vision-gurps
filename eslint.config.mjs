import globals from "globals";
import pluginJs from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";

export default [
    {
        ignores: ["script.js"],
    },
    pluginJs.configs.recommended,
    stylistic.configs.customize({
        indent: 4,
        quotes: "double",
        semi: true,
        jsx: false,
        arrowParens: "always",
        braceStyle: "1tbs",
        blockSpacing: true,
        quoteProps: "consistent-as-needed",
        commaDangle: "always-multiline",
    }),
    {
        languageOptions: {
            ecmaVersion: "latest",
            globals: {
                ...globals.browser,
                AbstractBaseFilter: "readonly",
                BaseSamplerShader: "readonly",
                canvas: "readonly",
                ClipperLib: "readonly",
                CONFIG: "readonly",
                CONST: "readonly",
                Color: "readonly",
                ColorAdjustmentsSamplerShader: "readonly",
                DetectionMode: "readonly",
                gurps: "readonly",
                foundry: "readonly",
                game: "readonly",
                GlowOverlayFilter: "readonly",
                Hooks: "readonly",
                loadTexture: "readonly",
                OutlineOverlayFilter: "readonly",
                PIXI: "readonly",
                PointSourcePolygon: "readonly",
                Roll: "readonly",
                SpriteMesh: "readonly",
                Token: "readonly",
                VisionMode: "readonly",
            },
        },
        rules: {
            "no-unused-vars": ["error", {
                vars: "all",
                args: "none",
                argsIgnorePattern: "^_",
                caughtErrors: "all",
                caughtErrorsIgnorePattern: "^_",
                destructuredArrayIgnorePattern: "^_",
                ignoreRestSiblings: false,
                reportUsedIgnorePattern: false,
            }],
            "@stylistic/padding-line-between-statements": [
                "error",
                { blankLine: "always", prev: "*", next: ["block-like", "break", "class", "continue", "function", "return"] },
                { blankLine: "always", prev: ["block-like", "class", "function"], next: "*" },
                { blankLine: "always", prev: "expression", next: ["const", "let", "var"] },
                { blankLine: "always", prev: ["const", "let", "var"], next: "expression" },
                { blankLine: "never", prev: ["break", "continue", "return"], next: "*" },
                { blankLine: "never", prev: "*", next: "case" },
            ],
            "@stylistic/no-mixed-operators": "off",
            "@stylistic/no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],
        },
    },
];
