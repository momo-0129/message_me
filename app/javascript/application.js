// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "jquery"
import "semantic-ui"

// = require semantic-ui

/* 【修正版】Semantic UI用の jquery 関数を定義 */
/* "turbo:load" */
$(document).on("turbo:load", function() {

  /* ここに必要な jquery 関数を追記 */

  /* 例1）ドロップダウンを利用する場合 */
  $('.ui.dropdown').dropdown();

  /* 例2）アコーディオンを利用する場合 */
  $('.ui.accordion').accordion();

});

/* "turbo:render" */
$(document).on("turbo:render", function() {

  /* ここに必要な jquery 関数を追記 */

  /* 例1）ドロップダウンを利用する場合 */
  $('.ui.dropdown').dropdown();

  /* 例2）アコーディオンを利用する場合 */
  $('.ui.accordion').accordion();

});