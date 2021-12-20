class scene2 extends Phaser.Scene{
  constructor(){
    super("scene2");
    
    this.avatar=['photonstorm','golen','phaser','dino','nixdixyklo','samme','kal_torak','german','xfallseane','lucky137'];
    this.avatars;
    var platform,platform1,platform2;
    this.platforms;
    this.block;
    this.avatarCollide;
  
  }

  preload(){
	  
	//this.avatar=['photonstorm','golen','phaser','dino','nixdixyklo','samme','kal_torak','german','xfallseane','lucky137'];
    
	for (let i = 0; i < this.avatar.length; i++) {	
		this.load.image(this.avatar[i],'assets/'+this.avatar[i]+'.png');
	} 	  
	
	this.load.image('block','assets/block.png');
  }

  create(){
    
    this.platforms=this.add.group();
    this.avatars  =this.add.group();
    
    this.platform = this.add.tileSprite(400,500, 32 * 25, 1* 24, 'block');
    this.physics.add.existing(this.platform,true);
    
    /*
    this.platform1 = this.add.tileSprite(500,200, 20 * 25, 1* 24, 'block');
    this.physics.add.existing(this.platform1,true);
    
    this.platform2 = this.add.tileSprite(300,300, 1 * 25, 4* 24, 'block');
    this.physics.add.existing(this.platform2,true);
    //this.platform2.angle+=90;
  
    */
    this.platforms.add(this.platform);
    //this.platforms.add(this.platform1);
    //this.platforms.add(this.platform2);
  
  
  
    
    //this.add.text(20, 20, "Playing game", {font: "25px Arial", fill: "yellow"});
    this.text2 = this.add.text(10, 560, 'Gravity +/-', { font: 'bold 12pt TheMinion', fill: '#FDFFB5', align: 'center' ,stroke:"rgba(100,200,300,.15)",strokeThickness:8});
    this.text3 = this.add.text(100, 560, 'Velocity +/-', { font: 'bold 12pt TheMinion', fill: '#FDFFB5', align: 'center' ,stroke:"rgba(100,200,300,.15)",strokeThickness:8});
    
    this.text1 = this.add.text(200, 560, 'Back', { font: 'bold 12pt TheMinion', fill: '#FDFFB5', align: 'center' ,stroke:"rgba(100,200,300,.15)",strokeThickness:8});    
    this.text1.setInteractive({useHandCursor: true});        
    this.text1.on('pointerdown', this.goBack, this);   
    
    this.text2.setInteractive({useHandCursor: true});        
    this.text2.on('pointerdown', this.gravity, this);   
    
    for (let i = 0; i < this.avatar.length; i++) {	
		this.avatar[i]=this.physics.add.sprite((i+2.5)*50, 45, this.avatar[i]);	
		this.avatar[i].setGravityY(Phaser.Math.Between(20,80));
		this.avatar[i].body.collideWorldBounds = true;
		this.avatar[i].body.bounce.set(.5);
		this.avatars.add(this.avatar[i]);
		//this.avatar[i].setVelocity(Phaser.Math.Between(-200, 200), 20);
   
	
	} 
    
    //this.physics.add.collider(this.avatar[1],this.platforms);
     this.avartaCollide=this.physics.add.collider(this.avatars,this.platforms);
    
  }
  
  update(){
	  
//	  this.platform2.angle+=.1;
	 // debug.spriteBounds(platform2);
	  //debug.bodyInfo(platform2, 32, 32);
	  
	  }
  gravity(){
    //this.avatar[0].setGravityY(Phaser.Math.Between(150,200));
    this.avatar[0].setVelocity(Phaser.Math.Between(-120, 120),Phaser.Math.Between(150,200));
    //this.physics.world.removeCollider(this.avartaCollide);
    this.avatar[1].body.enable = false;
	  //this.avatar[5].angle +=.1;
	  //this.avatar[1].setIgnoreGravity(true);
	  }
  goBack(){
    this.scene.start("bootGame");
    this.scene.get('bootGame').music.stop()
    
	  
	  }
}

/*
class AlignGrid {
    constructor(config) {
        if (!config.scene) {
            console.log("missing scene!");
            return;
        }
        if (!config.rows) {
            config.rows = 3;
        }
        if (!config.cols) {
            config.cols = 3;
        }
        if (!config.width) {
            config.width = game.config.width;
        }
        if (!config.height) {
            config.height = game.config.height;
        }
        this.h = config.height;
        this.w = config.width;
        this.rows = config.rows;
        this.cols = config.cols;        
        this.scene = config.scene;
    }
*/
