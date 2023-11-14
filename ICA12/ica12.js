const newbtn = document.querySelector('#js-new-quote');
addEventListener ('click', getquote);
const endpoint= 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

async function getquote () {
    //console.log('test');
    try{
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json= await response.json();
        const question = json['question'];
        displayQuote(json['question']);
    }
    catch(err){
        console.log(err);
        alert('Failed to fetch new quote');
    }
}
function displayQuote(question) {
    const questiontTxt= document.querySelector('#js-quote-text');
    questiontTxt.textContent = question;
}
getquote();