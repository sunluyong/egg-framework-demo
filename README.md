# framework-demo

egg.js framework demo

## QuickStart

```bash
$ npm install
$ npm test
```

publish your framework to npm, then change app's framework config:

```js
// {app_root}/index.js
{
  "name": "egg-demo",
  "egg": {
    "framework": "egg-framework-demo"
  },
  "dependencies": {
    "egg-framework-demo": "^1"
  }
}
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

