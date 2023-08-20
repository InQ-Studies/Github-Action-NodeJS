const core = require("@actions/core");
const github = require("@actions/github");

try {
//   throw new Error("This is an error");
  const name = core.getInput("who-to-greet");
  console.log(`Hello, ${name}`);

  const time = new Date().toTimeString();

  console.log(JSON.stringify(github, null, "\t"));
} catch (error) {
  core.setFaild(error.message);
}
