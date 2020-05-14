let modal = document.querySelector('.modal-wrap');
let btn = document.querySelector('.btn');
let textModal = document.querySelector('.modal-text');

let areaTd = [
    {coord:'00',
     stat:null
    },
    {coord:'01',
     stat:null
    },
    {coord:'02',
     stat:null
    },
    {coord:'10',
     stat:null
    },
    {coord:'11',
     stat:null
    },
    {coord:'12',
     stat:null
    },
    {coord:'20',
     stat:null
    },
    {coord:'21',
     stat:null
    },
    {coord:'22',
     stat:null
    }
];

function openModal(modal,btn,textModal,text,audio){
    modal.classList.add('modal-wrap_active');
    textModal.innerHTML = text;
    if(audio==true){
       let audio = new Audio(); // Создаём новый элемент Audio
       audio.src = 'audio/Soundtrack.mp3'; // Указываем путь к звуку "клика"
       audio.autoplay = true; // Автоматически запускаем 
    }
    btn.addEventListener('click', function(e){
        e.preventDefault();
        modal.classList.remove('modal-wrap_active');
        window.location.reload();
    })
}

function go(td, areaTd, coord){
    for(let i = 0; i<areaTd.length; i++){
        if(areaTd[i].coord==coord &&areaTd[i].stat!='O' && areaTd[i].stat!='X'){
            areaTd[i].stat = 'X';
            td.innerHTML = 'X';
        }
    }
};

let randomCoord;

function randomNumber(){
    return randomCoord = Math.floor(Math.random()*8);
}

function randomMove(areaTd, tableTd){
    randomNumber();
    
    if(areaTd[randomCoord].stat!='O' && areaTd[randomCoord].stat!='X'){
       areaTd[randomCoord].stat = 'O'; 
       tableTd[randomCoord].innerHTML = 'O'; 
    }else {
        while(areaTd[randomCoord].stat!=null){
            randomNumber();
        }
       areaTd[randomCoord].stat = 'O'; 
       tableTd[randomCoord].innerHTML = 'O'; 
    }
} 
function gamePlayerWin(areaTd){
    let tableTd = document.querySelectorAll('.table td');
    if(stop(areaTd)){
        let text = 'победила дружба';
        openModal(modal,btn,textModal,text);
        return;
    }else{ 
    if((areaTd[0].stat=='O'&& areaTd[1].stat=='O'||
        areaTd[6].stat=='O'&& areaTd[4].stat=='O'||
        areaTd[5].stat=='O' && areaTd[8].stat=='O') && areaTd[2].stat==null){
            areaTd[2].stat = 'O'; 
            tableTd[2].innerHTML = 'O';
    }else if((areaTd[0].stat=='O'&& areaTd[4].stat=='O'||
              areaTd[2].stat=='O'&& areaTd[5].stat=='O'||
              areaTd[6].stat=='O' && areaTd[7].stat=='O') && areaTd[8].stat==null){
                areaTd[8].stat = 'O'; 
                tableTd[8].innerHTML = 'O';

    }else if((areaTd[0].stat=='O'&& areaTd[3].stat=='O'||
             areaTd[2].stat=='O'&& areaTd[4].stat=='O'||
             areaTd[8].stat=='O' && areaTd[7].stat=='O') && areaTd[6].stat==null){
                areaTd[6].stat = 'O'; 
                tableTd[6].innerHTML = 'O';
    }else if((areaTd[1].stat=='O'&& areaTd[2].stat=='O'||
              areaTd[3].stat=='O'&& areaTd[6].stat=='O'||
              areaTd[4].stat=='O' && areaTd[8].stat=='O') && areaTd[0].stat==null){
                 areaTd[0].stat = 'O'; 
                 tableTd[0].innerHTML = 'O';
    }else if((areaTd[0].stat=='O'&& areaTd[2].stat=='O'||
              areaTd[4].stat=='O'&& areaTd[7].stat=='O') && areaTd[1].stat==null){
                 areaTd[1].stat = 'O'; 
                 tableTd[1].innerHTML = 'O';
    }else if((areaTd[1].stat=='O'&& areaTd[4].stat=='O'||
              areaTd[6].stat=='O'&& areaTd[8].stat=='O') && areaTd[7].stat==null){
                 areaTd[7].stat = 'O'; 
                 tableTd[7].innerHTML = 'O';
    }else if((areaTd[0].stat=='O'&& areaTd[6].stat=='O'||
              areaTd[4].stat=='O'&& areaTd[5].stat=='O') && areaTd[3].stat==null){
                areaTd[3].stat = 'O'; 
                tableTd[3].innerHTML = 'O';
    }else if((areaTd[2].stat=='O'&& areaTd[8].stat=='O'||
              areaTd[3].stat=='O'&& areaTd[4].stat=='O') && areaTd[5].stat==null){
                areaTd[5].stat = 'O'; 
                tableTd[5].innerHTML = 'O';
    } else{
       gamePlayer(areaTd) 
    }
    winGamer(areaTd);
  }
}
function gamePlayer(areaTd){ 
    
    let tableTd = document.querySelectorAll('.table td');
     
            if((areaTd[0].stat=='X'&& areaTd[1].stat=='X'||
               areaTd[6].stat=='X'&& areaTd[4].stat=='X'||
               areaTd[5].stat=='X' && areaTd[8].stat=='X') && areaTd[2].stat==null){
                   areaTd[2].stat = 'O'; 
                   tableTd[2].innerHTML = 'O';
            }else if((areaTd[0].stat=='X'&& areaTd[4].stat=='X'||
                      areaTd[2].stat=='X'&& areaTd[5].stat=='X'||
                      areaTd[6].stat=='X' && areaTd[7].stat=='X') && areaTd[8].stat==null){
                    areaTd[8].stat = 'O'; 
                    tableTd[8].innerHTML = 'O';

            }else if((areaTd[0].stat=='X'&& areaTd[3].stat=='X'||
                      areaTd[2].stat=='X'&& areaTd[4].stat=='X'||
                      areaTd[8].stat=='X' && areaTd[7].stat=='X') && areaTd[6].stat==null){
                    areaTd[6].stat = 'O'; 
                    tableTd[6].innerHTML = 'O';
            }else if((areaTd[1].stat=='X'&& areaTd[2].stat=='X'||
                      areaTd[3].stat=='X'&& areaTd[6].stat=='X'||
                      areaTd[4].stat=='X' && areaTd[8].stat=='X') && areaTd[0].stat==null){
                    areaTd[0].stat = 'O'; 
                    tableTd[0].innerHTML = 'O';
            }else if((areaTd[0].stat=='X'&& areaTd[2].stat=='X'||
                      areaTd[4].stat=='X'&& areaTd[7].stat=='X') && areaTd[1].stat==null){
                    areaTd[1].stat = 'O'; 
                    tableTd[1].innerHTML = 'O';
            }else if((areaTd[1].stat=='X'&& areaTd[4].stat=='X'||
                      areaTd[6].stat=='X'&& areaTd[8].stat=='X') && areaTd[7].stat==null){
                    areaTd[7].stat = 'O'; 
                    tableTd[7].innerHTML = 'O';
            }
            else if((areaTd[0].stat=='X'&& areaTd[6].stat=='X'||
                      areaTd[4].stat=='X'&& areaTd[5].stat=='X') && areaTd[3].stat==null){
                    areaTd[3].stat = 'O'; 
                    tableTd[3].innerHTML = 'O';
            }else if((areaTd[2].stat=='X'&& areaTd[8].stat=='X'||
                      areaTd[3].stat=='X'&& areaTd[4].stat=='X') && areaTd[5].stat==null){
                    areaTd[5].stat = 'O'; 
                    tableTd[5].innerHTML = 'O';
            } else if(areaTd[4].stat==null){
                    areaTd[4].stat = 'O'; 
                    tableTd[4].innerHTML = 'O';
            } else{
                randomMove(areaTd, tableTd)
          }
}

function winGamer(areaTd){
        if(areaTd[0].stat=='X'&& areaTd[1].stat=='X' && areaTd[2].stat=='X'||
           areaTd[0].stat=='X'&& areaTd[4].stat=='X' && areaTd[8].stat=='X'||
           areaTd[0].stat=='X'&& areaTd[3].stat=='X' && areaTd[6].stat=='X'||
           areaTd[6].stat=='X'&& areaTd[4].stat=='X' && areaTd[2].stat=='X'||
           areaTd[6].stat=='X'&& areaTd[7].stat=='X' && areaTd[8].stat=='X'||
           areaTd[3].stat=='X'&& areaTd[4].stat=='X' && areaTd[5].stat=='X'||
           areaTd[1].stat=='X'&& areaTd[4].stat=='X' && areaTd[7].stat=='X'||
           areaTd[2].stat=='X'&& areaTd[5].stat=='X' && areaTd[8].stat=='X'
          ){
            let text = 'Поздравляю вы спасли мир'
            openModal(modal,btn,textModal,text);
            return true;
        }else if(areaTd[0].stat=='O'&& areaTd[1].stat=='O' && areaTd[2].stat=='O'||
                 areaTd[0].stat=='O'&& areaTd[4].stat=='O' && areaTd[8].stat=='O'||
                 areaTd[0].stat=='O'&& areaTd[3].stat=='O' && areaTd[6].stat=='O'||
                 areaTd[6].stat=='O'&& areaTd[4].stat=='O' && areaTd[2].stat=='O'||
                 areaTd[6].stat=='O'&& areaTd[7].stat=='O' && areaTd[8].stat=='O'||
                 areaTd[3].stat=='O'&& areaTd[4].stat=='O' && areaTd[5].stat=='O'||
                 areaTd[1].stat=='O'&& areaTd[4].stat=='O' && areaTd[7].stat=='O'||
                 areaTd[2].stat=='O'&& areaTd[5].stat=='O' && areaTd[8].stat=='O'){
               let text = 'Упс!!! Кажется восстание машин уже началось ';
               let audio = true;
                openModal(modal,btn,textModal,text,audio );  
                return true;
        }
}
function stop(areaTd){
    let number = 0;
    for(let i = 0; i<areaTd.length; i++){
        if(areaTd[i].stat==null){
           number = number+1;
        }
    }
    if(number==0){
        return true;
    }
};

function init(areaTd ){
    let table = document.querySelector('.table');
    table.addEventListener('click', function(e){   
        if(e.target.tagName==='TD' && e.target.innerHTML==''){
            
            let td = e.target;
            let tdCoord = e.target.getAttribute('data-coord');
            
            go(td, areaTd, tdCoord);
            if(!winGamer(areaTd)){
                gamePlayerWin(areaTd)
            }
            
        }
    });
};

init(areaTd );