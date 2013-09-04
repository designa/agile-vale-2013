module.exports = function(grunt) {
  grunt.initConfig({
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

  grunt.registerTask("default", ["imagemin"]);
};
