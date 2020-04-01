/**
 * @description scrollTo/scrollBy polyfill IE9+
 * @author https://www.zhangxinxu.com/study/201907/scroll-polyfill.js
 */

if (!window.scrollTo) {
    window.scrollTo = function (x, y) {
        window.pageXOffset = x;
        window.pageYOffset = y;
    };
}
if (!window.scrollBy) {
    window.scrollBy = function (x, y) {
        window.pageXOffset += x;
        window.pageYOffset += y;
    };
}
if (!document.body.scrollTo) {
    Element.prototype.scrollTo = function (x, y) {
        this.scrollLeft = x;
        this.scrollTop = y;
    };
}
if (!document.body.scrollBy) {
    Element.prototype.scrollBy = function (x, y) {
        this.scrollLeft += x;
        this.scrollTop += y;
    };
}