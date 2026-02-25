const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

function generateJoke() {
   const config = {
     headers: {
       Accept: 'application/json',
     },
   };

   fetch('https://icanhazdadjoke.com', config)
     .then((res) => res.json())
     .then((data) => {
       jokeEl.innerHTML = data.joke;
     });
 }

generateJoke();

//Event, Listeners, Handlers
jokeBtn.addEventListener('click', generateJoke);

// Refactor With Async Await
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const res = await fetch('https://icanhazdadjoke.com', config);
  const data = await res.json();

  jokeEl.textContent = data.joke;
}