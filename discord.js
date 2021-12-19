var skull, bgm;

class discord extends Phaser.Scene {
  constructor() {
    super("bootGame");
    this.text1 = 'placeholder';
    
    console.log("Constructor: "+this.text3);
  }

  preload(){
	  
	this.load.spritesheet('skull', 'assets/fireskullbig.png', { frameWidth: 240, frameHeight: 320 });
	this.load.audio('forgiveness', 'audio/chanchala.mp3');

	  
	  }
  create() {  
        
        bgm = this.sound.add('forgiveness');
        bgm.play()
        skull=this.physics.add.sprite(300,200,'skull').setScale(2);
        
        skull.body.velocity.y=0;
        skull.body.velocity.x=0;
	
	this.anims.create({
            key: 'fire',            
            frames: this.anims.generateFrameNumbers('skull', { frames:[0,1,2,3,4,5,6,7] }),
            frameRate: 10,
            repeat: -1
        });

            //skull.anims.play('fire', true);
        
        
        this.text1 = this.add.text(10, 300, 'START GAME', { font: 'bold 32pt TheMinion', fill: '#FDFFB5', align: 'center' ,stroke:"rgba(200,200,200,.25)",strokeThickness:8});
        //this.text1.setTintFill(0xff00ff, 0xff00ff, 0x0000ff, 0xff00dd);

	this.text2 = this.add.text(10, 400, 'Options', { font: 'bold 32pt TheMinion', fill: '#FDFFB5', align: 'center' ,stroke:"rgba(200,200,200,.25)",strokeThickness:8});
	this.text3 = this.add.text(10, 500, 'credits', { font: 'bold 32pt TheMinion', fill: '#FDFFB5', align: 'center' ,stroke:"rgba(200,200,200,.25)",strokeThickness:8});

        this.text1.setInteractive();        
        this.text2.setInteractive();        
        this.text3.setInteractive();        
        
        this.text1.on('pointerdown', this.select, this);    
        this.text1.on('pointerout', this.stopFire, this);    
        this.text1.on('pointerover', this.fire, this);    
        this.text2.on('pointerover', this.fire, this);    
        this.text3.on('pointerover', this.fire, this);    
        
  }
  
  fire(){
	  skull.anims.play('fire', true);
	  //bgm.play();
	  this.text1.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);

	  }
  
  stopFire(){
	  skull.anims.stop('fire', true);
	  //bgm.stop();
	  this.text1.setTint(0x000000, 0x000000, 0x0000ff, 0xff0000);
	  }
  
  
  select(){
	console.log("this.text1 is: " + this.text1);		
        this.text1.setTintFill(0x0000ff, 0xff00ff, 0x00ff00, 0xff00dd);
        this.text1.strokeThickness=10;
        this.text1.stroke="rgba(500,500,500,15)"
        this.scene.start("playGame");
	}  
  
  normal(){
	console.log("this.text1 is: " + this.text1);		
        console.log("fill:"+this.text1.fill);

	}  	
}
