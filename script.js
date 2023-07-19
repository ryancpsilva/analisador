let add = document.getElementById('txtadd')
let list = document.getElementById('list')
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
    } else {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
   }
}
function finalizar() {
    let res = document.getElementById('res')
    res.innerHTML = ''
    if (arr.length == 0) {
        window.alert('[ERRO] Por favor, adicione algum número!')
        list.innerHTML = ''
    } else {
        
        arr.sort()
        res.innerHTML += `<p>Ao todo temos ${arr.length} números adicionados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${arr[arr.length-1]}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${arr[0]}</p>`
        let c = 0
        for (let i in arr) {
            c += Number(arr[i])
        }
        res.innerHTML += `<p> A soma de todos os valores é igual a ${c}</p>`
        res.innerHTML += `<p> A média de todo os valores é igual a ${c/arr.length}`
        arr=[]
    }
}