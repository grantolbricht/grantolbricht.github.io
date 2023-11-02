const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside and sunny, so :insertx: went for a run by the river. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertx = ["Willy the Dilly","MAMA","Ghosts of Christmas Christmas"];
const inserty = ["the river","the water", "a waterfall" ];
const insertz = ["drowned", "was swept away","turned into a fish and swam away" ];

randomize.addEventListener('click', result);
let newStory = storyText;
const xitem = randomValueFromArray(insertx);
const yitem = randomValueFromArray(inserty);
const zitem = randomValueFromArray(insertz);
function result() {

    newStory = newStory.replaceAll(":insertx", xitem);
    newStory = newStory.replace(":inserty", yitem);
    newStory = newStory.replace(":insertz", zitem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace(":Bob", name)

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14);
    newStory = newStory.replace("pounds", "stones")
    const temperature =  Math.round((32-94*(5/9))) + "centigrade";
    newStory = newStory.replace( " 94 fahrenheit", temperature)

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}