# No Plain English ESlint plugin

Eslint plugin that warn you about the usage of plain English text in your javascript projects

# Motivation

Localized web apps use an external library to do translation, most likeley you don't need to use
any plain English copy text in your codebase anymore. 

This plugin can warn you about English copy text in code and push you to the best practicies of not adding plain English
text anymore in favor of using translation keys and translation function calls instead.

Of course you can use to help you count how many times you used plain English text in your codebase as well.


# Installation

```sh
npm i eslint-plugin-no-plain-english
```

# Usage

Using the new ESlint Flat Config

```javascript
import NoEnglishEslint from 'eslint-plugin-no-plain-english';


export default [
    {
        plugins: {
          'no-plain-english': NoEnglishEslint,
        },
        ignores: ['**/*.stories.{ts,tsx}', '**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
        rules: {
          'no-plain-english/no-plain-english': 'error',
          'no-plain-english/no-string-expressions': 'warn',
          'no-plain-english/no-string-in-title': 'error',
        },
    }
]
```

# Rules

## no-plain-english

Will disallow plain English in JSX children

Example that will trigger error for this rule:

```jsx
<p>Hello world</p>
```

## no-string-expressions

Will disallow string English copy text in JSX children

Example that will trigger error for this rule:

```jsx
<p>{'Hello world'}</p>
```

## no-string-in-title

Will disallow string English copy text in JSX title attributes

Example that will trigger error for this rule:

```jsx
<p title='hello world'></p>
```
