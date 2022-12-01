const arrayCategoria = ['ação', 'ficção']
function listar_por_categoria(categoria){
    arrayCategoria.push(categoria)
    console.log(arrayCategoria)
}
listar_por_categoria('porno')

const listaValor = [
    {
        minimo: 1,
        maximo: 2
    }
]
function listar_por_valor(valor_minimo, valor_maximo){
    const dados = {
        minimo: valor_minimo,
        maximo: valor_maximo
    }
    listaValor.push(dados)
    console.log(listaValor)
}
listar_por_valor(2, 3)
