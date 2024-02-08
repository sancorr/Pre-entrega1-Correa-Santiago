// SIMULADOR DE TIENDA VIRTUAL = VENTA DE EQUIPOS Y PRÉSTAMOS
let usuario = "Tutor/a";
let inicioCorrecto = false;


let ingresoUsuario = prompt("Ingresa tu nombre de usuario/a");

if (ingresoUsuario == usuario) {
  alert("Hey, bienvenida/o: " + usuario);
  for (let i = 1; i <= 3; i++) {
    let pass = "53920";
    let ingresoPass = prompt( "Muy bien " + usuario + ", ahora ingresa tu contraseña. Tenés 3 intentos"
    );
  
    if (ingresoPass == pass) {
      alert("Hey, bienvenida/o: " + usuario + " ahora vas a poder operar");
      inicioCorrecto = true;
      break;
    } else {
      alert("Contraseña incorrecta. ¿No leiste la documentación?");
    }
  }
} else {
  alert("Usuario no encontrado, volvé a intentarlo con otro nombre");
}

if (inicioCorrecto){
  let saldo = 250000
  let opciones = prompt ("Selecciona alguna de las siguientes opciones: \n1 - Saldo en tu cuenta \n2 - Equipos disponibles \n3 - Préstamos con interés \nPresiona X para salir");
  function calculo (prestamo, num2) {
    return prestamo * num2;
  }

  while (opciones != "x" && opciones != "X") {

    switch (opciones) {
      case "1": 
       alert ("Tu dinero disponible en cuenta es: $" + saldo);
       break;
      case "2":
        let equipos =  prompt ("Éste es nuestro stock, seleccioná el que quieras para comprarlo: \nA - Samsung S24 Ultra $500,000 \nB - Iphone 15 $600,000 \nC - Moto G31 $190,000 \nD - Nokia 1100 $1500 ");
        if ((equipos == "A" || equipos == "a") && (saldo < 500000)){         
          alert ("No tenes dinero suficiente. Pedí un préstamo.");
          break; 
        } else if ((equipos == "A" || equipos == "a") && (saldo >= 500000)){
          saldo = saldo - 500000
          alert ("Felicidades! pudiste comprar tu Samsung S24 Ultra, tu saldo ahora es: $" + saldo);
          break;
        } else if ((equipos == "B" || equipos == "b") && (saldo < 600000)){
          alert ("No tenes dinero suficiente. Pedí un préstamo.");
          break;
        } else if ((equipos == "B" || equipos == "b") && (saldo >= 600000)){
          saldo = saldo - 600000
          alert ("Felicidades! pudiste comprar tu Iphone 15, tu saldo ahora es : $" + saldo);
          break;
        } else if ((equipos == "C" || equipos == "c") && (saldo < 190000)){
          alert ("No tenes dinero suficiente. Pedí un préstamo.");
          break;
        } else if ((equipos == "C" || equipos == "c") && (saldo >= 190000)){
          saldo = saldo - 190000
          alert ("Felicidades! pudiste comprar tu Moto G31, tu saldo ahora es : $" + saldo);
          break;
        }  else if (equipos == "D" || equipos == "d") {
          alert ("Este no te lo cobro, el juego de la viborita es impagable");
          break;
        }
      case "3": 
        let prestamo = parseFloat (prompt ("ingresa el monto que queres recibir y se acreditará a tu saldo. Recordá que nos vas a devolver ese monto más un 10% de interés"));
        //let interes =  prestamo * 0.1 ;
        calculo (prestamo, 0.1 )
        let interes = calculo (prestamo, 0.1) + prestamo;
        
        alert ("nos vas a devolver $" + interes);
        saldo = saldo + prestamo
        alert ("Tu saldo ahora es: $" + saldo);
        break;
    }
    opciones = prompt ("Selecciona alguna de las siguientes opciones: \n1 - Saldo en tu cuenta \n2 - Equipos disponibles \n3 - Préstamos con interés \nPresiona X para salir");
  }
}


