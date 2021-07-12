// API informations.
const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
// Sélection des Eléments.
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
/* Appel de la fonction showMovies qui demande les datas des films à l'API via fetch
Ensuite insertion des données reçues dans le DOM */
showMovies(apiUrl);
function showMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
    data.results.forEach(element => {
      // Creation des éléments pour les datas et insertion dans le HTML. 
        const el = document.createElement('div');
        const image = document.createElement('img');
        const text = document.createElement('h2');

        text.innerHTML = `${element.title}`;
        if (element.poster_path!=null) {
            image.src = IMGPATH + element.poster_path;
        } else {
            image.src = "popcornx1.jpg";
        }
        
        el.appendChild(image);
        el.appendChild(text);
        main.appendChild(el);
    }); 
});
}

// w1280null

// Empêcher la soumission du formulaire si input est vide.
form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';
     
    const searchTerm = search.value;
/* Ajout de la valeur saisie dans l'URL de recherche de l'API,
    afin d'obtenir les films désirés. */
    if (searchTerm) {
        showMovies(SEARCHAPI + searchTerm);
        search.value = "";
    } else{
        main.innerHTML = '<h1>Pas de films</h1>';
    }
});