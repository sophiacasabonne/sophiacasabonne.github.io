var diameter; 
var Counter = 0;
H = 600;
W = 600
function setup() {
  angleMode(DEGREES);
  colorMode(HSB,80,100,100)
  createCanvas(700, 500);
  frameRate(20)
  noStroke();
 
 
}

function draw() {
  background(0);
  textSize(18);
  fill(0,100,100);
  noStroke();
  
  //ChangeY();
  //ChangeX();
  ChangeXY(width/2,height/2);
  ChangeXY(height/2, width/2);
  ChangeXY(width/4, height/2);
  ChangeXY(height/4, width/2);
  ChangeXY(width/2,height/2);
  ChangeXY(height/2, width/2);
  ChangeXY(width/4, height/2);
  ChangeXY(height/4, width/2);

  
  Counter += 4;
}


// 1  let's talk about this function
function SineWave(t,Mean,Amplitude,Frequency,Phase) {
   var Output = Mean + Amplitude*sin(Frequency*t+Phase);
   return Output;
}

function ChangeY() {
  
  var y0 =  SineWave(Counter,height/2,.6*height/2,1,0)
  var y1 =  SineWave(Counter,height/2,.6*height/2,1,0)
  var y2 =  SineWave(Counter,height/2,.6*height/2,1,0)
  var y3 =  SineWave(Counter,height/2,.6*height/2,1,0)
  var y4 =  SineWave(Counter,height/2,.6*height/2,1,0)
  var y5 =  SineWave(Counter,height/2,.6*height/2,1,0)
  var y6 =  SineWave(Counter,height/2,.6*height/2,1,0)

  var XposStep = width/8;
  fill(0,100,100),ellipse(1*XposStep, y0, 20, 20);
  fill(10,100,100),ellipse(2*XposStep, y1, 20, 20);
  fill(20,100,100),ellipse(3*XposStep, y2, 20, 20);
  fill(30,100,100),ellipse(4*XposStep, y3, 20, 20);
  fill(40,100,100),ellipse(5*XposStep, y4, 20, 20);
  fill(50,100,100),ellipse(6*XposStep, y5, 20, 20);
  fill(60,100,100),ellipse(7*XposStep, y6, 20, 20);
}

function ChangeX() {
  var x0 =  SineWave(Counter,width/2,.6*width/2,1,0)
  var x1 =  SineWave(Counter,width/2,.6*width/2,1,0)
  var x2 =  SineWave(Counter,width/2,.6*width/2,1,0)
  var x3 =  SineWave(Counter,width/2,.6*width/2,1,0)
  var x4 =  SineWave(Counter,width/2,.6*width/2,1,0)
  var x5 =  SineWave(Counter,width/2,.6*width/2,1,0)
  var x6 =  SineWave(Counter,width/2,.6*width/2,1,0)

  var YposStep = height/8;
  fill(0,100,100),ellipse(x0, 1*YposStep, 20, 20);
  fill(10,100,100),ellipse( x1, 2*YposStep,20, 20);
  fill(20,100,100),ellipse(x2, 3*YposStep, 20, 20);
  fill(30,100,100),ellipse( x3, 4*YposStep,20, 20);
  fill(40,100,100),ellipse( x4, 5*YposStep,20, 20);
  fill(50,100,100),ellipse( x5, 6*YposStep, 20, 20);
  fill(60,100,100),ellipse( x6, 7*YposStep, 20, 20);
}

function ChangeXY(CentX,CentY) {
  var Amp= .6*width/2;
  var Angle = 0;
  var x0 =  CentX+cos(Angle)*SineWave(Counter,0,Amp,1,0);
  var y0 =  CentY+sin(Angle)*SineWave(Counter,0,Amp,1,0);
  
  Angle = 30;
  var x1 =  CentX+cos(Angle)*SineWave(Counter,0,Amp,1,0);
  var y1 =  CentY+sin(Angle)*SineWave(Counter,0,Amp,1,0);
  
  Angle = 60;
  var x2 =  CentX+cos(Angle)*SineWave(Counter,0,Amp,1,0);
  var y2 =  CentY+sin(Angle)*SineWave(Counter,0,Amp,1,0);
  
  Angle = 90;
  var x3 =  CentX+cos(Angle)*SineWave(Counter,0,Amp,1,0);
  var y3 =  CentY+sin(Angle)*SineWave(Counter,0,Amp,1,0);
  
  Angle = 120;
  var x4 =  CentX+cos(Angle)*SineWave(Counter,0,Amp,1,0);
  var y4 =  CentY+sin(Angle)*SineWave(Counter,0,Amp,1,0);
  
  Angle = 150;
  var x5 =  CentX+cos(Angle)*SineWave(Counter,0,Amp,1,0);
  var y5 =  CentY+sin(Angle)*SineWave(Counter,0,Amp,1,0);
  

  fill(0,100,100), ellipse(x0, y0, 20, 20);
  fill(10,100,100),ellipse(x1, y1, 20, 20);
  fill(20,100,100),ellipse(x2, y2, 20, 20);
  fill(30,100,100),ellipse(x3, y3, 20, 20);
  fill(40,100,100),ellipse(x4, y4, 20, 20);
  fill(50,100,100),ellipse(x5, y5, 20, 20);
  
}

  
   
function ChangeXY_phase(CentX,CentY) {
  var Amp= .6*width/2;
  var Angle = 0;
  var x0 =  CentX+cos(Angle)*SineWave(Counter,0,Amp,1,Angle);
  var y0 =  CentY+sin(Angle)*SineWave(Counter,0,Amp,1,Angle);
  
  Angle = 30;
  var x1 =  CentX+cos(Angle)*SineWave(Counter,0,Amp,1, Angle);
  var y1 =  CentY+sin(Angle)*SineWave(Counter,0,Amp,1, Angle);
  
  Angle = 60;
  var x2 =  CentX+cos(Angle)*SineWave(Counter,0,Amp,1, Angle);
  var y2 =  CentY+sin(Angle)*SineWave(Counter,0,Amp,1, Angle);
  
  Angle = 90;
  var x3 =  CentX+cos(Angle)*SineWave(Counter,0,Amp,1, Angle);
  var y3 =  CentY+sin(Angle)*SineWave(Counter,0,Amp,1, Angle);
  
  Angle = 120;
  var x4 =  CentX+cos(Angle)*SineWave(Counter,0,Amp,1, Angle);
  var y4 =  CentY+sin(Angle)*SineWave(Counter,0,Amp,1, Angle);
  
  Angle = 150;
  var x5 =  CentX+cos(Angle)*SineWave(Counter,0,Amp,1, Angle);
  var y5 =  CentY+sin(Angle)*SineWave(Counter,0,Amp,1, Angle);
  

  fill(0,100,100), ellipse(x0, y0, 20, 20);
  fill(10,100,100),ellipse(x1, y1, 20, 20);
  fill(20,100,100),ellipse(x2, y2, 20, 20);
  fill(30,100,100),ellipse(x3, y3, 20, 20);
  fill(40,100,100),ellipse(x4, y4, 20, 20);
  fill(50,100,100),ellipse(x5, y5, 20, 20);
  
}
   
   
