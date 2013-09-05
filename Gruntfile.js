module.exports = function(grunt) {

  grunt.initConfig({

    cssmin: {
      combine: {
        files: {
          "stylesheets/application.min.css":
          [
          "stylesheets/bootstrap.min.css",
          "stylesheets/bootstrap-responsive.min.css",
          "stylesheets/application.css",
          "stylesheets/conheca-mais.css"
          ]
        }
      }
    },

    watch: {
      options: {
        // livereload: true,
      },
      css: {
        files: "stylesheets/*.css",
        tasks: ["cssmin"],
      },
    },

    bgShell: {
      gitPull: {
        cmd: "git pull"
      },
      gitAdd: {
        cmd: "git add -A"
      },
      gitCommit: {
        cmd: 'git commit -m "grunt deploy"'
      },
      gitPush: {
        cmd: 'git push'
      },
      deploy: {
        cmd: "cap deploy"
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: "images/",
          src: ["**/*.{png,jpg,jpeg,gif}"],
          dest: "images/"
        }]
      }
    }

  });

  grunt.loadNpmTasks("grunt-contrib-imagemin");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-bg-shell");

  grunt.registerTask("deploy", ["cssmin", "imagemin", "bgShell:deploy"]);
  grunt.registerTask("default", ["watch"]);
};
