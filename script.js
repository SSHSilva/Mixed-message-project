const dailyMessage = ['Your present circumstances don\'t determine where you can go; they merely determine where you start.', 'The best way to predict your future is to create it.', 'It does not matter how slowly you go, as long as you do not stop.', 'Be not afraid of growing slowly; be afraid only of standing still.', 'When it is obvious that the goals cannot be reached, don\'t adjust the goals, adjust the action steps.', 'A journey of a thousand miles begins with a single step.'];


function randomMessage(array) {
 const message = array[Math.floor(Math.random() * array.length)];
 const dayOfTheWeek = new Date().toLocaleDateString('en-GB', {weekday: 'long'});
 return `Today is ${dayOfTheWeek}: "${message}"`;

}

const elementButton = document.querySelector('.js-message');
const dailyQuote = document.querySelector('.js-quote');

elementButton.addEventListener('click', () => {
  dailyQuote.innerHTML = randomMessage(dailyMessage);
});
