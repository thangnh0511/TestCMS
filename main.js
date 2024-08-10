import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))


async function fetchDataFromAPI() {
  const cards = await fetch('/api/notion')
    .then((res) => res.json().then((data) => data.results));
    document.querySelector('.card-container').innerHTML = cards.map((card) => `
    <article class="card">
        <img
          src="${card.properties.Image.url}"
          alt="${card.properties.Name.title[0].plain_text}"
          class="card__image"
        >
        <h2 class="card__heading">${card.properties.Name.title[0].plain_text}</h2>
        <div class="card_content">
          <p>${card.properties.Content.rich_text[0].plain_text}</p>
        </div>
        <a href="${card.properties.Link.url}" class="card__btn">${card.properties.Btn_text.rich_text[0].plain_text}</a>
      </article>
    `).join('');
}

fetchDataFromAPI();