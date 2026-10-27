/* 语言切换：目标地址由模板在构建时算好，前端只负责跳转 */
(function () {
  var sel = document.getElementById('lang-select');
  if (!sel) return;

  sel.addEventListener('change', function () {
    var opt = sel.options[sel.selectedIndex];
    var href = opt && opt.getAttribute('data-href');
    if (href) {
      location.href = href;
    } else {
      // 没有对应译文：还原选中项，避免下拉框停在无效语言上
      var cur = sel.querySelector('option[selected]');
      if (cur) sel.value = cur.value;
    }
  });
}());
