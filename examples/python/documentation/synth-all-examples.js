const fs = require("fs");
const path = require("path");
const exec = require("child_process").exec;

(async function () {
  // find all main.py files
  const files = fs.readdirSync(path.resolve(__dirname));

  const targets = files.filter(
    (file) => file.startsWith("main-") && file.endsWith(".py")
  );

  console.log(targets);
  // synth each main.py file
  try {
    await Promise.all(
      targets.map((target) =>
        exec(`cdktf synth --app "pipenv run python ${target}"`, {
          cwd: path.resolve(__dirname),
          shell: true,
        })
      )
    );
  } catch (e) {
    console.error("One or more examples failed to synth");
    process.exit(1);
  }
})();
