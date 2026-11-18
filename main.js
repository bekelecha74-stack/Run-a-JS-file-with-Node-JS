// Operations: Object Access, Invocation(Prints the intial prompt to the terminal.)
      console.log("What's your name?");

      // Operations: Listens for input from the standard input stream (your keyboard)
      // and triggers the callback function once you press Enter.
      process.stdin.on('data', function(data) {

          // Operations: Convers the raw input into a readable string
          const name = data.toString().trim();
          
          // Operations: Outputs the greeting with the input (name).
          console.log(`Hello, ${name}!`);

      });