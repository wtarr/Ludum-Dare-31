/**
 * Created by William on 06/12/2014.
 */
/// <reference path="../../lib/phaser.d.ts"/>
module LD31 {
    export class Boot extends Phaser.State {
        game:Phaser.Game;

        startTriggered : boolean = false;

        preload() {
            this.load.image('loading', 'assets/loading.png');
        }

        create() {

            this.game.state.start('Preloader', true, false);

        }

        update() {

        }

        render() {

        }


    }
}