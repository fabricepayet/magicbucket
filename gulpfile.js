var gulp            = require( 'gulp' ),
    sass            = require( 'gulp-ruby-sass' ),
    autoprefixer    = require( 'gulp-autoprefixer' );


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


gulp.task( 'watch', function () {
    gulp.watch( '_sass/**/*.scss', [ 'styles' ] );
} );


gulp.task( 'default', function () {
    gulp.start( 'styles' );
} );