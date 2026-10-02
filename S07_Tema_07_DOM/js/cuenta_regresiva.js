const d = document;

export default function countDown(id, limitDate, finalMessage){
    // Accede al elemento del DOM usando el id
    const $countdown = d.getElementById(id);
  
    // Convierte la fecha límite en milisegundos
    const countDownDate = new Date(limitDate).getTime();

    // Reto: Programar el cálculo del tiempo restante y mostrarlo en pantalla, dentro de la función countDown.

    // Creamos el intervalo que se ejecuta cada segundo
    const countDownTempo = setInterval(() => {
    // Obtenemos la fecha actual
    let now = new Date().getTime();

    // Calculamos la diferencia entre la fecha límite y la actual
    let limitTime = countDownDate - now;
    
    // Convertimos la diferencia a días, horas, minutos y segundos
        let days = Math.floor(limitTime / (1000 * 60 * 60 * 24));
        let hours = ("0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
        let minutes = ("0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
        let seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);

        // Mostramos el mensaje en pantalla usando template strings
        $countdown.innerHTML = `<h3>Faltan ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`;

        // Validamos si ya se cumplió el tiempo
        if (limitTime < 0) {
            clearInterval(countDownTempo); // i. Detenemos el intervalo
            $countdown.innerHTML = `<h3>${finalMessage}</h3>`; // ii. Mostramos el mensaje final
        }
    }, 1000); // a. Intervalo de 1 segundos
}

