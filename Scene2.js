class Scene2 extends Phaser.Scene{
  constructor(){
    super("playGame");
  }

  create(){
    this.add.text(20, 20, "Playing game", {font: "25px Arial", fill: "yellow"});
    this.text1 = this.add.text(10, 560, 'Main Menu', { font: 'bold 12pt TheMinion', fill: '#FDFFB5', align: 'center' ,stroke:"rgba(100,200,300,.25)",strokeThickness:8});
    this.text1 = this.add.text(200, 560, 'Stop Music', { font: 'bold 12pt TheMinion', fill: '#FDFFB5', align: 'center' ,stroke:"rgba(100,200,300,.25)",strokeThickness:8});
    this.text1 = this.add.text(330, 560, 'Linux', { font: 'bold 12pt TheMinion', fill: '#FDFFB5', align: 'center' ,stroke:"rgba(100,200,300,.25)",strokeThickness:8});
    
    this.text1.setInteractive();        
    this.text1.on('pointerdown', this.goBack, this);   
  }
  
  goBack(){
    this.scene.start("bootGame");
	  
	  }
}
