/**
 * Created by William on 06/12/2014.
 */
/// <reference path="../js/phaser.d.ts"/>
/// <reference path="enemy.ts"/>
/// <reference path="player.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var LD31;
(function (LD31) {
    var Main = (function (_super) {
        __extends(Main, _super);
        function Main() {
            _super.apply(this, arguments);
            this.spriteSize = 32;
            this.mapRows = 19;
            this.mapCols = 25;
            //player: Phaser.Sprite;
            this.itemMap = [
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                2,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                2,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                2,
                2,
                2,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                2,
                2,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                2,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                0,
                2,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                2,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                2,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                2,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                2,
                0,
                0,
                0,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                2,
                2,
                0,
                0,
                0,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0
            ];
            // Dashboard/Inventory
            this.woodCount = 0;
            this.stoneCount = 0;
            this.playerHealthCount = 100;
            this.nextSpawn = 0;
            this.spawnRate = 8000;
            this.nextSpawnPickupArrow = 0;
            this.spawnPickupArrowRate = 10000;
        }
        Main.prototype.preload = function () {
        };
        Main.prototype.create = function () {
            this.game.world.setBounds(0, 0, 790, 608);
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.grassGroup = this.game.add.group();
            this.collectableResourcesGroup = this.game.add.group();
            this.collectableResourcesGroup.enableBody = true;
            this.collectableResourcesGroup.physicsBodyType = Phaser.Physics.ARCADE;
            this.CreateInitalMap();
            this.InitialisePlayer();
            //this.InitialiseSnowPersons();
            this.snowmanGroup = this.game.add.group();
            this.arrowPickupGroup = this.game.add.group();
            this.InitialiseDashboard();
            this.initialiseAudio();
        };
        Main.prototype.initialiseAudio = function () {
            this.forageAudio = this.game.add.audio('forage');
            this.hitSound = this.game.add.audio('hit');
            this.theme = this.game.add.audio('theme', 1, true);
            this.theme.play();
        };
        Main.prototype.InitialiseDashboard = function () {
            var _this = this;
            this.game.add.sprite(800, 0, 'inventory');
            this.game.add.sprite(800 + 2, 21, 'tree');
            this.game.add.sprite(800 + 38, 21, 'stone');
            var arrow = this.game.add.sprite(800 + 2, 70, 'arrow');
            arrow.scale.x = 2;
            arrow.scale.y = 2;
            this.woodText = this.game.add.text(815, 40, this.woodCount.toString(), {
                font: "10px Arial",
                fill: "#ffffff",
                align: "left"
            });
            this.stoneText = this.game.add.text(850, 40, this.stoneCount.toString(), {
                font: "10px Arial",
                fill: "#ffffff",
                align: "right"
            });
            this.arrowCountText = this.game.add.text(815, 75, '3', {
                font: "10px Arial",
                fill: "#ffffff",
                align: "left"
            });
            this.playerHealthText = this.game.add.text(850, 75, this.playerHealthCount.toString(), {
                font: "10px Arial",
                fill: "#ffffff",
                align: "right"
            });
            this.survivalText = this.game.add.text(this.game.width / 2 - 40, 10, "00:00:00", {
                font: "20px Arial",
                fill: "#ff0000",
                align: "right"
            });
            this.timer = this.game.time.create(false);
            this.timer.loop(1000, function () {
                Main.Timetotal++;
                var seconds = Main.Timetotal;
                var h = Math.floor(seconds / 3600);
                var m = Math.floor((seconds - (h * 3600)) / 60);
                var s = seconds - (h * 3600) - (m * 60);
                var hs, ms, ss;
                hs = (h < 10) ? "0" + h.toString() : +h.toString();
                ms = (m < 10) ? "0" + m.toString() : +m.toString();
                ss = (s < 10) ? "0" + s.toString() : +s.toString();
                _this.survivalText.text = hs + ":" + ms + ":" + ss;
            }, this);
            this.timer.start();
            this.craftArrowBtn = this.game.add.button(802, 120, 'button', this.onClickCraftArrow, this, 1, 0, 0);
        };
        Main.prototype.InitialisePlayer = function () {
            this.player = new LD31.Player(this.game, 300, 80, this);
        };
        Main.prototype.spawnSnowPersons = function () {
            var x = Math.floor(Math.random() * this.game.width - 100);
            var y = Math.floor(Math.random() * this.game.height + 1);
            var snowman = new LD31.Enemy(this.game, x, y, this.player, this);
            snowman.animations.play('walk');
            this.snowmanGroup.add(snowman);
        };
        Main.prototype.spawnArrowPickup = function () {
            var x = Math.floor(Math.random() * this.game.width - 100);
            var y = Math.floor(Math.random() * this.game.height + 1);
            var arrowpickup = this.game.add.sprite(x, y, 'arrowpickup');
            var min = 5000;
            var bonus = Math.floor(Math.random() * 3000) + 1;
            arrowpickup.lifespan = min + bonus;
            this.game.physics.enable(arrowpickup);
            this.arrowPickupGroup.add(arrowpickup);
        };
        Main.prototype.onClickCraftArrow = function (e) {
            this.craftArrows();
        };
        Main.prototype.CreateInitalMap = function () {
            var row = 0;
            var index = 0;
            for (var y = 0; y < this.mapRows; y++) {
                for (var x = 0; x < this.mapCols; x++) {
                    this.grassGroup.create(x * this.spriteSize, y * this.spriteSize, 'snow');
                    var key = this.itemMap[x + row];
                    if (key == 1) {
                        var temp = this.collectableResourcesGroup.create(x * this.spriteSize, y * this.spriteSize, 'tree');
                        temp.body.immovable = true;
                        temp.name = "" + (x * this.spriteSize) + ":" + (y * this.spriteSize) + ":" + index;
                    }
                    else if (key == 2) {
                        var temp = this.collectableResourcesGroup.create(x * this.spriteSize, y * this.spriteSize, 'stone');
                        temp.body.immovable = true;
                        temp.name = "" + (x * this.spriteSize) + ":" + (y * this.spriteSize) + ":" + index;
                    }
                    index++;
                }
                row += this.mapCols;
            }
        };
        Main.prototype.update = function () {
            // Spawn enemy
            if (this.game.time.now > this.nextSpawn) {
                this.nextSpawn = this.game.time.now + this.spawnRate;
                // Increment the difficulty but set a limit
                if (this.spawnRate > 3000) {
                    this.spawnRate -= 100;
                }
                console.log("new enemy spawned!");
                this.spawnSnowPersons();
            }
            // Spawn arrow pickup
            if (this.game.time.now > this.nextSpawnPickupArrow) {
                this.nextSpawnPickupArrow = this.game.time.now + this.spawnPickupArrowRate;
                console.log("new pickup spawned!");
                this.spawnArrowPickup();
            }
            // Check for dead
            if (this.playerHealthCount <= 0) {
                this.theme.stop();
                this.game.state.start('GameOver', true, false); // game over screen
            }
        };
        Main.prototype.render = function () {
            //this.game.debug.text("OMFG its really a game", 20, 80);
            //this.game.debug.spriteInfo(this.player, 32, 32);
        };
        Main.prototype.setWoodCount = function () {
            this.woodCount++;
            this.woodText.text = this.woodCount.toString();
        };
        Main.prototype.updateArrowCount = function (newcount) {
            this.arrowCountText.text = newcount.toString();
        };
        Main.prototype.setIncrementStoneCount = function () {
            this.stoneCount++;
            this.stoneText.text = this.stoneCount.toString();
        };
        Main.prototype.craftArrows = function () {
            if (this.stoneCount >= 2 && this.woodCount >= 1) {
                this.player.arrowCount++;
                this.arrowCountText.text = this.player.arrowCount.toString();
                this.stoneCount -= 2;
                this.stoneText.text = this.stoneCount.toString();
                this.woodCount--;
                this.woodText.text = this.woodCount.toString();
            }
        };
        Main.prototype.playerTakeDamage = function () {
            this.playerHealthCount -= 10;
            this.playerHealthText.text = this.playerHealthCount.toString();
        };
        Main.prototype.playerIncereaseHealth = function () {
            if (this.playerHealthCount < 100) {
                this.playerHealthCount += 5;
                this.playerHealthText.text = this.playerHealthCount.toString();
            }
        };
        Main.Timetotal = 0; // we want to reference this also in the game over screen
        return Main;
    })(Phaser.State);
    LD31.Main = Main;
})(LD31 || (LD31 = {}));
//# sourceMappingURL=main.js.map