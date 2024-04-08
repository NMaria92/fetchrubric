
// Data hentes (via fetch()) her fra: https://mahauser2.github.io/dragonsData/dragons.json

// Link til DOM manipualtion cheatsheet på side 9 (Som jeg har delt et par gange med jer - kig i holdnotesbog og gem det/bookmark!): https://ucndk.sharepoint.com/:b:/r/sites/Section_0210045/Delte%20dokumenter/Modul%2004/Brugergr%C3%A6nseflader_frontend/2%20-%20JS1/js-cheatsheet.pdf?csf=1&web=1&e=Gy7o4Y 

// Fetch data og log det i første omgang
const url = "https://mahauser2.github.io/dragonsData/dragons.json";
const wrapperEl = document.querySelector(".wrapper");

// fetch(url)
// .then(res => res.json())
// .then(data => renderDragons(data))
// .catch(err => console.log("Der er sket en fejl", err));

fetch(url)
.then(res => res.json())
.then(data => renderDragonsInnerhtml(data))
.catch(err => console.log("Der er sket en fejl", err));

// For hver drage, anvend document.createElement() og andre DOM manipulation-metoder til at skabe følgende SIMPLE struktur for hver drage:
  // <article>
  //   <h2>Sizzlepuff</h2>
  //   <div>
  //     <img src="https://picsum.photos/id/251/400/300">     
  //   </div>
  // </article>
    // Altså: lav en funktion der looper igennem dragons med et foreach loop.
function renderDragons(dragons){
    dragons.forEach(dragon => {
// opret article 
    const newArticle = document.createElement("article");
// opret h2
// sæt tekst ind i h2 
    const newH2 = document.createElement("h2");
    newH2.textContent = dragon.name;
// opret div 
    const newDiv = document.createElement("div");
// opret img
// sæt img src attribute 
    const newImg = document.createElement("img");
    newImg.src = dragon.image;
// Append alt til DOM
        newArticle.append(newH2, newDiv);
        newDiv.append(newImg);
        wrapperEl.append(newArticle);
    }) 
    }



// Udkommentér nu ovenstående - vi skal prøve at anvende .innerHTML propertien istedet og lave en noget mere kompleks struktur - se den udkommenteret i HTML:
function renderDragonsInnerhtml(dragons){
    // filtrer dragerne inden de vises
const filteredDragons = dragons.filter(dragon => dragon.attackValue > 18)

    filteredDragonsdragons.forEach(dragon => {
        wrapperEl.innerHTML += `
        <article class="dragon">
            <h2>${dragon.name}</h2>
            <div class="dragoncontent">
              <img src=${dragon.image} alt="${dragon.name}">
              <div class="dragonText">
                <p class="attack">Damage: <span>${dragon.attackValue}</span></p>
                <p class="hits">Hitpoints: <span>${dragon.hitPoints}</span></p>
                <p class="size">Size: <span>${dragon.size}</span></p>
                <p class="description">Description: <span>${dragon.description}</span></p>
              </div>
            </div>
          </article>
        ` 
    })
}



// Øvelser med filter
// filter med numre

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filteredNumbers = numbers.filter(number => number === 8)

// filter med navne 
const names = ["Anders", "Robert", "Ib", "Per", "ANNELoTTE", "FLIPdYt"];

// const filteredNames = names.filter(name => name.length > 3)
const filteredNames = names.filter(name => name.toLocaleLowerCase().includes("e"))


// Start med at prøve at anvende .filter() til at logge:
//  - alle drager med hitPoints over 300
//  - alle small drager
//  - alle drager med description over 100 tegn



// Prøv dernæst at anvende filter til at gemme alle drager med over 18 i attack OG generér en article per drage i det nye filtrerede array - du kan anvende min "dummy-struktur" fra html

// Kan du også lave en select ovenover <div class="wrapper">... med options for hver size og filtrere indholdet efter hvad brugeren vælger, se her: https://watch.screencastify.com/v/H3baQi6EhPRdH6PeCjto
