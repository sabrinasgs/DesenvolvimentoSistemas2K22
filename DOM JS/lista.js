//https://getbootstrap.com.br/docs/4.1/components/buttons/
function DeleteItem(){
    //console.log(this.parentElement)
    this.parentElement.remove()
}
function EditItem(){
     // console.log(this.parentElement) /Pq não funfou? ;-;
     //this.parentElement.edit()
    item_lista = this.parentElement
    texto_item_lista = item_lista.innerText.replace("DeleteEdit", "")
    input_element = document.querySelector('[data-form-input]')
    input_element.value = texto_item_lista

    const botao_submit = document.querySelector ('[button-submit')
    // botao_submit.className = 'd-none'
    //Comentado pois essa linha faz sumir o botão de submit, sendo assim, não salva a informação editada.

    const botao_edit = document.querySelector('[button-edit')
    botao_edit.classList.remove('d-done')
  }

  function CriarBotaoEdit (){
    const botao_edit =  document.createElement('button')
    botao_edit.classList.add("btn", "btn-warning")
    botao_edit.innerHTML = "Edit"
    botao_edit.type = "button"
    botao_edit.addEventListener("click", EditItem);

    return botao_edit
  }

function CriarBotaoDelete(){
    const botao_delete =  document.createElement('button')
    botao_delete.classList.add("btn", "btn-danger")
    botao_delete.innerHTML = "Delete"
    botao_delete.type = "button"
    botao_delete.addEventListener("click", DeleteItem);

    return botao_delete
}

function Submit(){
    const lista = document.querySelector('[data-task]')
    const valor = document.querySelector('[data-form-input]')

    const novo_item_lista = document.createElement("li")
    novo_item_lista.className = "list-group-item";

    novo_item_lista.innerHTML = valor.value
 
    novo_item_lista.appendChild(CriarBotaoDelete())
    novo_item_lista.appendChild(CriarBotaoEdit())
    lista.appendChild (novo_item_lista)

    document.getElementById("item").value = ""
}

function Edit(){
    texto_adicionado = input_element.value
    item_lista.innerHTML = texto_adicionado

    item_lista.appendChild(CriarBotaoDelete())
    item_lista.appendChild(CriarBotaoEdit())

    const botao_submit = document.querySelector('[button-submit]')
   // botao_submit.classList.remove('d-none')
    botao_submit.classList.add('btn', 'btn-dark')

    const botao_edit = document.querySelector('[button-edit]')
    botao_edit.classList.add('d-none')

    input_element.value = '';
}
 














// function myFunction(){
//     console.log("teste inicial");
// }

// function addItem(){
//     const inputItem = document.querySelector('[data-form-input]')
//     const valorItem = inputItem.value

//     const listaDeItems = document.querySelector('[data-task]')

//     novaLabel = document.createElement('label')
//     novaLabel.innerText = valorItem
    
//     novoItem = document.createElement('li')

//     // novoItem.appendChild(criarBotaoConcluir())
//     novoItem.appendChild(novaLabel)
//     // novoItem.appendChild(criarBotaoDelete())

//     listaDeItems.appendChild(novoItem)

//     inputItem.value = ""
//}
