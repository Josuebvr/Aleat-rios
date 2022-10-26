
let xbolinha = 300; //posição horizontal da bolinha
let ybolinha = 200; //posição vertical da bolinha
let diametro = 15;  //diametro da bolinha
let velocidadeXbolinha = 5; //velocidade horizontal da bolinha
let velocidadeYbolinha = 5; //velocidade vertical da bolinha



function setup() { 
  createCanvas(600, 400); //tamanho da tela
}




function draw() {
  background(0);
  circle(xbolinha, ybolinha, diametro);
  xbolinha += velocidadeXbolinha;
  ybolinha += velocidadeYbolinha;
}



