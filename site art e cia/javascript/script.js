
///sistema demo










let nome = prompt("ola qual seu nome ?")
alert(`seja bem vindo ${nome}`)

let pa = 1
//////////////botao///////////////
let b1 = document.querySelector('#um')
let b2 = document.querySelector('#dois')
let b3 = document.querySelector('#treis')
let b4 = document.querySelector('#quatro')
let fp = document.querySelector('#finalizarpedido')






function escurecer() {
    let corpo = document.getElementById("claroa")
    corpo.style.backgroundColor = "black"

}



let escuro = document.getElementById('escuro')
escuro.addEventListener("click" , escurecer)     

function esclarecer() {
    let corpo = document.getElementById("claroa")
    corpo.style.backgroundColor = "#F7F4F2"

}



let claro = document.getElementById('claro')
claro.addEventListener("click" , esclarecer)   




let t1 = document.getElementById('t1')
t1.addEventListener("click" , escurecer)   
///////////////////comprar/////////////////
let p1 = ("  rosto R$49,00")
let p2 = ("  lavabo R$39,00")

let link = ("https://api.whatsapp.com/send?phone=553171648372&text= *obrigado por fazer a compra em nosso site , agradecemos sua preferecia* segue a baixo seu pedido ")
let valor_final = 0
let ultimadiv = document.querySelector("#ultimadiv")
let duvidas = document.getElementById("duvidas")
let linkdisponivel = document.createElement("p")



//
function adicionarop1() {
    valor_final = valor_final + 49
    link = link + p1
    linkdisponivel.innerHTML = `<a href="${link}"> enviar pedido </a>`
    ultimadiv.appendChild(linkdisponivel)
   }
   function adicionarop2() {
    valor_final = valor_final + 39
    link = link + p2
    linkdisponivel.innerHTML = `<a href="${link}"> enviar pedido </a>`
    ultimadiv.appendChild(linkdisponivel)
   }
   function finalizar_pedido() {

       link = link + valor_final
 
   }
  


   rosto = querySelectorAll(".rosto");
for(i=0; i<rosto.length; i++){
    rosto[i].addEventListener("click", adicionarop1);
}


lavabo = querySelectorAll(".lavabo");
for(i=0; i<lavabo.length; i++){
    lavabo[i].addEventListener("click", adicionarop2);
}


fp.addEventListener('click' ,finalizar_pedido)
//










function ci() {
   
    if (pa === 1) {
        alert("aqui e a pagina inicial")
    }
    if (pa === 2) {
        alert("aqui temos informacoes sobre a art e cia")
    } if (pa === 3) {
        alert("aqui temos nossos contatos")
    } if (pa === 4) {
        alert("aqui voce pode nos avaliar")
    } if (pa === 5) {
        alert("aqui voce pode fazer as compras , basta selcionar os produtos")
    }
}
let cib = document.getElementById("ci")
cib.addEventListener("click" , ci)


//////////////////div//////////////////// 