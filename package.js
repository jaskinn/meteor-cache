Package.describe({
  name: "jakerwr:meteor-cache",
  version: "0.0.2",
  summary: "Meteor cache package",
  git: "https://github.com/jskinn/meteor-cache",
  documentation: "README.md"
});

Npm.depends({
  "node-cache": "4.2.0"
});

Package.onUse(api => {
  api.versionsFrom("METEOR@1.6.1");

  const packages = ["ecmascript", "es5-shim", "npm-bcrypt"];

  api.use(packages);
  api.imply(packages);

  api.mainModule("server/index.js", "server");
});
