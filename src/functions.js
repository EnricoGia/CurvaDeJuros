import {AddTaxaDeJuros,removeTaxaDeJuros,adicionarAno,removeAno} from "./acquisitions"

const inputAdicionar = document.querySelector("#input__taxa-de-juros")
const buttonAdicionar = document.querySelector("#taxa-de-juros__adicionar")
const buttonRemoverAno = document.querySelector("#ano__remover")
const buttonAdicionarAno = document.querySelector("#ano__adicionar")
const buttonRemover = document.querySelector("#taxa-de-juros__remover")


buttonAdicionar.addEventListener("click",()=>{
    var taxa = inputAdicionar.value/100
    AddTaxaDeJuros(taxa)
})

buttonRemoverAno.addEventListener("click",()=>{
    removeAno();
})

buttonAdicionarAno.addEventListener("click",()=>{
    adicionarAno();
})

buttonRemover.addEventListener("click", ()=>{
    removeTaxaDeJuros();
})



