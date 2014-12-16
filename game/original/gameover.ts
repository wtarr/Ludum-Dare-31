/**
 * Created by William on 06/12/2014.
 */
/// <reference path="../../lib/phaser.d.ts"/>
/// <reference path="main.ts"/>

module LD31 {
    export class GameOver extends Phaser.State {
        game:Phaser.Game;
        finalScore:Phaser.Text;

        preload() {

        }

        create() {
            this.game.add.image(0, 0, 'end');

            this.finalScore = this.game.add.text(this.game.width / 2 - 40, 10, "00:00:00", {
                font: "20px Arial",
                fill: "#ff0000",
                align: "right"
            });

            var seconds = LD31.Main.Timetotal;

            var h = Math.floor(seconds / 3600);
            var m = Math.floor((seconds - (h * 3600)) / 60);
            var s = seconds - (h * 3600) - (m * 60);

            var hs, ms, ss;

            hs = (h < 10) ? "0" + h.toString() : +h.toString();
            ms = (m < 10) ? "0" + m.toString() : +m.toString();
            ss = (s < 10) ? "0" + s.toString() : +s.toString();

            this.finalScore.text = hs + ":" + ms + ":" + ss;
        }

        update() {

        }

        render() {

        }

    }

}