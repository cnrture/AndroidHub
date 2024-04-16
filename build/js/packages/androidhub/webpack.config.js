let config = {
  mode: 'development',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: [require('path').resolve(__dirname, "kotlin/androidhub.js")]
};
config.output = {
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "androidhub.js"
            : "androidhub-[name].js";
    },
    library: "site",
    libraryTarget: "umd",
    globalObject: "this"
};
config.output.path = require('path').resolve(__dirname, "../../../../site/build/dist/js/developmentExecutable")
    // source maps
    config.module.rules.push({
            test: /\.m?js$/,
            use: ["source-map-loader"],
            enforce: "pre"
    });
    config.devtool = 'eval-source-map';
config.ignoreWarnings = [/Failed to parse source map/]
    
// Report progress to console
// noinspection JSUnnecessarySemicolon
;(function(config) {
    const webpack = require('webpack');
    const handler = (percentage, message, ...args) => {
        const p = percentage * 100;
        let msg = `${Math.trunc(p / 10)}${Math.trunc(p % 10)}% ${message} ${args.join(' ')}`;
        msg = msg.replace(require('path').resolve(__dirname, "../.."), '');;
        console.log(msg);
    };

    config.plugins.push(new webpack.ProgressPlugin(handler))
})(config);

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin())
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);
module.exports = config
