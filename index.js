const plugin = {
  meta: {
    name: "eslint-plugin-no-plain-english",
    version: "1.0.4",
  },
  configs: {},
  rules: {
    "no-string-in-title": {
      meta: {
        type: "problem",
        docs: {
          description: "Disallow plain English strings in JSX attributes",
        },
        schema: [], // no options
        messages: {
          plainEnglishInAttributes: "Avoid English strings in JSX attributes.",
        },
      },
      create(context) {
        return {
          JSXAttribute(node) {
            if (
              node?.name?.name == "title" &&
              node?.value?.type == "Literal" &&
              /\w/.test(node?.value?.value?.trim?.())
            ) {
              context.report({
                node,
                messageId: "plainEnglishInAttributes",
              });
            }
          },
        };
      },
    },

    "no-string-expressions": {
      meta: {
        type: "problem",
        docs: {
          description: "Disallow plain English strings in JSX expressions.",
        },
        schema: [], // no options
        messages: {
          plainEnglishInQuotes: "Avoid English strings in JSX expressions.",
        },
      },
      create(context) {
        return {
          JSXExpressionContainer(node) {
            if (
              node?.expression?.type == "Literal" &&
              /\w/.test(node?.expression?.value?.trim?.()) &&
              node?.parent?.type !== "JSXAttribute"
            ) {
              context.report({
                node,
                messageId: "plainEnglishInQuotes",
              });
            }
          },
        };
      },
    },

    "no-plain-english": {
      meta: {
        type: "problem",
        docs: {
          description: "Disallow plain English strings in JSX children.",
        },
        schema: [], // no options
        messages: {
          plainEnglish: "Avoid plain English strings in JSX children.",
        },
      },
      create(context) {
        return {
          JSXText(node) {
            if (/\w/.test(node?.value?.trim?.())) {
              context.report({
                node,
                messageId: "plainEnglish",
              });
            }
          },
        };
      },
    },
  },
  processors: {},
};


module.exports = plugin;
