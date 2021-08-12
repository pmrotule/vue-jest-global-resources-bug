# vue-jest-global-resources-bug

Vue project to reproduce the issue with `vue-jest` where relative paths imported inside a global stylesheet will throw an error. I fixed it in https://github.com/vuejs/vue-jest/pull/373.

## Steps to reproduce

```
yarn test
```

It should throw the following error:

```
Error: Can't find stylesheet to import.
  ╷
1 │ @import './unit.scss';
  │         ^^^^^^^^^^^^^
  ╵
  stdin 1:9  root stylesheet
```

## What's causing the issue

While building this reproduction repository, even with relative paths inside a global stylesheet, the test was still green and started failing only after adding CSS modules in HelloWorld.vue.

## Steps to see the fix

The branch `fix` is using my fork with the fix.

- `git checkout fix`
- `yarn install`
- `yarn test`
- The test should be green this time
