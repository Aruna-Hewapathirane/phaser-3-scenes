/*
   Your class 'name' is what is used in game config 'scene' 
   for eg: scene: [discord2,scene2]
   
   Your souce file name can be anything... 
   
   To change scenes you pass in what you initialised 'super' with. 
   For eg:	  this.scene.start("scene2");     
 */


class discord2 extends Phaser.Scene { 

  constructor() {
    super("bootGame");
    
    this.ps;    // can initialise your variables here 
    var golen;  // both 'this.variable' or 'var variable_name' work. I wonder if there is any difference in scope ? So far zilch.
    this.phaser;
    var dino, golen, nixdixyklo, samme, kal_torak, german, xfallseane;
    var tween, marker, lucky137,music;
  }

  preload(){
	  
	this.load.spritesheet('skull', 'assets/fireskullbig.png', { frameWidth: 240, frameHeight: 320 });
	this.load.audio('forgiveness', 'audio/chanchala.mp3');

	this.load.image('photonstorm','assets/photonstorm.png');
	this.load.image('golen','assets/golen.png');
	this.load.image('phaser','assets/phaser.png');
	this.load.image('dino','assets/dino.png');
	this.load.image('nixdixyklo','assets/nixdixyklo.png');
	this.load.image('samme','assets/samme.png');
	this.load.image('kal_torak','assets/kal_torak.png');
	this.load.image('german','assets/german.png');
	this.load.image('xfallseane','assets/xfallseane.png');
	this.load.image('lucky137','assets/lucky137.png');	
	
	
	this.add.text(0, 0, '', { font: '10pt TheMinion'}); // force font to load here so it is availble in create()
	// because the browser had not yet requested the font when the new Phaser.Text() was called.  
        // I resolved this by making an invisible text call in the preload, so by the time the real one was called the font was already present. 

	
	  }
	  
  update(){
	this.marker.rotation+= .1;
  }	  
	  
  create() {  
	  
        //this.music = this.sound.add('forgiveness');
        //this.music.play();

	this.phaser=this.physics.add.sprite(400, 300, 'phaser');	
	this.marker = this.add.image(400, 300, 'phaser').setAlpha(0.3);
	
	        
	this.tween = this.tweens.add({
        targets: this.phaser,
        props: {
            x: {
                value: 600,
                delay: 1000
            }
	}})
	
	 this.tweens.add({
		targets: this.phaser,
		x: 750,
		y: 300,
		duration: 3000,
		ease: 'Power2',
		yoyo: true,
		delay: 1000,
		repeat:3
	});

	this.lucky137=this.physics.add.sprite(750, 450, 'lucky137');		
	this.german=this.physics.add.sprite(750, 400, 'xfallseane');		
	this.german=this.physics.add.sprite(750, 350, 'german');		
	this.kal_torak=this.physics.add.sprite(750, 300, 'kal_torak');
	this.samme=this.physics.add.sprite(750, 250, 'samme');
	this.nixdixyklo=this.physics.add.sprite(750, 200, 'nixdixyklo');
	this.dino=this.physics.add.sprite(750, 150, 'dino');
	this.golen=this.physics.add.sprite(750, 100, 'golen');
	this.ps=this.physics.add.sprite(750, 50, 'photonstorm');
	
	
	
	this.text1 = this.add.text(200, 500, 'Phaser & Friends', { font: 'bold 26pt TheMinion', fill: '#FDFFB5', align: 'center' ,stroke:"rgba(200,200,200,.25)",strokeThickness:8});
	this.text1.setInteractive( { useHandCursor: true  });                
        this.text1.on('pointerdown', this.changeScene, this);    
	
	this.add.text(610, 45, 'Photon Storm', { font: '10pt TheMinion'});
	this.add.text(670, 95, 'Golen', { font: '10pt TheMinion'});
	this.add.text(630, 145, 'Dino Battle', { font: '10pt TheMinion'});
	this.add.text(630, 195, 'Nixdixyklo', { font: '10pt TheMinion'});
	this.add.text(665, 245, 'Samme', { font: '10pt TheMinion'});
	this.add.text(640, 295, 'Kal Torak', { font: '10pt TheMinion'});
	this.add.text(655, 345, 'German', { font: '10pt TheMinion'});
	this.add.text(630, 395, 'XFallSeane', { font: '10pt TheMinion'});
	this.add.text(640, 445, 'lucky137', { font: '10pt TheMinion'});
  }
  
  changeScene(){
	  console.log("Next Scene");
	  this.scene.start("scene2"); 
  }
}
