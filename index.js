//FECHA JS

const today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1 ;
let year = today.getFullYear();

let fulldate = `${day}/${month}/${year}`;

if(document.getElementById("full-date")){
    document.getElementById("full-date").innerHTML = `${fulldate}`;
}

async function get(){
    const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    const data = await res.json();
    const coctel = (data.drinks[0].strDrink);
    const category = (data.drinks[0].strGlass);
    const recipe = (data.drinks[0].strInstructions);
    const image = (data.drinks[0].strDrinkThumb);
    document.querySelector('#coctel').innerHTML= coctel;
    document.querySelector('#recipe').innerHTML= recipe;
    document.querySelector('#category').innerHTML= category;
    document.getElementById('image').src = image;
}
get()

async function recentsProjects(){
    const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    const data = await res.json();
    const coctel = (data.drinks[0].strDrink);
    const category = (data.drinks[0].strGlass);
    const image = (data.drinks[0].strDrinkThumb)
    document.querySelector('#coctel1').innerHTML= coctel;
    document.querySelector('#category1').innerHTML= category;
    document.getElementById('image1').src = image;
    const coctel2 = (data.drinks[1].strDrink);
    const category2 = (data.drinks[1].strGlass);
    const image2 = (data.drinks[1].strDrinkThumb)
    document.querySelector('#coctel2').innerHTML= coctel2;
    document.querySelector('#category2').innerHTML= category2;
    document.getElementById('image2').src = image2;
    const coctel3 = (data.drinks[2].strDrink);
    const category3 = (data.drinks[2].strGlass);
    const image3 = (data.drinks[2].strDrinkThumb)
    document.querySelector('#coctel3').innerHTML= coctel3;
    document.querySelector('#category3').innerHTML= category3;
    document.getElementById('image3').src = image3;
}
recentsProjects()

async function otherProjects(){
    const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    const data = await res.json();
    const coctel = (data.drinks[3].strDrink);
    const category = (data.drinks[3].strGlass);
    const image = (data.drinks[3].strDrinkThumb)
    document.querySelector('#coctel4').innerHTML= coctel;
    document.querySelector('#category4').innerHTML= category;
    document.getElementById('image4').src = image;
    const coctel2 = (data.drinks[4].strDrink);
    const category2 = (data.drinks[4].strGlass);
    const image2 = (data.drinks[4].strDrinkThumb)
    document.querySelector('#coctel5').innerHTML= coctel2;
    document.querySelector('#category5').innerHTML= category2;
    document.getElementById('image5').src = image2;
    const coctel3 = (data.drinks[5].strDrink);
    const category3 = (data.drinks[5].strGlass);
    const image3 = (data.drinks[5].strDrinkThumb)
    document.querySelector('#coctel6').innerHTML= coctel3;
    document.querySelector('#category6').innerHTML= category3;
    document.getElementById('image6').src = image3;

}
otherProjects()

async function projectDos(){
    const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    const data = await res.json();
    const coctel = (data.drinks[1].strDrink);
    const category = (data.drinks[1].strGlass);
    const recipe = (data.drinks[1].strInstructions);
    const image = (data.drinks[1].strDrinkThumb);
    document.querySelector('#prodoscoctel').innerHTML= coctel;
    document.querySelector('#prodosreci').innerHTML= recipe;
    document.querySelector('#prodosglass').innerHTML= category;
    document.getElementById('prodosima').src = image;
}
projectDos()

async function projectTres(){
    const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    const data = await res.json();
    const coctel = (data.drinks[2].strDrink);
    const category = (data.drinks[2].strGlass);
    const recipe = (data.drinks[2].strInstructions);
    const image = (data.drinks[2].strDrinkThumb);
    document.querySelector('#prodoscoctel2').innerHTML = coctel;
    document.querySelector('#prodosreci2').innerHTML= recipe;
    document.querySelector('#prodosglass2').innerHTML= category;
    document.getElementById('prodosima2').src = image;
}
projectTres()

/*const email = document.getElementById("email")
const form = document.getElementById("form")
const paragraph = document.getElementById("error-email")

form.addEventListener("submit", e =>{
    e.preventDefault()
    let error = ""
    let enter = false
    let regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if(!regExEmail.test(email.value)){
        error += `El mail no es válido`
        enter = true
    } 
    if(enter){
        paragraph.innerHTML = error
    }
   
}
)*/
/*const paragraph = document.getElementById("error-email")
function validarCorreo(email){
    let regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let validacion = regExEmail.test(email);
    if (validacion = false){
        paragraph = `Upps mail trucho`
    }
}*/