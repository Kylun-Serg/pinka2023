import gulp from 'gulp';

// npm install webp-converter@2.2.3 --save-dev

//import paths
import { path } from './gulp/config/path.js';

//import plugins
import { plugins } from './gulp/config/plugins.js';

//передаем значение в глобальную переменную
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
};

//import tasks
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSpriteTask } from "./gulp/tasks/svgsprite.js";
import { zip } from './gulp/tasks/zip.js';

//watcher files

function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

export { svgSpriteTask }

// Последовательная обработака шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// Основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZip = gulp.series(reset, mainTasks, zip);

//експорт сценариев
export { dev }
export { build }
export { deployZip }

//сценарий по умолчанию
gulp.task('default', dev);