const core = require('@actions/core');
const github = require('@actions/github');

try {
  console.log("Start validation")
  const prereleaseInput = core.getInput("prerelease");
  console.log(prereleaseInput)
  const ctx = github.context
  console.log(ctx)
  // github.getOctokit().git.get

} catch (error) {
  core.setFailed(error.messsage)
}