const readline = require("readline");
let readlineInterface;

// Note: We could also structure this as a class, and return it via export.
module.exports = {
  startInput: function() {
    // Open a read interface with standard input, in order to collect input from the user.
    readlineInterface = readline.createInterface({input: process.stdin, output: process.stdout});
  },
  getInput: async function(question) {
    // Much like post requests, we use promises to handle user input, which takes time to
    // occur. Our promise here can again be awaited, while we wait for the user to respond,
    // and then we return the result.
    return new Promise((resolve, reject) => {
      readlineInterface.question(question, function(response) {
        resolve(response);
      });
    });
  },
  endInput: function() {
    // Close the interface, once we are finished collecting input.
    readlineInterface.close();
  }
}
