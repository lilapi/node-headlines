#! /usr/bin/env node

const args = process.argv.slice(2);
const log = console.log;
const apply = Symbol("apply");

const commands = {
  help: {
    [apply]() {
      log("Help")
    }
  },
  node: {
    [apply]() {
      // See: https://nodejs.org/dist/latest-v18.x/SHASUMS256.txt
      // And: https://nodejs.org/dist/latest/SHASUMS256.txt
      log("LTS: 18.16.1, Latest: 20.4.0")
    },
  },
  react: {
    [apply]() {
      log("18.2.0")
    },
  },
  rust: {
    [apply]() {
      // See: https://nodejs.org/dist/latest-v18.x/SHASUMS256.txt
      // And: https://nodejs.org/dist/latest/SHASUMS256.txt
      log("1.71.0 released July 13 2023:");
      log("- stabilizes C-unwind.");
      log("- stabilizes debug_visualizer attribute for embedding data structure visualizations.");
      log("- raw-dylib linking on Windows for easier builds.");
      log("Read more: https://blog.rust-lang.org/2023/07/13/Rust-1.71.0.html");
    },
  },
};

let lookup = commands;
for (const arg of args) {
  if (arg in lookup) {
    lookup = lookup[arg]
  } else {
    lookup = null;
    break;
  }
}

if (lookup === null) {
  log("Unknown command:", args.join(' '));
}
else if (apply in lookup) {
  lookup[apply]();
} else {
  commands.help[apply]();
}


process.exit(0);
