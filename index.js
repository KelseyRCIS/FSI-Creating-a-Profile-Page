let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let image = document.createElement('img')
image.setAttribute('class', 'dog-image')
image.setAttribute('src', './assets/rizzo.jpg')
content.append(image)