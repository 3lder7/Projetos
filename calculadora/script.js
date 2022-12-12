function natela(n1){
    var num = window.document.getElementById('res').innerHTML
    window.document.getElementById('res').innerHTML = num + n1
}
function limpar(){
    res.innerHTML = ''
}
function calcular(){
    if(res = true){
        var res = window.document.getElementById('res').innerHTML
        window.document.getElementById('res').innerHTML = eval(res)
    }
}