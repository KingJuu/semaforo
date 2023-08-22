var imagem =  document.querySelector("img");      
const botoes = document.querySelectorAll('button'); 
let intervalId = null;
let automaticoAtivo = false;
let cont = 0;       

for(const botao of botoes){
    botao.addEventListener('click', function(){
    
    if (botao.classList.contains('automatico')){
        if(automaticoAtivo){
            clearInterval(intervalId);
            automaticoAtivo = false;
        }else{
            automaticoAtivo = true;
            intervalId = setInterval(function(){
                if(cont === 0){
                    imagem.setAttribute('src', './img/vermelho.png');
                }else if(cont === 1){
                    imagem.setAttribute('src', './img/amarelo.png');
                }else if(cont === 2){
                    imagem.setAttribute('src', './img/verde.png');
                }
                cont ++
                if (cont === 3){
                    cont = 0;
                }
            },1000);
        }
    }else{
        imagem.setAttribute('src', `./img/${botao.id}.png`);

    }
});
}
