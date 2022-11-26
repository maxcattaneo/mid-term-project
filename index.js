
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

function validarCorreo(valor){
    let regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let error = "";
    let paragraph = document.getElementById("error-email");
    if(!regExEmail.test(valor)){
        error += `Upss el email no es válido, ingrese un formato de email válido.`
    }
    if(error.length > 0 ){
        paragraph.innerHTML = error;
    }
}