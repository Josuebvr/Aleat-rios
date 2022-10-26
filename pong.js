


//variáveis da bolinha
let xbolinha = 300;   //posição horizontal da bolinha
let ybolinha = 200;  //posição vertical da bolinha
let diametro = 15;   //diametro da bolinha
let raio = diametro / 2; //raio da bolinha

//velocidade da bolinha
let velocidadeXbolinha = 6;  //velocidade horizontal da bolinha
let velocidadeYbolinha = 6; //velocidade vertical da bolinha



// Funções 



function setup() { 
  createCanvas(600, 400); //tamanho da tela
}


function draw() {        //função de desenho
  background(0);        //cor de fundo
  mostrabolinha();     //chama a função que mostra a bolinha
  movimentabolinha(); //chama a função que movimenta qbolinha
  colisaoborda();    //chama a função que faz a bolinha bater na borda
}


function mostrabolinha(){ //função que mostra a bolinha
  circle(xbolinha, ybolinha, diametro); //desenha a bolinha
}


function movimentabolinha(){ //função que movimenta a bolinha
    xbolinha += velocidadeXbolinha;  //movimenta a bolinha na horizontal
    ybolinha += velocidadeYbolinha; //movimenta a bolinha na vertical
}


function colisaoborda(){ //função que faz a bolinha bater na borda
    if (xbolinha + raio > width || xbolinha - raio < 0) { //se a bolinha chegar no limite da tela
        velocidadeXbolinha *= -1;                        //inverte a velocidade horizontal
      }
      if (ybolinha + raio > height || ybolinha - raio < 0) { // se a bolinha chegar no limite da tela
        velocidadeYbolinha *= -1;                           //inverte a velocidade vertical
      }
}


