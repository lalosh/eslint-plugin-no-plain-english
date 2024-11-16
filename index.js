const plugin = {
  meta: {
    name: "eslint-plugin-no-plain-english",
    version: "1.0.0",
  },
  configs: {},
  rules: {
    meta: {
      type: "problem",
      docs: {
        description: "Disallow hardcoded strings in JSX",
      },
      schema: [], // no options
      messages: {
        hardcodedString: "Avoid hardcoding plain English text in JSX.",
      },
    },
    create(context) {
      return {
        JSXText(node) {
          if (/\w/.test(node.value.trim())) {
            context.report({
              node,
              messageId: "hardcodedString",
            });
          }
        },
      };
    },
  },
  processors: {},
};

// for ESM
export default plugin;

// OR for CommonJS
module.exports = plugin;
