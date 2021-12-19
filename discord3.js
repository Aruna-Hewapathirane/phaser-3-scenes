class scene2 extends Phaser.Scene{
  constructor(){
    super("scene2");
    this.avatar=['photonstorm','golen','phaser','dino','nixdixyklo','samme','kal_torak','german','xfallseane','lucky137'];
  }


  preload(){
	  
	//this.avatar=['photonstorm','golen','phaser','dino','nixdixyklo','samme','kal_torak','german','xfallseane','lucky137'];
    
	for (let i = 0; i < this.avatar.length; i++) {	
		this.load.image(this.avatar[i],'assets/'+this.avatar[i]+'.png');
	} 	  
  }

  create(){
    this.add.text(20, 20, "Playing game", {font: "25px Arial", fill: "yellow"});
    this.text1 = this.add.text(10, 560, 'Main Menu', { font: 'bold 12pt TheMinion', fill: '#FDFFB5', align: 'center' ,stroke:"rgba(100,200,300,.25)",strokeThickness:8});
    this.text1 = this.add.text(200, 560, 'Stop Music', { font: 'bold 12pt TheMinion', fill: '#FDFFB5', align: 'center' ,stroke:"rgba(100,200,300,.25)",strokeThickness:8});
    this.text1 = this.add.text(330, 560, 'Linux', { font: 'bold 12pt TheMinion', fill: '#FDFFB5', align: 'center' ,stroke:"rgba(100,200,300,.25)",strokeThickness:8});
    
    this.text1.setInteractive({useHandCursor: true});        
    this.text1.on('pointerdown', this.goBack, this);   
    
    for (let i = 0; i < this.avatar.length; i++) {	
		this.avatar[i]=this.physics.add.sprite(i*50, 45, this.avatar[i]);	
		this.avatar[i].setGravityY(Phaser.Math.Between(50,200));
		this.avatar[i].body.collideWorldBounds = true;
		this.avatar[i].body.bounce.set(1);
		this.avatar[i].setVelocity(Phaser.Math.Between(-200, 200), 20); 
	
	} 
    
  }
  
  goBack(){
    this.scene.start("bootGame");
	  
	  }
}
