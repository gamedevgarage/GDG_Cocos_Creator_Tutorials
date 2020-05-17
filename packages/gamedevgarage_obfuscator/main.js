// main.js

var path = require('path');
var fs = require('fs');
var JavaScriptObfuscator = require('javascript-obfuscator');

function onBeforeBuildFinish (options, callback) {

    var mainJsPath = path.join(options.dest, '/src/project.js');  // get path of project.js in build folder
	var script = fs.readFileSync(mainJsPath, 'utf8');     // read 
	// Obfuscate
	var ob_res = JavaScriptObfuscator.obfuscate(script,
		{
			compact: true,
			controlFlowFlattening: true
		}
	);

    fs.writeFileSync(mainJsPath, ob_res);        // save
	Editor.log("Game Dev Garage Obfuscator: /src/project.js obfuscated!");
    callback();
}

module.exports = {
    load () {
        Editor.Builder.on('before-change-files', onBeforeBuildFinish);
    },

    unload () {
        Editor.Builder.removeListener('before-change-files', onBeforeBuildFinish);
    }
};