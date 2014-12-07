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
            this.spawnRate = 10000;
            this.enemySpawnCount = 0;
        }
        Main.prototype.preload = function () {
            this.game.load.image('grass', 'assets/grass.png');
            this.game.load.image('tree', 'assets/tree.png');
            this.game.load.image('snow', 'assets/snow.png');
            this.game.load.image('arrow', 'assets/arrow.png');
            this.game.load.image('snowball', 'assets/snowball.png');
            this.game.load.image('stone', 'assets/stone.png');
            //this.game.load.image('player', 'assets/player.png');
            this.game.load.spritesheet('player', 'assets/playerspritesheet.png', 20, 32);
            this.game.load.spritesheet('snowman', 'assets/snowmanspritesheet.png', 20, 32);
            this.game.load.image('inventory', 'assets/inventory.png');
            this.game.load.spritesheet('button', 'assets/buildbtn.png', 64, 32);
            //this.game.load.tilemap('map', 'assets/map.json', null, Phaser.Tilemap.TILED_JSON);
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
            this.InitialiseDashboard();
        };
        Main.prototype.InitialiseDashboard = function () {
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
            this.buildbtn = this.game.add.button(800, 120, 'button', this.onClick, this, 1, 0, 0);
        };
        Main.prototype.InitialisePlayer = function () {
            this.player = new LD31.Player(this.game, 300, 80, this);
        };
        Main.prototype.spawnSnowPersons = function () {
            var x = Math.floor(Math.random() * this.game.width + 100);
            var y = Math.floor(Math.random() * this.game.width + 1);
            this.snowmanGroup = this.game.add.group();
            var snowman = new LD31.Enemy(this.game, x, y, this.player, this);
            snowman.animations.play('walk');
            this.snowmanGroup.add(snowman);
        };
        Main.prototype.onClick = function (e) {
            console.log("clicked");
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
            if (this.game.time.now > this.nextSpawn) {
                this.nextSpawn = this.game.time.now + this.spawnRate;
                // todo spawn a new snowman enemy
                console.log("new enemy");
                this.spawnSnowPersons();
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
        };
        Main.prototype.playerTakeDamage = function () {
            this.playerHealthCount -= 10;
            this.playerHealthText = this.playerHealthCount.toString();
        };
        return Main;
    })(Phaser.State);
    LD31.Main = Main;
})(LD31 || (LD31 = {}));
//# sourceMappingURL=main.js.map