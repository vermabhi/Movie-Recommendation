const apiKey = "api_key=f9826ca3e50e225b2c865aad0c6d12e9";
const baseUrl = "https://api.themoviedb.org/3";
const apiUrl = baseUrl + "/discover/movie?sort_by=popularity.desc&" + apiKey;
const imgUrl = "https://image.tmdb.org/t/p/w500";
const searchUrl = baseUrl + "/search/movie?" + apiKey;

const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const tagsEl = document.getElementById("tags");

let selectedGenre = [];
setGenre();
function setGenre() {
  tagsEl.innerHTML = "";
  genres.forEach((genre) => {
    const d = document.createElement("div");
    d.classList.add("tag");
    d.id = genre.id;
    d.innerText = genre.name;
    d.addEventListener("click", () => {
      d.classList.toggle("change");
      if (selectedGenre.length == 0) {
        selectedGenre.push(genre.id);
      } else {
        if (selectedGenre.includes(genre.id)) {
          selectedGenre.forEach((id, idx) => {
            if (id == genre.id) {
              selectedGenre.splice(idx, 1);
            }
          });
        } else {
          selectedGenre.push(genre.id);
        }
      }
      getMovies(apiUrl + "&with_genres=" + selectedGenre.join(","));
    });
    tagsEl.append(d);
  });
}

getMovies(apiUrl);
function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.results.length !== 0) {
        showMovies(data.results);
      } else {
        main.innerHTML = `<h1 class='no'> No Results Found</h1>`;
      }
    });
}

function showMovies(data) {
  main.innerHTML = "";
  data.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
        <img src="${
          poster_path
            ? imgUrl + poster_path
            : "data:image/png;base64,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/fXe7/vvf/97c/fdd29uuummzdVXX/23mn/55ZfNl19+efLe9TmdHsXlscce21x77bUnw/7uu+82r7322k4Elc2zzz67qV7Y9/Hzzz9vXnrppZ0vO1Yv7Pzg8CcQ1izAhx56aFONNJfJUr614X/xxReb9957b1X811xzzebhhx8+keAkwKUX/vXXXydCfPfdd1cL8f777z+R1a6aS1zvv//+QUJcNcjL8ElPPfXUCfPpsVZYt9xyy+bRRx89kf++j13COmYv7Ftr4vMJ63+pVYPefvvtW4UyD7jkUjOXt99+e2vu9S39yCOPbG688cbV/fH9999v3nnnnU01/7ZHSbAEe+WVV656799+++1EWlX3RX+UyGumPGezVlj1BfDAAw+s5jpnuU1Yx+yFi57nND7C2mw2S839008/bT7//POTGUnNqEpmd91118lybnrUMvGTTz7ZfPjhh6f2yyjCes0333xzskSrDai+zWuZWP87zb7WyLBqqY1qPrP68ccfN59++ulJzbWcrfctoc1nCjWuN998c6cMkzeAYlkyr9nM/LFWWPXa4luPyqK+QNbuAqgvhQ8++GAR37F6ITmrfWtvL6z61nviiScu7a+oBq0NvmY4S/t8xqarb9Q33nhjUQAljAcffPCSVOr9qplLVuPj3nvv3dS/SUC1v6yWnEuzoar58ccfvyTPbYKr/Vq1AU77Y+q5JeJadl7ER/ErNvOl4L5LwvlSsjIrVmedlR6rFy5ihtvG1F5YJYn77rvv0vR/1wykNoinn356c8MNN5xwrRlT7YT/+OOP/x/nJ5988mTmNH1T7xJFiaUae5pp1Uzs9ddfX5TbvOaaWdXO5NN2qtfssPbPTTOt2p/11ltvnezov2iPmnXWUnBpX+HaGdbzzz9/6cugZlY1Iz0rq2P1wkXLb9d42gurZle33nrrJanUkqr282x71CyrllrTo0RUM7L5o2Y2dYSqlmb1qKVCSaI2mtMedVSrZgfTUua0jaWEWe8/ibBkuW1ZWs+bbzDbJLurYS7nv1eOtb9wEnOJvI4QTrPWNcKqmVnlO+VWy8H//Oc/Zxr2MXvhTIUFvri9sOobuZp0ksRpy7B5trVR1Exom7DGmduajaXeby7QJbGMUlsjwnrfsZ5a9tZS9qI8Skol5engRs0i68un9k/uI6zKtWaj0876Ohq868DKLobH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"
        }" alt="${title}">


            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>

            <div class="overview">
                ${overview}
            </div>
        `;
    main.appendChild(movieEl);
  });
}

function getColor(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  selectedGenre.forEach((genre) => {
    const d = document.getElementById(genre);
    d.classList.toggle("change");
  });
  const searchItem = search.value;
  if (searchItem) {
    getMovies(searchUrl + "&query=" + searchItem);
  } else {
    getMovies(apiUrl);
  }
});
