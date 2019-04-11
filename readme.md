# DSMUN '19

The Doon School Model United Nations 2019 website.

## Structure

We use [eleventy](//www.11ty.io), a static site generator. Eleventy is configured through [`.eleventy.js`](.eleventy.js) and [`.eleventyignore`](.eleventyignore).

Most layouts and partials use [pug](//pugjs.org). Most pages will use markdown.

### Building

The following will build the site in `dist/`.

```sh
npm run build
```

## Testing

We use [npm](//npmjs.com) to manage development dependencies (mainly linters).

### Installing dependencies

Run the following in the project directory to install all dependencies.

```sh
npm install
```

### Running tests locally

```sh
npm test
```

## Deployment

We use [now](//zeit.co/now) (version 2), a versatile serverless deployment service. Now settings are configured through [`now.json`](now.json). Since this repository has [now-Github integration](//zeit.co/github) installed, the site is deployed to production with each push to `master`. Additionally, all PRs are deployed to a link that is meant to be used for testing.

## Contributing

Contributions are more than welcome. Please read through the [contribution guidelines](.github/contributing.md) before opening a pull request.

## License

Licensed under the [MIT License](//shreyas.mit-license.org).
