function showAlert() {
  alert("You clicked I'm Feeling Lucky!");
}



//get form element
let searchForm = document.getElementById("search");

// Take over form submission
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();        // Stops form from doing what it usually does
  const inputs = document.getElementById("q");
  console.log(inputs.value)
  if (inputs.value === "advanced search") {
    window.location.href = "advsearch.html";
  }
  else if (inputs.value === "google images") {
    window.location.href = "images.html";
  }
  else if (inputs.value === "") {
    alert("Please enter something to search for")
  }
  else {
    window.location.href = "https://www.google.com/search?q=" + inputs.value;
  }
});