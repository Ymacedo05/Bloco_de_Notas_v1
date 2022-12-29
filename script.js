let btn = document.getElementById("btn")
btn.addEventListener("click", abrirNota)

let x = document.getElementById("fechar")
x.addEventListener("click", fechar)

let v = document.getElementById("salvar")
v.addEventListener("click", salvar)

let modal = document.getElementById("modal-prot")

let info = []
//Verifica informações no Server, atualiza os dados locais e criar os novos elementos html para tornar o conteudo visual.

if(localStorage.getItem("notas")) {
    info = JSON.parse(localStorage.getItem("notas"))

    for(let cot = 0; cot < info.length; cot++) {

        let main = document.getElementById("main")
        let novo = document.createElement("div")
        novo.classList.add("nota")

        let h3 = document.createElement("h3")
        let p = document.createElement("p")
        let div = document.createElement("div")
        div.classList.add('sub')

        let opcao1 = document.createElement("i")
        opcao1.classList.add("fa-solid")
        opcao1.classList.add("fa-trash-can")
        opcao1.classList.add("op1")
  

        let opcao2 = document.createElement("i")
        opcao2.classList.add("fa-solid")
        opcao2.classList.add("fa-pencil")
        opcao2.classList.add("op2")

        let p1 = document.createElement("div")
        p1.classList.add('p1')
        let p2 = document.createElement("div")
        p2.classList.add('p2')
        let miniInfo =  document.createElement("div")
        miniInfo.classList.add("miniInfo")

        miniInfo.appendChild(p1)
        miniInfo.appendChild(p2)

        p1.textContent = info[cot].data
        p2.textContent = info[cot].hora
        

        h3.textContent = info[cot].titulo
        p.textContent = info[cot].conteudo

        div.appendChild(opcao1)
        div.appendChild(opcao2)

        novo.appendChild(h3)
        novo.appendChild(p)
        novo.appendChild(div)
        novo.appendChild(miniInfo)
        main.appendChild(novo)

        let alvos = document.querySelectorAll(".op1")
        console.log(alvos)

        alvos.forEach( (e,i) => {
         e.addEventListener("click", () => excluir(i))
        })

    }
}
// ======== ANIMAÇÃO NOTAS ==========

/*function aniScroll() {

    let barra = window.scrollY + (window.innerHeight/4)*3
    let alvos = document.querySelectorAll(".nota") 


    alvos.forEach( (elem) => {
        if(barra > elem.offsetTop) {
            elem.classList.add("active")
        }else {
            elem.classList.remove("active")
        }
    })

}

window.document.addEventListener("scroll", aniScroll)
aniScroll()
*/

// =========  Config Botão subir ======
function subir() {

    

    setInterval( () => {
        let barra = window.scrollY
        let altura = window.innerHeight / 4
        let btnSubir = document.getElementById('subir')


        if(barra > altura && info.length > 3) {
            btnSubir.classList.add("active")
        } else {
            btnSubir.classList.remove("active")
        }
    }, 1000)

}

subir()



function abrirNota() {
    document.getElementById("titulo").value = ''
    document.getElementById("textarea").value = ''
    modal.classList.add("active")     
}

function fechar() {
    modal.classList.remove("active")
}

    

function salvar() {
       

    let titulo = document.getElementById("titulo").value
    let conteudo = document.getElementById("textarea").value


    //Se os o titulo não for preechido a nota não será salva.

    if(titulo == '') {
        fechar()

    } else {
        let main = document.getElementById("main")
        let novo = document.createElement("div")
        novo.classList.add("nota")
        novo.addEventListener("click", () => bbtn(novo))

        let h3 = document.createElement("h3")
        let p = document.createElement("p")
        let div = document.createElement("div")
        div.classList.add('sub')

        let p1 = document.createElement("div")
        p1.classList.add('p1')
        let p2 = document.createElement("div")
        p2.classList.add('p2')
        let miniInfo =  document.createElement("div")
        miniInfo.classList.add("miniInfo")

        miniInfo.appendChild(p1)
        miniInfo.appendChild(p2)

        let tempo = new Date()

        let dia = tempo.getDate()
        let mes = tempo.getMonth() + 1
        let ano = tempo.getFullYear()
        let data = dia+"-"+mes+"-"+ano

        let hora = tempo.getHours()
        let minutos = tempo.getMinutes()
        let horario = hora+":"+minutos

        p1.textContent = data
        p2.textContent = horario






        let opcao1 = document.createElement("i")
        opcao1.classList.add("fa-solid")
        opcao1.classList.add("fa-trash-can")
        opcao1.classList.add("op1")
  

        let opcao2 = document.createElement("i")
        opcao2.classList.add("fa-solid")
        opcao2.classList.add("fa-pencil")
        opcao2.classList.add("op2")
        
        

        // =====  Armazenamento de informações =====

        info.push({
            "titulo": titulo,
            "conteudo": conteudo,
            "data":data,
            "hora":horario
        })

        localStorage.setItem("notas",JSON.stringify(info))

        // ------------------------------

        h3.textContent = titulo
        p.textContent = conteudo

        div.appendChild(opcao1)
        div.appendChild(opcao2)

        novo.appendChild(h3)
        novo.appendChild(p)
        novo.appendChild(div)
        novo.appendChild(miniInfo)
        main.appendChild(novo)

        let alvos = document.querySelectorAll(".op1")
        console.log(alvos)

        alvos.forEach( (e,i) => {
        e.addEventListener("click", () => excluir(i))
        })

        fechar()
        
    }

}




function excluir(i) {
    console.log(info)

    info.splice(i,1)
    localStorage.setItem("notas",JSON.stringify(info))

    let nota = document.querySelectorAll(".nota")
    nota[i].style.display = "none"
}


function toggleNota() {

    // Toggle botão de opções das notas
    let alvos = document.querySelectorAll(".nota")
    console.log(alvos)

    alvos.forEach( (e,i) => {
            alvos[i].addEventListener("click", () => bbtn(e,i))
    })

    
}

function bbtn(e,i) {
        e.classList.toggle("active")
}

toggleNota()