//FECHA JS

const today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1 ;
let year = today.getFullYear();

let fulldate = `${day}/${month}/${year}`;

if(document.getElementById("full-date")){
    document.getElementById("full-date").innerHTML = `${fulldate}`;
}

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