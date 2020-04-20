// Gruntfile.js
 
// Вся конфигурация находится внутри этой функции
module.exports = function(grunt) {
 
    // ===========================================================================
    // Конфигурация GRUNT ===========================================================
    // ===========================================================================
    grunt.initConfig({
   
     //Здесь будут указаны модули и их настройки
     
      pug: {
        debug: {
                    options: {
                        pretty: true,
                      data: {
                        debug: true
                      }
                    },
                    files: {
                      'index.html' : 'pug/index.pug'
                    }
                  }
            
    },
    less: {
      development: {
          options: {
            compress: false,
            yuicompress: true,
            optimization: 2
          },
          files: {
            "css/style.css": "less/style.less" 
          }
        }
      },
    watch: {
      css: {
        files: 'less/*.less',
        tasks: ['less'],
        options: {
          //livereload: true,
        },
      },
        pug: {
          files: 'pug/*.pug', 
           tasks: ['pug'],
           options: {
             livereload: true
          }
         }
       },
       autoprefixer: {
        options: {
            browsers: ["last 2 versions", "Firefox ESR", "Opera 12.1"]
        },
        files: {
            "css/style.css": ["css/style.css"]
          }
        }
    });
   
    // ===========================================================================
    // Загружаем модули GRUNT ========================================================
    // ===========================================================================
grunt.loadNpmTasks('grunt-contrib-pug');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.registerTask('default', ['autoprefixer', 'pug', 'less', 'watch']);
};