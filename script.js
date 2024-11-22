const nabídka = ["CPU", "GPU", "RAM"];
const košík = [];


function vypis_pole_do_elementu(array, output) {
    const out_value = document.getElementById(output);
    for (let i = 0; i < array.length; i++) {
        out_value.innerHTML += i + 1 + ". " + array[i] + "<br>";
    }
}

vypis_pole_do_elementu(nabídka,"content");
