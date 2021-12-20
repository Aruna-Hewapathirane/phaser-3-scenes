/*var config = {
  width: 800,
  height: 600,
  backgroundColor: 0x000000,
  scene: [discord, Scene2]
}*/

var config = {
        type: Phaser.AUTO,
        //width: window.innerWidth,
        //width:800,
        height: 600,
        //backgroundColor:"#36393f", // Discord background colour
        backgroundColor:"#000000", 
        width:window.innerWidth,        
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 },
                debug: false
            }
        },

      scene: [discord2,scene2,credits]
    };

var game = new Phaser.Game(config);
