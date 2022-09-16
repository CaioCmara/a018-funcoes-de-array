const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

function aumentarLetra(obj){
  for (let i in obj) {
    obj[i] = obj [i].toUpperCase()
  }
  return obj
}

function showValues(obj) {
  let text = " ";
  for (let i in obj) {
    text +=[I] `${obj[i]}`
  }
  return text.trim()
}

function objectToCallBack (obj, func){
  console.log(func(obj))
}

objectToCallBack(objeto, aumentarLetra)