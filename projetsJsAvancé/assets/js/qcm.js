// let input = document.querySelectorAll("input");

let btn = document.getElementById("btn");



btn.addEventListener('click', (event) => {
    let input = document.querySelectorAll('input[name="vehicle"]:checked');
    let valeurs = [];
    input.forEach((checkbox) => {
        valeurs.push(checkbox.checked);
    });
    console.log(valeurs)

})

