module.exports = (grunt) ->
  grunt.initConfig
    clean:
      dist: ["dist/"]
      coffee: ["dist/*.coffee"]

    coffee:
      compile:
        files: ["dist/bacon.jquery.ajax.js": "src/bacon.jquery.ajax.coffee"]

    uglify:
      dist:
        src: "dist/bacon.jquery.ajax.js"
        dest: "dist/bacon.jquery.ajax.min.js"

  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.loadNpmTasks "grunt-contrib-clean"
  grunt.loadNpmTasks "grunt-contrib-uglify"
  grunt.registerTask "build", ["clean:dist", "coffee", "uglify", "clean:coffee"]
  grunt.registerTask "default", ["build"]
