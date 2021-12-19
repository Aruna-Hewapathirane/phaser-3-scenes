/*var config = {
  width: 800,
  height: 600,
  backgroundColor: 0x000000,
  scene: [discord, Scene2]
}*/

var config = {
        type: Phaser.AUTO,
        width: window.innerWidth,
        //width:800,
        height: 600,
        //width:window.innerWidth,        
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 },
                debug: false
            }
        },

      scene: [discord,Scene2]
    };

var game = new Phaser.Game(config);