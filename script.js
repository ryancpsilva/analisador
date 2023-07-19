let add = document.getElementById('txtadd')
let list = document.getElementById('list')
let res = document.getElementById('res')
let arr = []

function isnumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    } 
}

function inlist(n, l) {
    if (l.indexOf(Number(n)) == -1 ) {
        return true
    } else {
        return false
    }
}

function adicionar() {
   if (isnumero(add.value) && inlist(add.value, arr)) {
        let item = document.createElement('option')
        item.text = `O valor ${add.value} foi adicionado`
        list.appendChild(item)
        arr.push(Number(add.value))
        res.innerHTML = ''
    } else {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
   }
   add.value = ''
   add.focus()
}
function finalizar() {
    if (arr.length == 0) {
        window.alert('[ERRO] Por favor, adicione algum número!')
        list.innerHTML = ''
        res.innerHTML = ''
    } else {
        let tot = arr.length
        let maior = arr[0]
        let menor = arr[0]
        let soma = 0
        let media = 0
        for (let pos in arr) {
            soma += arr[pos]
            if (arr[pos] > maior) {
                maior = arr[pos]
            } 
            if (arr[pos] < menor) {
                menor = arr[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
        arr=[]
    }
}