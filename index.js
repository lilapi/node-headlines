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
