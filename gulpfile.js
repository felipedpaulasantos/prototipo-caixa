var gulp = require("gulp");
var replace = require("gulp-string-replace");
var rename = require("gulp-rename");
var bump = require("gulp-bump");
var zip = require("gulp-zip");
var buffer = require("gulp-buffer");
var argv = require("yargs").argv;
var uglify = require("gulp-uglify-es").default;
var sourcemaps = require("gulp-sourcemaps");
var plumber = require("gulp-plumber");
const pjson = require('./package.json');

var isProduction = argv.ver === undefined ? false : true;

// Gulp task to minify JavaScript files
gulp.task("scripts", function () {
  return gulp
    .src("./dist/*.js")
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(plumber())
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist"));
});

gulp.task("homolog", function () {
  return gulp
    .src(["./src/environments/templateEnv.ts"])
    .pipe(replace("CODE_environment", "6"))
    .pipe(rename("environment.ts"))
    .pipe(gulp.dest("./src/environments"));
});

gulp.task("prodCaixa", function () {
  return gulp
    .src(["./src/environments/templateEnv.ts"])
    .pipe(replace("CODE_environment", "7"))
    .pipe(replace("production: false", "production: true"))
    .pipe(replace("testing: true", "testing: false"))
    .pipe(rename("environment.ts"))
    .pipe(gulp.dest("./src/environments"));
});

// increase Patch
gulp.task("patch", function () {
  return gulp
    .src("./package.json")
    .pipe(bump())
    .pipe(gulp.dest("./"));
});

// increase feature
gulp.task("feature", function () {
  return gulp
    .src("./package.json")
    .pipe(
      bump({
        type: "minor"
      })
    )
    .pipe(gulp.dest("./"));
});

// increase Version
gulp.task("version", function () {
  return gulp
    .src("./package.json")
    .pipe(
      bump({
        type: "major"
      })
    )
    .pipe(gulp.dest("./"));
});

// Update specific version
gulp.task("deploy", function () {
  gulp
    .src("./package.json")
    .pipe(
      bump({
        version: isProduction
      })
    )
    .pipe(gulp.dest("./"));
});

// Zip dist
gulp.task("zip-build", function () {
  return gulp
    .src("./dist/**")
    .pipe(zip("sijur-frontend.zip"))
    .pipe(gulp.dest(`./dist/${pjson.version}`));
});

// Zip and delivery to Server
gulp.task("zip-delivery", function () {
  return gulp
    .src("./dist/*", {
      cwd: "shared/",
      cwdbase: true
    })
    .pipe(zip("file.zip"))
    .pipe(buffer())
    .pipe(request.put("http://10.2.71.134"));
});
