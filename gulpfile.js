// gulp required plugins import
var gulp    = require( 'gulp' ),
    sass    = require( 'gulp-ruby-sass' );

gulp.task( 'styles', function () {
    return gulp
        .src( '_sass/**/*.scss' )
        .pipe( sass( {
            style: 'compressed'
        } ) )
        .pipe( autoprefixer(
            'last 2 version',
            'safari 5',
            'ie 8',
            'ie 9',
            'opera 12.1',
            'ios 6',
            'android 4',
            'Firefox > 20' ) )
        .pipe( gulp.dest( 'css' ) );
} );