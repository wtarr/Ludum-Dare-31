var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by William on 06/12/2014.
 */
/// <reference path="../js/phaser.d.ts"/>
var LD31;
(function (LD31) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        function Menu() {
            _super.apply(this, arguments);
        }
        Menu.prototype.preload = function () {
        };
        Menu.prototype.create = function () {
        };
        Menu.prototype.update = function () {
        };
        Menu.prototype.render = function () {
            //this.game.debug.text("Hello()", 0, 80);
        };
        return Menu;
    })(Phaser.State);
    LD31.Menu = Menu;
})(LD31 || (LD31 = {}));
//# sourceMappingURL=menu.js.map