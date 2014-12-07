/**
 * Created by William on 06/12/2014.
 */
/// <reference path="../js/phaser.d.ts"/>

module LD31 {
    export class GameOver extends Phaser.State {
        game:Phaser.Game;

        preload() {


        }

        create() {

        }

        update() {

        }

        render() {
            this.game.debug.text("Game over", 0, 80);
        }


    }

}