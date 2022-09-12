const fetchMe = document.getElementById('fetchMe')

// Fetch API
async function fetchData(){
    const response = await fetch("https://dummyjson.com/products/4")
    const data = await response.json()
    console.log(data.results);
}
   