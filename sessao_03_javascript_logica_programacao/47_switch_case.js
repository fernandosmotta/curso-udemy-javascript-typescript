const data = new Date();
const diaSemana = data.getDay();

function dayWeek(dia) {
    let semana;
    
    switch(dia) {
        case 0:
            semana = 'Domingo';
            return semana;
        case 1:
            semana = 'Segunda-feira';
            return semana;
        case 2:
            semana = 'Terça-feira';
            return semana;
        case 3:
            semana = 'Quarta-feira';
            return semana;
        case 4:
            semana = 'Quinta-feira';
            return semana;
        case 5:
            semana = 'Sexta-feira';
            return semana;
        case 6:
            semana = 'Domingo';
            return semana;
        default:
            semana = '';
            return semana;
    }
}

console.log( diaSemana, dayWeek(diaSemana) );


/**
 switch(dia) {
        case 0:
            semana = 'Domingo';
            break;
        case 1:
            semana = 'Segunda-feira';
            break;
        case 2:
            semana = 'Terça-feira';
            break;
        case 3:
            semana = 'Quarta-feira';
            break;
        case 4:
            semana = 'Quinta-feira';
            break;
        case 5:
            semana = 'Sexta-feira';
            break;
        case 6:
            semana = 'Domingo';
            break;
    }
 */