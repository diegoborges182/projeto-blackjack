

   console.log ("Boas vindas ao jogo de BlackJack.")
   
    function jogoDeCartas () {
  
   
   if(confirm("Deseja iniciar uma nova partida ?")){

      
      const cartaUsuario1= comprarCarta()
      const cartaUsuario2= comprarCarta()
      let somaUsuario = cartaUsuario1.valor + cartaUsuario2.valor

      
      const cartaComputador1 = comprarCarta()
      const cartaComputador2 = comprarCarta()
      let  somaComputador = cartaComputador1.valor + cartaComputador2.valor

      let arrayCartas = [cartaUsuario1.texto, cartaUsuario2.texto]
      for (i = 0; confirm(`Suas cartas são ${arrayCartas}.
      Carta revelada do computador é  ${cartaComputador1.texto}.
      Deseja comprar mais uma carta ?`); i++){

         let cartaNova = comprarCarta()
         let cartaTexto = cartaNova.texto
         arrayCartas.push(cartaTexto)
         somaUsuario = somaUsuario + cartaNova.valor
         console.log(somaUsuario)

         if (somaUsuario > 21) {
            break;
         }    
      }
      let arrayCartasComputador = [cartaComputador1.texto, cartaComputador2.texto]
      

      if (somaUsuario < 21){
         for (i=0; somaComputador <= somaUsuario; i++){
         let cartaNova = comprarCarta()
         let cartaTexto = cartaNova.texto
         arrayCartasComputador.push(cartaTexto)
         somaComputador = somaComputador + cartaNova.valor

         if (somaComputador > 21){
            break;
      
         }
      }
   }
   
    
if ( somaComputador === somaUsuario){ 
   console.log("empate")
   }else if(somaComputador>21){
     console.log("Jogador ganhou")
   }else if(somaComputador>somaUsuario){
     console.log("Computador ganhou")
   }else if (somaUsuario>somaComputador&& somaUsuario<21){
     console.log("Jogador ganhou")
   }else if(somaUsuario === 21) { 
      console.log ("O usuário ganhou") 
      
   }else if ( somaUsuario>21) {
      console.log(" O computador ganhou ");
   }
  console.log ( `Suas cartas são ${arrayCartas}.
  Sua pontuação é ${somaUsuario}.
  As cartas do computador são ${arrayCartasComputador}.
  A postuação do computador é ${somaComputador}.`)

}else {
   console.log(" O jogo acabou, recarregue a página para um novo jogo")
}
    }
   jogoDeCartas()
   

   








   

