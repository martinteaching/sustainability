// 'require' the http library, in order to import it.
const http = require('http');

// Note: We could also structure this as a class, and return it via export.
module.exports = {
  // Accept a yet unknown number of parameters using the ellipsis before options.
  httpPostJSON: function({body, ...options}) {
    // A 'Promise' allows us to control the execution order of our program,
    // which may do multiple things in parallel by default (asynchronously).
    // We are able to pause (await) the results ('success' (resolve) or 'failure'
    // (reject)) of a promise, so everything happens in an order we want. In
    // this case, we place our HTTP request code within a promise, so we can
    // ensure we get a response before continuing with the rest of our code.
    return new Promise((resolve, reject) => {

      const request = http.request({
        method: 'POST',
        // Add some HTTP-specific information to the request, including the
        // length and type of what we are sending. This will be used by the server.
        headers: {
          'Content-Length': body.length,
          'Content-Type': 'application/json',
        },
        ...options,
      // Prepare what to do when a response is received.
      }, response => {
        // Initially collect data received back from server in byte chunks.
        const chunks = [];
        response.on('data', data => chunks.push(data));
        response.on('end', () => {
          // Combine all our byte chunks together to form the response string we want.
          let body = Buffer.concat(chunks);
          // Successfully complete our promise.
          resolve(body.toString())
        })
      });

      // Prepare what to do if there is an error: cause our promise to fail.
      request.on('error', reject);
      // Send the request
      if(body) request.write(body);
      // Complete the request.
      request.end();

    });
  }
};
