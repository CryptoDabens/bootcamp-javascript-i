const d = document;

export function digitalClock(clock, btnPlay , btnStop) {
    let clockTempo;
   

    // Delegación de eventos
    d.addEventListener("click", (e) => {
        // Si el evento lo originó el botón de iniciar reloj
        if (e.target.matches(btnPlay)) {
            clockTempo = setInterval(() => {
                // Obtener la hora actual
                let clockHour = new Date().toLocaleTimeString();

                // Mostrarla dentro de un h3 en el contenedor del reloj
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 1000);

            // Deshabilitar el botón para evitar múltiples intervalos
            e.target.disabled = true;
        }

        // Si el evento lo originó el botón de detener reloj
        if (e.target.matches(btnStop)) {
            // Limpiar el intervalo
            clearInterval(clockTempo);

            // Vaciar el contenido del reloj
            d.querySelector(clock).innerHTML = null;

            // Volver a habilitar el botón de iniciar
            d.querySelector(btnPlay).disabled = false;
        }


    });    
}


export function alarm (sound,btnPlay, btnstop){
    const d = document;
    let alarmTempo ;

    const $alarm = d.createElement("audio")
    $alarm.src = sound;

    // Delegación de eventos
    d.addEventListener("click", (e) => {

        // Iniciar alarma
        if (e.target.matches(btnPlay)) {

            // Ejecutar la alarma después de 2 segundos
            alarmTempo = setTimeout(() => {
                $alarm.play();
            }, 2000); // puedes ajustar el retardo si lo deseas

            // Deshabilitar el botón para evitar múltiples activaciones
            e.target.disabled = true;
        }

        // Si el evento lo originó el botón de detener alarma
        if (e.target.matches(btnstop)) {
            // Limpiar el timeout
            clearTimeout(alarmTempo);

            // Detener el sonido
            $alarm.pause();

            // Reiniciar el audio
            $alarm.currentTime = 0;

            // Habilitar nuevamente el botón de activar
            d.querySelector(btnPlay).disabled = false;
        }
    });
    }





