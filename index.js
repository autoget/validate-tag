const core = require('@actions/core');
const github = require('@actions/github');

try {
  console.log("Start tag validation")
  // const prereleaseInput = core.getInput("PRERELEASE");
  const ctx = github.context

  const branch_name = ctx.payload.release.target_commitish;
  const is_prerelease = ctx.payload.release.prerelease;
  const release_version = ctx.payload.release.tag_name;

  const master_branch_name = "master"
  const release_prefix = "r-";

  const is_master_branch = master_branch_name === branch_name;

  const is_release_version = release_version.startsWith(release_prefix)

  if (!is_prerelease && is_master_branch && is_release_version) {
    core.info("Release tag validation succeeded")
    return 0
  } else if (is_prerelease) {
    core.info("Pre-Release tag validation succeeded")
    return 0
  } else {
    core.setFailed("Tag validation failed")
    return 1
  }

} catch (error) {
  core.setFailed(error.messsage)
}