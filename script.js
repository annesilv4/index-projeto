function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('Light')

    // pegar a tag img
    
    const image = document.querySelector("#profile img")

    // substituir a imagem
    if(html.classList.contains('Light')) {
        // se tiver light mode, adicionar a imagem light
        image.setAttribute('src', './assets/assets/avatar-light.png')
    } else {
        // se tiver sem light mode, manter a imagem normal
        image.setAttribute('src', './assets/assets/avatar.png')
    }

    // substituir a informação da imagem
    if(html.classList.contains('Light')) {
        // se tiver light mode, adicionar a descrição
        image.setAttribute('alt', 'Imagem de Mayk Brito sorrindo, com óculos de sol, jaqueta preta')
    } else {
        // se tiver light mode, manter a mesma descrição
        image.setAttribute('alt', 'Imagem de Maik Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo.')
    }
}