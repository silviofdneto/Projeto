function toggleTheme() {
  const html = document.documentElement
  html.classList.toggle("light")
  //if (html.classList.contains("light")) {
  // html.classList.remove("light")
  // html.classList.add("")
  // } else {
  // html.classList.add("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver light mode, adicionar a imagem 2
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Um gato com os braços aberto, parecendo um abraço")
  } else {
    img.setAttribute(
      "alt",
      "O pokémon squirtle (uma tartaruga azul que tem poderes de água) usando óculos",
    )
  }
}
