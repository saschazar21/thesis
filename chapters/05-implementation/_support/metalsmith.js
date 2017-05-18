const metalsmith = require('metalsmith');   // Require metalsmith module.

module.exports = function metalsmithSetup(obj) {
  const config = obj;                       // Set obj as config variable.
  const metal = metalsmith(config.cwd)      // Set current working directory.
    .source(config.source)
    .destination(config.destination)
    .metadata(config.metadata);             // Set global metadata

  // Loop through config.plugins array of objects (name, configuration).
  config.plugins.forEach(function getPlugin(plugin) {
    // Dynamically require() plugin name.
    const loadedPlugin = require(plugin.name);

    // Append plugin to metalsmith instance.
    metal.use(loadedPlugin(plugin.configuration));
  });

  return metal;                           // Return the configured instance.
};
