groupStage = document.querySelector('.group-stage-section');
startBtn = document.querySelector('.startButton');
grupo = document.querySelectorAll('.countrys-container');
groupBtn = document.querySelector('.group-stage-button');
knockoutStage = document.querySelector('.knockout-section');


startBtn.addEventListener('click', () => {
    groupStage.scrollIntoView({
    behavior: "smooth", block: "end"
    }
    )
});

groupBtn.addEventListener('click', () => {
    knockoutStage.scrollIntoView({
    behavior: "smooth", block: "end"
    }
    )
});

groupBtn.addEventListener('click', obtenerPaises);

grupo.forEach(grupo => {
    Sortable.create(grupo, {});
});

function ordenarPaises() {
    
}




