module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON( 'package.json' ),

        emberTemplates: {
            compile: {
                options: {
                    templateBasePath: /js\/templates\/components\//
                },
                files: {
                    'js/templates/components/templates.js': ['js/templates/components/*.hbs',
                        'js/templates/components/*.handlebars']
                }
            }
        },

        watch: {
            emberTemplates: {
                files: ['js/templates/components/*.hbs',
                            'js/templates/components/*.handlebars'],
                tasks: ['emberTemplates']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ember-templates');

    grunt.registerTask('default', ['emberTemplates', 'watch']);
};
