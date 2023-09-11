const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const HOLLIDAYSEGAR = document.getElementById('calculo1');
const SC = document.getElementById('calculo2');
const SC1 = document.getElementById('sc1');
const SC2 = document.getElementById('sc2');

function calcFlujo(peso){
    let resto = peso;
    let flujo = 0;
    if (resto > 20){
        let aux = resto - 20;
        flujo += aux * 1;
        resto -= aux;
    } 
    if (resto > 10){
        let aux = resto - 10;
        flujo += aux * 2;
        resto -= aux;
    }
    flujo += resto * 4;
    return flujo;
}

function calcSuperficieCorporal(peso){
    peso = parseFloat(peso);
    let calculo = ((peso * 4) + 7) / (peso + 90);
    return calculo;
}

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value;
    // Validamos que se cargue un dato:
    if (DATO > 0 && DATO <= 30){
        ERROR.style.display = 'none';
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo * 1.5;

        HOLLIDAYSEGAR.innerHTML = 'Holliday-Segar';
        FLU.innerHTML = 'Mantenimiento = ' + flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 = ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else if (DATO > 30){
        ERROR.style.display = 'none';

        document.getElementById('resultado1').style.display = 'none';
        document.getElementById('resultado2').style.display = 'none';

        let superficieCorporal = calcSuperficieCorporal(DATO);
        let superficieCorp1500 = (superficieCorporal * 1500).toFixed(2);
        let superficieCorp2000 = (superficieCorporal * 2000).toFixed(2);

        SC.innerHTML = 'Superficie Corporal';
        SC1.innerHTML = 'Superficie Corporal x 1500 = ' + superficieCorp1500;
        SC2.innerHTML = 'Superficie Corporal x 2000 = ' + superficieCorp2000;
        
        SC.style.display = 'block';
        FLU.style.display = 'block';
        MAN.style.display = 'block';

        document.getElementById('resultado2').style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
});
