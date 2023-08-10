const ingresos = Number(prompt('Introducir ingresos a repartir'))

const gastosNecesarios = ingresos * 0.5;
const gastosOpcionales = ingresos * 0.3;
const inversiones = ingresos * 0.2;

alert('Deberias destinar $' +gastosNecesarios + ' a los gastos necesarios, $' +gastosOpcionales + ' a los gastos opcionales y $' + inversiones + ' a tus inversiones.')