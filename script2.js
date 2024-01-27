function obtenerPaises() {
    const paises = [document.querySelectorAll('.country-flag')];
    paises.forEach(pais => {
    document.getElementById('1A').src = pais[0].src;
    document.getElementById('2B').src = pais[5].src;
    document.getElementById('1C').src = pais[8].src;
    document.getElementById('2D').src = pais[13].src;
    document.getElementById('1E').src = pais[16].src;
    document.getElementById('2F').src = pais[21].src;
    document.getElementById('1G').src = pais[24].src;
    document.getElementById('2H').src = pais[29].src;
    document.getElementById('1B').src = pais[4].src;
    document.getElementById('2A').src = pais[1].src;

    document.getElementById('1D').src = pais[12].src;
    document.getElementById('2C').src = pais[9].src;
    document.getElementById('1F').src = pais[20].src;
    document.getElementById('2E').src = pais[17].src;
    document.getElementById('1H').src = pais[28].src;
    document.getElementById('2G').src = pais[25].src;
    });
}



function obtenerPaisesEliminacion() {
paisesEliminacion = document.querySelectorAll('.country-flag2');
console.log(paisesEliminacion);
};

