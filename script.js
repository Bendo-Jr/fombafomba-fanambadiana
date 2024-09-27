window.addEventListener("scroll", () =>{
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

let fanazavana = document.getElementById('monButton');
fanazavana.addEventListener('click', (event) => {
    window.location.href = "https://www.meer.com/fr/21339-le-mariage-sakalava"
    console.log("efa nikitika fanazavana aho")
})