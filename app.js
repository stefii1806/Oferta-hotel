(function () {
    //OBJETO HOTEL
    var hotel = {
        nombre: 'Hotel Parque',
        precioHab: 2240, //pesos
        descuento: 20, //porcentaje
        precioOferta: function () {
            var oferta = this.precioHab * ((100 - this.descuento) / 100);
            return oferta;
        }
    }

    //NOMBRE, PRECIO NORMAL DE LA HABITACIÓN, PRECIO DE OFERTA > RELLENAR HTML
    var nombreHotel, precioHab, precioOferta;

    nombreHotel = document.getElementById('nombreHotel');
    precioHab = document.getElementById('precioHab');
    precioOferta = document.getElementById('precioOferta');

    nombreHotel.textContent = hotel.nombre;
    precioHab.textContent = '$ ' + hotel.precioHab.toFixed(2) + '.-';
    precioOferta.textContent = '$ ' + hotel.precioOferta() + '.-';


    //CALCULAR FECHA FIN

    var vencimiento; //Message diplayed to users
    var hoy; //today's date
    var fin; //element that shows the msg about the offer ending

    function expiracion(hoy) {
        var proximaSemana, dia, fecha, mes, ano, dias, meses;

        //SIETE MESES EN MILISEGUNDOS
        proximaSemana = new Date(hoy.getTime() + 7 * 24 * 60 * 60 * 1000);

        //ARRAYS DE DÍAS/MESES
        dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

        meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

        //FORMAR FECHA 
        dia= dias[proximaSemana.getDay()];
        fecha = proximaSemana.getDate();
        mes = meses[proximaSemana.getMonth()];
        ano = proximaSemana.getFullYear();

        //MENSAJE
        vencimiento = 'La oferta termina el próximo ';
        vencimiento += dia + ' ' + fecha + ' de ' + mes + ' de ' + ano + '.';
        return vencimiento;
    }
    hoy = new Date();
    fin = document.getElementById('finOferta');
    fin.innerHTML = (expiracion(hoy)).toUpperCase();


}());
