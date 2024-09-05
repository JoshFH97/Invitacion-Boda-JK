function getRemainingTime(et) {
    // Obtiene la fecha y hora actual
    var now = new Date();
    // Convierte la fecha y hora objetivo (et) en un objeto Date
    var endDate = new Date(et);

    // Calcula la diferencia en milisegundos entre la fecha objetivo y la fecha actual
    var dt = Date.parse(endDate) - Date.parse(now);

    // Si la diferencia es negativa, significa que la fecha objetivo ya ha pasado
    if (dt < 0) {
        // Retorna un objeto con todos los valores en 0
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    // Calcula los días restantes
    var days = Math.floor(dt / (1000 * 60 * 60 * 24));
    // Calcula las horas restantes después de calcular los días
    var hours = Math.floor((dt % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // Calcula los minutos restantes después de calcular las horas
    var minutes = Math.floor((dt % (1000 * 60 * 60)) / (1000 * 60));
    // Calcula los segundos restantes después de calcular los minutos
    var seconds = Math.floor((dt % (1000 * 60)) / 1000);

    // Retorna un objeto con los valores calculados
    return { days, hours, minutes, seconds };
}

function initRemainingTime(id, endTime) {
    // Selecciona el elemento HTML donde se mostrará el tiempo restante usando su ID
    var clock = document.getElementById(id);
    // Busca dentro del elemento clock las partes específicas donde se mostrará cada unidad de tiempo
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateRemainingTime() {
        // Llama a la función getRemainingTime para obtener el tiempo restante hasta endTime
        var t = getRemainingTime(endTime);

        // Actualiza el contenido de las etiquetas HTML con el tiempo restante
        daysSpan.innerHTML = t.days;  // Mostrar días
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);  // Formato de dos dígitos
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        // Si el tiempo restante ha llegado a cero, detiene la actualización
        if (t.days <= 0 && t.hours <= 0 && t.minutes <= 0 && t.seconds <= 0) {
            clearInterval(timeInterval);
        }
    }

    // Llama a la función updateRemainingTime inmediatamente para mostrar el tiempo restante al cargar la página
    updateRemainingTime();
    // Configura un intervalo que llamará a updateRemainingTime cada segundo (1000 ms) para actualizar el tiempo restante en la página
    var timeInterval = setInterval(updateRemainingTime, 1000);
}

// Establece la fecha y hora objetivo: 15 de diciembre de 2024 a las 16:00
var timeForBigDay = '2024-12-15T16:00:00';
// Inicia la función de cuenta regresiva vinculada al elemento HTML con ID 'reminder-clock'
initRemainingTime('reminder-clock', timeForBigDay);






// function getRemainingTime(et) {
//     // Obtiene la fecha y hora actual
//     var now = new Date();
//     // Convierte la fecha y hora objetivo (et) en un objeto Date
//     var endDate = new Date(et);

//     // Calcula la diferencia en milisegundos entre la fecha objetivo y la fecha actual
//     var dt = Date.parse(endDate) - Date.parse(now);

//     // Si la diferencia es negativa, significa que la fecha objetivo ya ha pasado
//     if (dt < 0) {
//         // Retorna un objeto con todos los valores en 0
//         return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
//     }

//     // Calcula los segundos restantes, utilizando el operador módulo (%) para obtener el resto de dividir los milisegundos por el total de milisegundos en un minuto
//     var seconds = Math.floor((dt / 1000) % 60);
//     // Calcula los minutos restantes de manera similar, dividiendo primero los milisegundos entre 1000 (para obtener segundos), luego entre 60 (para obtener minutos), y usando el módulo para los minutos restantes
//     var minutes = Math.floor((dt / 1000 / 60) % 60);
//     // Calcula las horas restantes, dividiendo entre 1000 * 60 * 60 (milisegundos en una hora) y aplicando el módulo para obtener las horas restantes dentro de un día
//     var hours = Math.floor((dt / (1000 * 60 * 60)) % 24);
//     // Calcula los días restantes, dividiendo entre 1000 * 60 * 60 * 24 (milisegundos en un día)
//     var days = Math.floor(dt / (1000 * 60 * 60 * 24));

//     // Calcula los meses restantes de manera aproximada, considerando solo la diferencia en años y meses
//     var months = (endDate.getFullYear() - now.getFullYear()) * 12 + (endDate.getMonth() - now.getMonth());

//     // Retorna un objeto con los valores calculados
//     return { months, days, hours, minutes, seconds };
// }

// function initRemainingTime(id, endTime) {
//     // Selecciona el elemento HTML donde se mostrará el tiempo restante usando su ID
//     var clock = document.getElementById(id);
//     // Busca dentro del elemento clock las partes específicas donde se mostrará cada unidad de tiempo
//     var monthsSpan = clock.querySelector('.months');
//     var daysSpan = clock.querySelector('.days');
//     var hoursSpan = clock.querySelector('.hours');
//     var minutesSpan = clock.querySelector('.minutes');
//     var secondsSpan = clock.querySelector('.seconds');

//     function updateRemainingTime() {
//         // Llama a la función getRemainingTime para obtener el tiempo restante hasta endTime
//         var t = getRemainingTime(endTime);
//         // Actualiza el contenido de las etiquetas HTML con el tiempo restante, formateando los valores con dos dígitos
//         monthsSpan.innerHTML = ('0' + t.months).slice(-2);
//         daysSpan.innerHTML = ('0' + t.days).slice(-2);
//         hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//         minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//         secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

//         // Si el tiempo restante ha llegado a cero en todas las unidades, detiene la actualización
//         if (t.months <= 0 && t.days <= 0 && t.hours <= 0 && t.minutes <= 0 && t.seconds <= 0) {
//             // Detiene el intervalo para evitar que siga actualizando el tiempo después de llegar a cero
//             clearInterval(timeInterval);
//         }
//     }

//     // Llama a la función updateRemainingTime inmediatamente para mostrar el tiempo restante al cargar la página
//     updateRemainingTime();
//     // Configura un intervalo que llamará a updateRemainingTime cada segundo (1000 ms) para actualizar el tiempo restante en la página
//     var timeInterval = setInterval(updateRemainingTime, 1000);
// }

// // Establece la fecha y hora objetivo: 15 de diciembre de 2024 a las 16:00
// var timeForBigDay = '2024-12-15T16:00:00';
// // Inicia la función de cuenta regresiva vinculada al elemento HTML con ID 'reminder-clock'
// initRemainingTime('reminder-clock', timeForBigDay);
