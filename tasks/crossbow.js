var crossbow = require("crossbow");

function crossbowBuild(deferred, previous, ctx) {

    ctx.vfs.src(ctx.makePaths('crossbow.input'))
        .pipe(crossbow.stream({
            config: {
                base:       ctx.config.get('crossbow.base'),
                prettyUrls: true,
                defaultLayout: 'default.hbs'
            },
            data:   {
                site:           "file:_config.yml",
                options:        "file:_doc/options.json",
                api:            "file:_doc/api.json",
                startCommands:  "file:../node_modules/browser-sync/lib/cli/opts.start.json",
                reloadCommands: "file:../node_modules/browser-sync/lib/cli/opts.reload.json",
                recipes:        require("bs-recipes/manifest.json")
            }
        }))
        .pipe(ctx.vfs.dest(ctx.config.get('crossbow.output')))
        .on("end", deferred.resolve);
}

module.exports.tasks = [crossbowBuild];