var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by William on 06/12/2014.
 */
/// <reference path="../lib/phaser.d.ts"/>
var LD31;
(function (LD31) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        function Menu() {
            _super.apply(this, arguments);
            this.startTriggered = false;
        }
        Menu.prototype.preload = function () {
        };
        Menu.prototype.create = function () {
            var _this = this;
            this.game.add.image(0, 0, 'start');
            this.game.input.keyboard.onDownCallback = function () {
                if (!_this.startTriggered) {
                    console.log("start triggered!");
                    _this.startTriggered = true;
                    _this.game.state.start('Main', true, false);
                }
            };
        };
        Menu.prototype.update = function () {
        };
        Menu.prototype.render = function () {
        };
        return Menu;
    })(Phaser.State);
    LD31.Menu = Menu;
})(LD31 || (LD31 = {}));
//# sourceMappingURL=menu.js.map