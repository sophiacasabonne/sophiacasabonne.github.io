var diameter; 
var angle = 0;
H = 600;
W = 600
function setup() {
  angleMode(DEGREES)
  createCanvas(W, H+100);
  diameter = H - 10;
  noStroke();
  fill(10, 204, 0);
  
  rSlider = createSlider(0, 255, 10);
  rSlider.position(20, 600);
  gSlider = createSlider(0, 255, 204);
  gSlider.position(20, 630);
  bSlider = createSlider(0, 255, 0);
  bSlider.position(20, 660);
 
}

function draw() {
  background(0);
  textSize(18);
  fill(rSlider.value(),gSlider.value(),bSlider.value(),255);
  noStroke();
  text("R Value = "+rSlider.value(),20+5+130,rSlider.y+10)
  text("G Value = "+gSlider.value(),20+5+130,gSlider.y+10)
  text("B Value = "+bSlider.value(),20+5+130,bSlider.y+10)
  
  var d1 =  SineWave(angle,110,100,4,0);
  var x1 =  SineWave(angle,width/2,.9*width/2,2,0)
  var y1 =  SineWave(angle,width/2,.9*width/2,2,90)
  //var c1 =  SineWave(angle,128,120,1,0)
  
  ellipse(width/2, height/2, d1, d1);
  ellipse(width/2, height/2, x1, x1);
  ellipse(height/2, width/2, x1, x1);
  ellipse(x1, 100, 20, x1);
 
  
  ellipse(x1, height/2, 20, y1);
  ellipse(width/2, y1, 20, x1);
  ellipse(x1, y1, 20, y1);
  //fill(c1,c1,c1,255);
  //ellipse(width/2, 200, 40, 40);
  
  angle = angle+1;
}


// 1  let's talk about this function
function SineWave(t,Mean,Amplitude,Frequency,Phase) {
   var Output = Mean + Amplitude*sin(Frequency*t+Phase);
   return Output;
}
   
   
   
   
