
function tratarErroLancar(erro) {
    //throw new console.error('....')
    //throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.nome,
        msg: erro.message,
        date: new Date
    }
}
function imprimirNome(obj) {
    try{
        console.log(obj.nome.toUpperCase() + '!!!!')
    } catch (e) {
        tratarErroLancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto'}
imprimirNome(obj)