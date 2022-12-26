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
        

        h3.textContent = info[cot].titulo
        p.textContent = info[cot].conteudo

        novo.appendChild(h3)
        novo.appendChild(p)
        

        main.appendChild(novo)
        
    }
}
// ======== ANIMAÇÃO NOTAS ==========

function aniScroll() {

    let barra = window.scrollY
    let alvos = document.querySelectorAll(".nota") 

    alvos.forEach( (elem) => {
        
    })

}

window.document.addEventListener("scroll", aniScroll)


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

    console.log(titulo, conteudo)

    //Se os o titulo não for preechido a nota não será salva.

    if(titulo == '') {
        fechar()

    } else {
        let main = document.getElementById("main")
        let novo = document.createElement("div")
        novo.classList.add("nota")

        let h3 = document.createElement("h3")
        let p = document.createElement("p")

        // =====  Armazenamento de informações =====

        info.push({
            "titulo": titulo,
            "conteudo": conteudo,
        })

        localStorage.setItem("notas",JSON.stringify(info))

        // ------------------------------

        h3.textContent = titulo
        p.textContent = conteudo

        novo.appendChild(h3)
        novo.appendChild(p)
        main.appendChild(novo)

        fechar()
    }

    

    
    

    

    


}