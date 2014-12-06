/**
 * Created by William on 05/12/2014.
 */
/// <reference path="../js/phaser.d.ts"/>

module LD31 {
    export class SimpleGame extends Phaser.Game
    {
        constructor()
        {
            super({width: 800, height: 600, renderer: Phaser.AUTO, parent: 'content', state: null})
            this.state.add( 'default', Menu, true );
        }
    }

    export class Menu extends Phaser.State {
        game:Phaser.Game;

        preload() {


        }

        create() {

        }

        update() {

        }

        render() {
            this.game.debug.text("Hello()", 0, 80);
        }


    }

    export class GameState extends Phaser.State {
        game:Phaser.Game;

        preload() {


        }

        create() {

        }

        update() {

        }

        render() {
            this.game.debug.text("Hello()", 0, 80);
        }


    }

    export class GameOverState extends Phaser.State {
        game:Phaser.Game;

        preload() {


        }

        create() {

        }

        update() {

        }

        render() {
            this.game.debug.text("Hello()", 0, 80);
        }


    }

}

window.onload = () => {
    var game = new LD31.SimpleGame();
};