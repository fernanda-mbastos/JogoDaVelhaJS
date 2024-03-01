let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let message = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// contador de jogadas

let player1 = 0;
let player2 = 0;

// função para definir o jogador
function checkEl(player1,player2) {
  if (player1 == player2) {
    el = x;
  } else {
    el = o;
  }
  return el;
}

// evento para escolher humano ou IA

for(let i = 0; i < buttons.length; i++) {

  buttons[i].addEventListener("click", function() {

    secondPlayer = this.getAttribute("id");

    for(let j = 0; j < buttons.length; j++) {
      buttons[j].style.display = "none";
    }

    setTimeout(() => {
      
      let container = document.querySelector("#container");
      container.classList.remove("hide");

    }, 500);

    
  });
}

// adicionando o evento em click nos boxs
for (let i = 0; i<boxes.length; i++) {

// quando clica na caixa
  boxes[i].addEventListener("click", function() {

    let el = checkEl(player1, player2);

    //verifica se já tem x ou o
    if(this.childNodes.length == 0) {

      let cloneEl = el.cloneNode(true);

      this.appendChild(cloneEl);

      //computar a jogada
      if (player1 == player2) {
        player1++;

        if(secondPlayer == "ai-jogador") {
          computerPlayer();
          player2++;
        }
      } else {
        player2++;
      }
    
      getWinCondition();
      
    }

  });

}

// ver quem ganhou
function getWinCondition() {
  let b1 = document.getElementById("block1");
  let b2 = document.getElementById("block2");
  let b3 = document.getElementById("block3");
  let b4 = document.getElementById("block4");
  let b5 = document.getElementById("block5");
  let b6 = document.getElementById("block6");
  let b7 = document.getElementById("block7");
  let b8 = document.getElementById("block8");
  let b9 = document.getElementById("block9");

  //horizontais
  if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {

    let b1Child = b1.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;

    if (b1Child == "x" && b2Child == "x" && b3Child == "x") {
      declareWinner('x'); // x venceu
    } else if (b1Child == "o" && b2Child == "o" && b3Child == "o") {
      declareWinner('o'); // o venceu
    }
  }

  if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

    let b4Child = b4.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;

    if (b4Child == "x" && b5Child == "x" && b6Child == "x") {
      declareWinner('x'); // x venceu
    } else if (b4Child == "o" && b5Child == "o" && b6Child == "o") {
      declareWinner('o'); // o venceu
    }  
  
  }

  if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

    let b7Child = b7.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b7Child == "x" && b8Child == "x" && b9Child == "x") {
      declareWinner('x'); // x venceu
    } else if (b7Child == "o" && b8Child == "o" && b9Child == "o") {
      declareWinner('o'); // o venceu
    }  
  
  }

  //verticais
  if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) { 

    let b1Child = b1.childNodes[0].className;
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b1Child == "x" && b4Child == "x" && b7Child == "x") {
      declareWinner('x'); // x venceu
    } else if (b1Child == "o" && b4Child == "o" && b7Child == "o") {
      declareWinner('o'); // o venceu
    }
  }

  if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {

    let b2Child = b2.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;

    if (b2Child == "x" && b5Child == "x" && b8Child == "x") {
      declareWinner('x'); // x venceu
    } else if (b2Child == "o" && b5Child == "o" && b8Child == "o") {
      declareWinner('o'); // o venceu
    }  

  }

  if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {

    let b3Child = b3.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b3Child == "x" && b6Child == "x" && b9Child == "x") {
      declareWinner('x'); // x venceu
    } else if (b3Child == "o" && b6Child == "o" && b9Child == "o") {
      declareWinner('o'); // o venceu
      console.log('o venceu');
    }  

  }

  //diagonais
  if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {

    let b1Child = b1.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b1Child == "x" && b5Child == "x" && b9Child == "x") {
      declareWinner('x'); // x venceu
    } else if (b1Child == "o" && b5Child == "o" && b9Child == "o") {
      declareWinner('o'); // o venceu
    }
  }

  if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {

    let b3Child = b3.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b3Child == "x" && b5Child == "x" && b7Child == "x") {
      declareWinner('x'); // x venceu
    } else if (b3Child == "o" && b5Child == "o" && b7Child == "o") {
      declareWinner('o'); // o venceu
    }    
  } 
   //deu velha
  let contador = 0;

  for (let i = 0; i < boxes.length; i++) {
   if (boxes[i].childNodes[0] != undefined) {
    contador++;
   }
  }

  if (contador == 9) {
    declareWinner('deu velha');
    console.log("deu velha");
     }
}

// funcao limpa o jogo, declara o vencedor e atualiza o placar
function declareWinner(winner) {
  let scoreboardx = document.querySelector("#scoreboard-1");
  let scoreboardo = document.querySelector("#scoreboard-2");
  let msg = '';

  if (winner == 'x') {
    scoreboardx.textContent = parseInt(scoreboardx.textContent) + 1;
    msg = 'O jogador 1 venceu!';
  } else if (winner == 'o') {
    scoreboardo.textContent = parseInt(scoreboardo.textContent) + 1;
    msg = 'O jogador 2 venceu!';
  } else {
    msg = "Deu velha!";
  }

  // aparece mensagem
  messageText.innerHTML = msg;
  message.classList.remove('hide');

  //esconde msg
  setTimeout(function() {
    message.classList.add('hide');
  }, 400);

  //zera as jogadas
  player1 = 0;
  player2 = 0;

  //remover os x e o
  let boxToRemove = document.querySelectorAll(".box div");


  for(let i = 0; i < boxToRemove.length; i++) {
    boxToRemove[i].parentNode.removeChild(boxToRemove[i]);
  }

}

// função AI
function computerPlayer() {


  let cloneO = o.cloneNode(true);
  counter = 0;
  filled = 0;

  for(let i = 0; i < boxes.length; i++) {

    let randomNumber = Math.floor(Math.random()*5);

    // so preenche se estiver vazio
      if (boxes[i].childNodes[0] == undefined) {
        if (randomNumber <= 1) {
          boxes[i].appendChild(cloneO);
          counter++;
          break
        }
      } else {
        filled++;
      }
              
  }
  if (counter == 0 && filled < 9) {
    computerPlayer();
  }

}