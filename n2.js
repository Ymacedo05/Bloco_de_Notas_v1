let ident = 0
let dados = []
let btnAdd = document.getElementById("btn")
btnAdd.addEventListener("click", abrirModal)

/*

function iniciar() {
   dados = recuperarStorage()
   
   if(dados.length > 0) {
      for(let c =0; c<dados.length; c++) {

         criar("iniciar", dados[c].titulo,dados[c].conteudo,dados[c].data, dados[c].horario, dados[c].ident)
      }
   } else {
      console.log("Não foi necessário usar a função iniciar(): ", + dados)
   }
   
   
}

iniciar()

*/

function staart(n) {
   dados = recuperarStorage()
   console.log(dados)

   if(dados.length > 0) {
      for(let contar =0; contar<dados.length; contar++) {

         criar("iniciar", dados[contar].titulo,dados[contar].conteudo,dados[contar].data, dados[contar].horario, dados[contar].ident)
      }
   } else {
      console.log("Não foi necessário usar a função iniciar(): ", + dados)
   }
}


staart(dados)

function abrirModal(){
   let modal = document.getElementById("modal-prot") 
   modal.classList.add("active")

   let titulo = document.getElementById("titulo").value = ''
   let conteudo = document.getElementById("textarea").value = ''
}





let salvar = document.getElementById("salvar")
salvar.addEventListener("click", save)

function save() {
   let titulo = document.getElementById("titulo").value
   let conteudo = document.getElementById("textarea").value
   
   criar('salvar',titulo,conteudo)
   salvarStorage()
}

let btnEditar = document.getElementById("editar")
btnEditar.addEventListener("click", atualizar)



// ================ CRIAÇÃO INICIO  =================
function criar(modo,titulo,conteudo,dat=0,hor=0, idd=0) {
   if(modo == "salvar") {
      if(titulo != ''){
      

         salvar.style.display = "block"
         btnEditar.style.display = "none"

         let main = document.getElementById("main")
      
         let div = document.createElement('div')
         div.classList.add("nota")
         div.addEventListener("click", ()=> togle(div))
         
      
         let h3 = document.createElement('h3')
         h3.classList.add("h3")
         let p = document.createElement('p')
         p.classList.add("p")
      
         let miniInfo = document.createElement('div')
         miniInfo.classList.add("miniInfo")
         let p1 = document.createElement('div')
         p1.classList.add("p1")
         let p2 = document.createElement('div')
         p2.classList.add("p2")
      
         let [data,horario] = dataHora() //DESTRUCTURING
      
      
         let sub = document.createElement('div')
         sub.classList.add("sub")
         let op1 = document.createElement("i")
              op1.classList.add("fa-solid")
              op1.classList.add("fa-trash-can")
              op1.classList.add("op1")
         
      
         let op2 = document.createElement("i")
              op2.classList.add("fa-solid")
              op2.classList.add("fa-pencil")
              op2.classList.add("op2")
      
      
         h3.textContent = titulo
         p.textContent = conteudo
         p1.textContent = data
         p2.textContent = horario
      
         
         div.appendChild(h3)
         div.appendChild(p)
         miniInfo.appendChild(p1)
         miniInfo.appendChild(p2)
         div.appendChild(miniInfo)
         sub.appendChild(op1)
         sub.appendChild(op2)
         div.appendChild(sub)
         main.appendChild(div)
      
         ident ++
         div.id = ident
         op1.addEventListener("click", ()=> excluir(div.id))
      
      
         fecharModal()
         console.log("Nota criada: id: "+ident)

         dados.push({
            titulo,
            conteudo,
            data,
            horario,
            ident
         })

      } else{
         fecharModal()
      }
      
   
   } else if(modo == "iniciar") {

      let main = document.getElementById("main")
      
         let div = document.createElement('div')
         div.classList.add("nota")
         div.addEventListener("click", ()=> togle(div))
         
      
         let h3 = document.createElement('h3')
         h3.classList.add("h3")
         let p = document.createElement('p')
         p.classList.add("p")
      
         let miniInfo = document.createElement('div')
         miniInfo.classList.add("miniInfo")
         let p1 = document.createElement('div')
         p1.classList.add("p1")
         let p2 = document.createElement('div')
         p2.classList.add("p2")
      
               
         let sub = document.createElement('div')
         sub.classList.add("sub")
         let op1 = document.createElement("i")
              op1.classList.add("fa-solid")
              op1.classList.add("fa-trash-can")
              op1.classList.add("op1")
         
      
         let op2 = document.createElement("i")
              op2.classList.add("fa-solid")
              op2.classList.add("fa-pencil")
              op2.classList.add("op2")
      
      
         h3.textContent = titulo
         p.textContent = conteudo
         p1.textContent = dat
         p2.textContent = hor
      
         
         div.appendChild(h3)
         div.appendChild(p)
         miniInfo.appendChild(p1)
         miniInfo.appendChild(p2)
         div.appendChild(miniInfo)
         sub.appendChild(op1)
         sub.appendChild(op2)
         div.appendChild(sub)
         main.appendChild(div)
      
         console.log(idd)
         div.id = idd
         op1.addEventListener("click", ()=> excluir(div.id))
         op2.addEventListener("click", ()=> editar(div.id))

         ident = dados[dados.length -1].ident
         console.log(ident)

         

   } 

}
// ================ CRIAÇÃO FIM  =================



// ==================== EDIÇÃO INICIO ====================
let repasseID = 0
let repasseVetor = 0

function editar(x) {
   abrirModal()
   incluirInfo(x)

   salvar.style.display = "none"
   btnEditar.style.display = "block"

   
}



btnEditar.addEventListener('click', atualizar)
function atualizar() {
   console.log(repasseID, repasseVetor)
   let [data,horario] = dataHora() //DESTRUCTURING

   let titulo = document.getElementById("titulo").value
   let conteudo = document.getElementById("textarea").value 

   dados[repasseVetor].titulo = titulo
   dados[repasseVetor].conteudo = conteudo
   dados[repasseVetor].data = data
   dados[repasseVetor].horario = horario

   let h3 = document.querySelectorAll(".h3")
   let p = document.querySelectorAll(".p")
   let p1 = document.querySelectorAll(".p1")
   let p2 = document.querySelectorAll(".p2")

   h3[repasseVetor].textContent = titulo
   p[repasseVetor].textContent = conteudo
   p1[repasseVetor].textContent = data
   p2[repasseVetor].textContent = horario

   salvarStorage()
   fecharModal()



}

function incluirInfo(n) {

   let i = localVetor(n)
   n = String(n)
   let alvo = document.getElementById(n)
   repasseID = n
   repasseVetor = i
  

   let titulo = document.getElementById("titulo").value =  dados[i].titulo
   let conteudo = document.getElementById("textarea").value = dados[i].conteudo
}


// ================ EDIÇÃO FIM =================



// ================ Excluir Inicio =================

function excluir(n) {
   
   
   let i = localVetor(n)
   n = String(n)
   let alvo = document.getElementById(n)
   alvo.style.display = "none"
   console.log(n, i)

   dados.splice(i,1)
   salvarStorage()



}

// ================ Excluir FIM =================



function dataHora() {
   let tempo = new Date()
      
         let dia = tempo.getDate()
         let mes = tempo.getMonth() + 1
         let ano = tempo.getFullYear()
         let data = dia+"-"+mes+"-"+ano
      
         let hora = tempo.getHours()
         let minutos = tempo.getMinutes()
         let horario = hora+":"+minutos

   return [data, horario]
}

function togle(x){
   x.classList.toggle("active")
}



function fecharModal() {
   let modal = document.getElementById("modal-prot") 
   modal.classList.remove("active")
}







function localVetor(n) {
   for(let c=0; c<dados.length; c++) {

      if(dados[c].ident == n) {
         return c
      }
   }
}

function salvarStorage() {
   localStorage.setItem("key", JSON.stringify(dados))
}



function recuperarStorage() {
   return JSON.parse(localStorage.getItem("key"))
}






window.document.addEventListener("scroll", subir)

function subir() {
   
   let btnSubir = document.getElementById("subir")
   let barra = scrollY
   let alturaTotal = window.innerHeight
   
   if(barra > alturaTotal/3) {
      btnSubir.classList.add("active")
   } else {
      btnSubir.classList.remove("active")
   }
}
