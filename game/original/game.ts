/**
 * Created by William on 06/12/2014.
 */
/// <reference path="../../lib/phaser.d.ts"/>
/// <reference path="preloader.ts"/>
/// <reference path="boot.ts"/>
/// <reference path="menu.ts"/>
/// <reference path="main.ts"/>
/// <reference path="gameover.ts"/>

module LD31 {
    export class LudumGame extends Phaser.Game {

        constructor() {
            super({width: 870, height: 608, renderer: Phaser.AUTO, parent: 'content', state: null});

            this.state.add('Boot', LD31.Boot, false);
            this.state.add('Preloader', LD31.Preloader, false);
            this.state.add('Menu', LD31.Menu, false);
            this.state.add('Main', LD31.Main, false);
            this.state.add('GameOver', LD31.GameOver, false);

            this.state.start('Boot');
        }
    }
}

window.onload = () => {
    new LD31.LudumGame();
};