/*
 * For *.ttf or *.otf fonts to work please follow the steps below:
 *  
 * STEP1 - Add in <head>    
        <style media='screen' type='text/css'>
        @font-face {
        font-family: TheMinion;
        src: url('theminion.otf');
        font-weight:40;
        font-weight:normal;
      } 
      * 
      * 
 * 
 * */

var text3;

class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
    this.text4;
  }

  preload(){}
  create() {  
  
       var string='Cybernetics Resurrected'; 
       const text1 = this.add.text(5, 10, string, { font: 'bold 18pt TheMinion', fill: '#FDFFB5', align: 'center' });
       
       
       var string2='\nAnton Samarasinghe\nJoe Samarasinghe\nPriyan Samarasinghe\n\ \nAruna Hewapathirane\nPio Fernando\nAruna Athulathmudali\nBandula\nTissa\nSuneth   ';
       const text2 = this.add.text(5, 40, string2, { font: 'bold 10pt TheMinion', fill: '#FDFFB5', /*align: 'center'*/ });
        
//        const text1 = this.add.text(100, 100, 'Phaser Aruna Text with Tint');
//        text1.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);


//font: 'bold 60pt TheMinion',
  //    fill: '#FDFFB5',
    //  align: 'center'
        text3 = this.add.text(100, 200, 'START GAME', { font: 'bold 32pt TheMinion', fill: '#FDFFB5', align: 'center' ,stroke:"rgba(200,200,200,.5)",strokeThickness:8});
        //text2.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);

        this.text4 =this.add.text(100, 300, 'OPTIONS', { font: 'bold 32pt TheMinion', fill: '#FDFFB5', align: 'center' });
        const text5 =this.add.text(100, 400, 'CREDITS', { font: 'bold 32pt TheMinion', fill: '#FDFFB5', align: 'center' });
        
        text3.setTintFill(0xff00ff, 0xff00ff, 0x0000ff, 0xff00dd);
        
        text3.setInteractive();
        this.text4.setInteractive();
        text5.setInteractive();
        
        text3.on('pointerdown', this.select, true);
        this.text4.on('pointerdown', this.select, true);

        //text3.stroke = "rgba(200,200,200,2.5)";
    //this.scene.start("playGame");
  }
  
  select(){
	console.log("clicked");
	//text3.strokeThickness(15);   
	//this.text4.strokeThickness(15);      
	text4.setText(setTintFill(0x0000ff, 0x0000ff, 0x0000ff, 0xff0000));   
	}
}

/*
function select(){
	console.log("clicked");
	//text3.strokeThickness(15);   
	this.text4.strokeThickness(15);      
	this.text4.setTintFill(0x0000ff, 0x0000ff, 0x0000ff, 0xff0000);   
	}
*/
