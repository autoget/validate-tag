const core = require('@actions/core');
const github = require('@actions/github');

try {
  console.log("Start validation")
  const prereleaseInput = core.getInput("prerelease");

  core.branch

  const branch=$()
} catch (error) {
  core.setFailed(error.messsage)
}