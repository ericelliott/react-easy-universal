# Testing Universal Applications

Testing Universal Applications requires a more thorough approach than testing typical single page apps. Because the server may render exactly what the client renders, it can be impossible to determine whether the server rendered something, or whether the client rendered something without testing server responses and client renders in isolation from each other.

Therefore, you need a multi-layered approach to testing.

Before running tests:

1. Clone the repo.
2. `npm install`

## Unit Tests

The regular unit tests don't require a browser or network, and should run very fast. They address particular components in isolation from things like the network, database, or large dependencies (which may be mocked or circumvented for the purposes of test isolation). These kinds of tests can provide a fairly thorough line of defense, and because of the isolation from slow resources will run very quickly, which makes them great tools for realtime developer interaction.

Run them with:

```sh
npm test
```

Or launch the realtime dev feedback console:

```sh
npm run watch
```


### Browser Unit Tests

The browser unit tests don't exercise the server rendering. Instead, they render into a static html file. They should be kept fast. Please avoid hitting the network or other long-running async operations.

```sh
npm run build:test
npm run start:client-tests
```

Open `http://localhost:3000/` in your browser.

To get automated rebuilds on change:

```sh
npm run watch:client
```


## Functional Tests

Functional tests hit the public APIs of the software under test in the context of the application, meaning that the web server and its dependencies are all running, and components are allowed to interact with each other. Functional tests are similar to integration tests in that they test not just components in isolation, but their ability to interact in order to produce the desired results.

## Browser Functional Tests

The browser functional tests exercise both the server-side and client-side rendering. It should be fairly easy to get them to run on a cloud service such as Sauce Labs. To run them locally:

```
npm run test:e2e
```

## Server functional Tests

Server functional tests hit the server routes without loading the client, testing that the expected responses are delivered. Server functional tests may hit the network, third party APIs, and database resources.
