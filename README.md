# think-response-time

Response time for ThinkJS.

This module creates a middleware that records the response time for requests in ThinkJS. The "response time" is defined here as the elapsed time from when a request enters this middleware to when the headers are written out to the client.

## Installation

    $ npm install think-response-time

## How To Use in ThinkJS 2.x

1. add hook in `src/common/config/hook.js`

      export default {
        request_begin: ['append', 'response-time']
      }

2. add hook middleware in `src/common/bootstrap/middleware.js`

    import responseMiddleware from 'think-response-time';

    think.middleware('response-time', responseMiddleware());

## Advanced Configuration

      import responseMiddleware from 'think-response-time';

      think.middleware('response-time', responseMiddleware({
        digits: 5,
        suffix: true,
        header: 'think-response-time'
      }));

  See [response-time](https://github.com/expressjs/response-time) to find more usage.

## License

[MIT](LICENSE)
