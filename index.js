const today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1 ;
let year = today.getFullYear();

let fulldate = `${day}/${month}/${year}`;

document.getElementById("full-date").innerHTML = `${fulldate}`;

/*const email = document.getElementById("email")
const form = document.getElementById("form")
const paragraph = document.getElementById("error-email")

form.addEventListener("submit", e =>{
    e.preventDefault()
    let error = ""
    let enter = false
    let regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if(!regExEmail.test(email.value)){
        error += `Upps el email no es válido!`
        enter = true
    }
    if(enter){
        paragraph.innerHTML = error
    }
}
)
const paragraph = document.getElementById("error-email")
function validarCorreo(email){
    let regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let validacion = regExEmail.test(email);
    if (validacion = false){
        paragraph = `Upps mail trucho`
    }
}*/

async function get(){
    const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
    const data = await res.json();
    return data.drinks[0].strDrinkThumb
}
document.getElementById("img1").innerHTML = get();