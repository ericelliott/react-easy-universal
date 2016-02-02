# Tests

Before running tests:

1. Clone the repo.
2. `npm install`

## Unit Tests

The regular unit tests don't require a browser or network, and should run very fast. Run them with:

```sh
npm test
```

### Browser Unit Tests

The browser unit tests don't exercise the server rendering. Instead, they render into a static html file. They should be kept fast. Please avoid hitting the network or other long-running async operations.

```sh
npm run build:test
npm run start:test-server
```

Open `http://localhost:3000/static/` in your browser.


## Browser Functional Tests

The browser functional tests exercise both the server-side and client-side rendering. It should be fairly easy to get them to run on a cloud service such as Sauce Labs. To run them locally:

```
npm run test:e2e
```
