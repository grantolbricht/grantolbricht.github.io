const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);

const questionTxt = document.querySelector('#js-quote-text');

let answer = '';

// this is the endpoint for the API that we want to get a reponse from
const endpoint = 'https://icanhazdadjoke.com/';

async function getQuote() {
   // try -> tries something; if it returns an error, it puts us into the catch block
        try {
            const response = await fetch(endpoint, {
                headers: {
                    'Accept': 'application/json'
                }
            });
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        console.log = ('API Reponse:',json);
        
        // JSON is a dictionary, which is like a list; we call specific pieces of information out based on the 'key' associated with that value
        displayQuote(json['joke']);
        answer = json['answer'];
        answerTxt.textContent = '';
    }
    catch(err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

// this function shows the question
function displayQuote(question) {
    questionTxt.textContent = question;
}

// this function shows the answer
function displayAnswer() {
    answerTxt.textContent = answer;
}

// we run getQuote once when the script first loads to populate a question
// when the page is loading
getQuote();
