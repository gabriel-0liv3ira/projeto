function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./aasets/avatar 2.png")
  } else {
    img.setAttribute("src", "./aasets/avatar dark.png")
  }
  //pegar a tag img

  //substituit a imagem
  //se tiver light mode, adicionar a imagem light
  // se tiver sem light mode, manter a imagem normal
}


