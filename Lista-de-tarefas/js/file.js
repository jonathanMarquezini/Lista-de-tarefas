let inputEl = document.getElementById("input")
let btnEl = document.getElementById("btn")
let mainEl = document.getElementById("areaLista")
let contador = 0

function adicionarTarefa() {
    ++contador
    let recebeInput = inputEl.value

    if(recebeInput !== "" && recebeInput !== null && recebeInput !== undefined) {
        let criaDIV = ` <div id="${contador}" class="item" >
    <div onclick="marcarTarefa(${contador})" class="item-icone">
        <i id="icone${contador}" class="bi bi-circle"></i>
    </div>

    <div class="item-nome">
        ${recebeInput}
    </div>

    <div class="item-botao">
        <button onclick="deletar(${contador})" ><i class="bi bi-trash3"></i>Deletar</button>
    </div>
</div>`

    mainEl.innerHTML += criaDIV

    inputEl.value = ""
    inputEl.focus()
    }
}

inputEl.addEventListener("keyup", (event) => {
    if(event.keyCode == 13) {
        event.preventDefault()
        adicionarTarefa()
    }
})
 
function deletar(id){
    let deletarEl = document.getElementById(id)
    deletarEl.remove()
}

function marcarTarefa(id) {
    let item = document.getElementById(id)
    let classe = item.getAttribute('class')

    if(classe == "item") {
        item.classList.add('clicado')

        let addIcone = document.getElementById('icone' + id)
        addIcone.classList.remove("bi-circle")
        addIcone.classList.add("bi-check-circle-fill")
        
    } else {
        item.classList.remove('clicado')

        let addIcone = document.getElementById('icone' + id)

        addIcone.classList.remove("bi-check-circle-fill")
        addIcone.classList.add("bi-circle")
    }
}