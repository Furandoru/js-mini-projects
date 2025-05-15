const movies = ["Overlord", "Shadow", "The Witcher", "Attack on Titan", "Death Note"];

// Function to display the list of movies
// This function creates a list item for each movie and appends it to the unordered list  

function displayMovies() {
  const list = document.getElementById("movieList");
  list.innerHTML = "";

  for (let movie of movies) {
    const li = document.createElement("li");
    li.textContent = movie;
    list.appendChild(li);
  }
}

function addMovie() {
  const input = document.getElementById("movieInput");
  const newMovie = input.value.trim();

  if (newMovie) {
    movies.push(newMovie);
    input.value = "";
    displayMovies();
  }
}

// Add keyboard support for the "Enter" key
document.getElementById("movieInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addMovie();
  }
});

displayMovies(); // Show initial movies

