/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.Stylus
 * @static
 */
var fs = require('fs');

module.exports = function(config) {
  var stylus = {
        "prod": {
          "options": {
            "compress":true,
            "urlfunc": 'url', 		 //	Data inlining via data URIs
            "paths": [config.root],
            "import": ['nib'] // advanced mixins and other useful things https://github.com/visionmedia/nib
          },
          "files": {}
        },

        "dev":{
          "options":{
            "compress":false
          }
        }
      },
      dirs = fs.readdirSync(config.stylesheets+'/stylus');

  dirs.forEach( function(dir) {
    var files;

    if( ffs.statSync(config.stylesheets+'/stylus/'+dir).isDirectory() ) {
      files = fs.readdirSync(config.stylesheets+'/stylus/'+dir);
      stylus.prod.files[config.cssbin+'/'+dir+'.css'] = [];

      files.sort();

      files.forEach( function(file) {
        if( fs.statSync(config.stylesheets+'/stylus/'+dir+'/'+file).isFile() && file.substr(-4)=='styl' ) {
          stylus.prod.files[config.cssbin+'/'+dir+'.css'].push(config.stylesheets+'/stylus/'+dir+'/'+file);
        }
      });
    }
  });

  stylus.dev.files = stylus.prod.files;
  stylus.dev.options.import = stylus.prod.options.import;

  return stylus;
}
