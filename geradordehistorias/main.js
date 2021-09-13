const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = ':insertx: foi dar uma volta. Quando ele viu a :inserty:, ele ficou :insertsentimento: e quando do nada :insertz:. Julio estava em casa quando tudo aconteceu. Isso aconteceu as :inserthora: pm.';
let insertNome = ['Roberto Justos','Silvio Santos','Homem de ferro', 'Celso Portioli'];
let insertLugar = ['casa da maisa','floresta amazonica','avenida principal de sao goncalo'];
let insertsentimento = ['triste', 'feliz', 'revoltado', 'faminto', 'exaltado', 'com vontade de ir ao banheiro']
let insertAleatorio = ['choveu','o pokemon go apitou no celular avisando que tinha shiny perto','percebeu que era melhor ter ido ver o filme do pele'];
let insertHora = ['1','2','3','4','5']

randomize.addEventListener('click', result);





function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertNome);
  let yItem = randomValueFromArray(insertLugar);
  let zItem = randomValueFromArray(insertAleatorio);
  let hItem = randomValueFromArray(insertsentimento);
  let horaItem = randomValueFromArray(insertHora);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserthora:',horaItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);
  newStory = newStory.replace(':insertsentimento:',hItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Julio',name);
  }

  if(document.getElementById("jap").checked) {
    var fusoj = "am"
    newStory = newStory.replace('pm',fusoj);
    
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
