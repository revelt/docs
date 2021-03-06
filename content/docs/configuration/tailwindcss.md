---
title: "Tailwind CSS Config"
slug: "tailwindcss-config"
description: "See how the Tailwind CSS configuration is customized for email development in Maizzle"
---

import Alert from '~/components/Alert.vue'

# Tailwind CSS Config

Maizzle comes with an email-tailored `tailwind.config.js`

## Spacing units

Because they are poorly supported in email, `rem` units have been replaced with `px` ones, with values better suited for email client viewports.

## !important

Emails still need to use inline CSS, most notably for these reasons:

- Outlook only reads the first class in a `class=""` attribute, and ignores the rest. 
  So it'll only use `a` from `class="a b"`
- Some email clients don't support embedded CSS (i.e. in `<style>`)

Because of this, the `important` option is set to `true` by default, so that responsive utilities can actually override inlined CSS.

<alert>This applies only to <code>&lt;head&gt;</code> CSS, inlined CSS will not contain <code>!important</code></alert>

You may disable this by adding the `important` key in your Tailwind config:

```js
// tailwind.config.js
module.exports = {
  important: false,
}
```

## Separator

Characters like `:` in `hover:bg-black` need to be \escaped in CSS. 

Because some email clients (Gmail 👀) fail to parse selectors with escaped characters, Maizzle normalizes all your CSS selectors and HTML classes, replacing any escaped characters it finds with email-safe alternatives.

So you can safely use Tailwind's awesome default separator and write classes like `sm:w-1/2` - Maizzle will convert that to `sm-w-1-2` in your compiled template:

```js
// tailwind.config.js
module.exports = {
  separator: ':',
  theme: {
    width: {
      '2/5': '40%', // w-2-5
      '50%': '50%', // w-50pc
      '2.5': '0.625rem', // w-2_5
    }
  }
}
```

You can also [configure the replacement mappings](/docs/code-cleanup#safeclassnames).

## Screens

Maizzle uses a desktop-first approach with `max-width`, instead of Tailwind's default mobile-first with `min-width`. 

Of course, you're free to adjust this as you like:

```js
screens: {
  sm: {max: '600px'},
},
```

More on screens, in the [Tailwind CSS docs](https://tailwindcss.com/docs/responsive-design).

## Plugins

You can of course use any Tailwind plugin, please [see the docs](https://tailwindcss.com/docs/configuration#plugins).
