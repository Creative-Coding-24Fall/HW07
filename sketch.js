let poem
function preload() {
  poem=loadStrings("./poem.txt")
  Spoem = loadStrings("./poem.txt")
}
  function setup() {
  createCanvas(windowWidth, windowHeight);
  print(poem[0].length)
  angleMode(DEGREES)
  text(poem[0],100,100)

  
  let word = Spoem[0].split(' ')
  print(word)


}


function draw() {
  background(0)


  let a=width*0.5
  let k=4
  textSize(30)
  textFont('Courier New')
  for(let i=0;i<360;i++){
    fill(map(i,0,360,200,255),map(i,0,360,200,150),127)
    let x=a*cos(i*k+frameCount*0.05)*cos(i+frameCount*0.01)+width*2/3
    let y=a*cos(i*k+frameCount*0.05)*sin(i+frameCount)+height/3
  text(poem[0].charAt(i),x,y)
  }
  
  textWrap(WORD)
  textAlign(LEFT, TOP)
  textSize(15)

  text(Spoem[0],0,0,110,windowHeight)
  
}
