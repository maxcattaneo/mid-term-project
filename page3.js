//FECHA JS

const today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1 ;
let year = today.getFullYear();

let fulldate = `${day}/${month}/${year}`;

if(document.getElementById("full-date")){
    document.getElementById("full-date").innerHTML = `${fulldate}`;
}

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

function validarCorreo(valor){
    let regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let error = "";
    let paragraph = document.getElementById("error-email");
    if(!regExEmail.test(valor)){
        error += `Upss el email no es válido, ingrese un formato de email válido.`
    }
    if(regExEmail.test(valor)){
        error += `Correcto.`
    }
    if(error.length > 0 ){
        paragraph.innerHTML = error;
    }
}

