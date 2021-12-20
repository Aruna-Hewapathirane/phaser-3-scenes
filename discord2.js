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
    var tween, marker, lucky137,music,skull;
  }

  preload(){
	  
	this.load.spritesheet('skull', 'assets/fireskullbig.png', { frameWidth: 240, frameHeight: 320 });
	this.load.audio('chase', 'audio/Chase.mp3');

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
	//this.marker.rotation+= .1;
  }	  
	  
  create() {  
	  
        this.music = this.sound.add('chase');
        //this.music.play();

/*	this.phaser=this.physics.add.sprite(400, 315, 'phaser')

	this.marker = this.add.image(400, 315, 'phaser').setAlpha(0.3).setScale(2);;
	
	        
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

*/

	this.skull=this.physics.add.sprite(400,300,'skull').setScale(1);
	this.skull.body.immovable = true;
	this.skull.body.moves = false;

	this.anims.create({
            key: 'fire',            
            frames: this.anims.generateFrameNumbers('skull', { frames:[0,1,2,3,4,5,6,7] }),
            frameRate: 10,
            repeat: -1
        });


        this.text1 = this.add.text(230, 28, 'Midnight Express', { font: 'bold 26pt TheMinion', fill: '#FDFFB5', align: 'center' ,stroke:"rgba(200,200,200,.25)",strokeThickness:8});
			
	this.text1 = this.add.text(10, 550, 'Start Game', { font: 'bold 20pt TheMinion', fill: '#FDFFB5', align: 'center' ,stroke:"rgba(200,200,200,.25)",strokeThickness:8});
	this.text1.setInteractive( { useHandCursor: true  });                
        this.text1.on('pointerdown', this.changeScene, this);    
        this.text1.on('pointerover', this.fire, this);    
        this.text1.on('pointerout', this.stopFire, this);    

        this.text2 = this.add.text(10, 480, 'Credits', { font: 'bold 20pt TheMinion', fill: '#FDFFB5', align: 'center' ,stroke:"rgba(200,200,200,.25)",strokeThickness:8});
	this.text2.setInteractive( { useHandCursor: true  });                
        this.text2.on('pointerdown', this.credits, this);    
        

/*
	this.lucky137=this.physics.add.sprite(750, 450, 'lucky137');		
	this.german=this.physics.add.sprite(750, 400, 'xfallseane');		
	this.german=this.physics.add.sprite(750, 350, 'german');		
	this.kal_torak=this.physics.add.sprite(750, 300, 'kal_torak');
	this.samme=this.physics.add.sprite(750, 250, 'samme');
	this.nixdixyklo=this.physics.add.sprite(750, 200, 'nixdixyklo');
	this.dino=this.physics.add.sprite(750, 150, 'dino');
	this.golen=this.physics.add.sprite(750, 100, 'golen');
	this.ps=this.physics.add.sprite(750, 50, 'photonstorm');
			
	this.text1 = this.add.text(240, 520, 'Start Game', { font: 'bold 26pt TheMinion', fill: '#FDFFB5', align: 'center' ,stroke:"rgba(200,200,200,.25)",strokeThickness:8});
	this.text1.setInteractive( { useHandCursor: true  });                
        this.text1.on('pointerdown', this.changeScene, this);    
        
        
        this.text2 = this.add.text(10, 80, 'Credits & Inspiration', { font: 'bold 12pt TheMinion', fill: '#FDFFB5', align: 'center' ,stroke:"rgba(200,200,200,.25)",strokeThickness:8});
	this.text2.setInteractive( { useHandCursor: true  });                
        this.text2.on('pointerdown', this.credits, this);    
        
        
        this.text2 = this.add.text(10, 110, 'Play Sound', { font: 'bold 12pt TheMinion', fill: '#FDFFB5', align: 'center' ,stroke:"rgba(200,200,200,.25)",strokeThickness:8});
	this.text2.setInteractive( { useHandCursor: true  });                
        this.text2.on('pointerdown', this.changeScene, this);    
        
        
        
	
	this.add.text(610, 45, 'Photon Storm', { font: '10pt TheMinion'});
	this.add.text(670, 95, 'Golen', { font: '10pt TheMinion'});
	this.add.text(630, 145, 'Dino Battle', { font: '10pt TheMinion'});
	this.add.text(630, 195, 'Nixdixyklo', { font: '10pt TheMinion'});
	this.add.text(665, 245, 'Samme', { font: '10pt TheMinion'});
	this.add.text(640, 295, 'Kal Torak', { font: '10pt TheMinion'});
	this.add.text(655, 345, 'German', { font: '10pt TheMinion'});
	this.add.text(630, 395, 'XFallSeane', { font: '10pt TheMinion'});
	this.add.text(640, 445, 'lucky137', { font: '10pt TheMinion'}); */
  }
  
  
  
  fire(){
	  console.log("Next Scene");
          this.skull.anims.play('fire', true);	  
          this.music.play();
          this.text1.setText('Are you sure you want to do this?')
  }
  stopFire(){
	  this.skull.anims.stop('fire', true);
	  this.music.stop();
	  this.text1.setText('Start Game')
  }
  changeScene(){
	  console.log("Next Scene");
	  this.scene.start("scene2"); 
  }
  
  credits(){
	  console.log("Credit Scene");
	  this.scene.start("credits"); 
  }
}
