let searchButton = document.getElementById("searchButton")
let searchBox = document.getElementById("searchBox")
searchButton.addEventListener("click", function (event) { // When search button is clicked
    event.preventDefault()

    window.location.replace("https://www.google.com/search?q=" + searchBox.value) // Google search
})
const clock = document.getElementById('clock');

const setClock = () => {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  clock.innerText = document.title = hours + ":" + minutes + ":" + seconds
}

setClock();
setInterval(setClock, 1000);//async is used with clock fn to works