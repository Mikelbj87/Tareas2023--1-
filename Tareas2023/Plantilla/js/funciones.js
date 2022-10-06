
// window.onload = function() {}
let numeroI = 0;
let resultadoI = 0;
let operacionI = 0;

operacion.addEventListener("change", calcular, false);

function calcular() {
  operacionI = operacion.value;
  alert(operacionI);
  numeroI = parseInt(dato.value);
  let numeroCalculado = 0;

/*
  //de decimal a:
  if (operacionI == 1) { //para transformar de decimal a binario
    numeroCalculado = numeroI.toString(2)
    resultado.value = numeroCalculado;
  }
  else if (operacionI == 2) { //para transformar de decimal en octal
    numeroCalculado = numeroI.toString(8);
    resultado.value = numeroCalculado;
  }
  else if (operacionI == 3) { //para transformar de decimal en hexadecimal
    numeroCalculado = numeroI.toString(16);
    resultado.value = numeroCalculado;
  }
  //para paser a decimal:
  else if (operacionI == 4) { //de binario
    numeroCalculado = parseInt(numeroI, 2)
    resultado.value = numeroCalculado;
  }
  else if (operacionI == 5) { // de octal
    numeroCalculado = parseInt(numeroI, 8)
    resultado.value = numeroCalculado;
  }
  else if (operacionI == 6) { //de hexadecimal
    numeroI = (dato.value); //obtengo el hexadecimal del input html dato sin convertir a entero
    numeroCalculado = parseInt(numeroI, 16)
    resultado.value = numeroCalculado;

  }
*/
//Lo mismo que en los if pero con un switch
    switch(operacionI) {
      case '1':
        numeroCalculado = numeroI.toString(2)
        resultado.value = numeroCalculado;
      break;
      case '2':
        numeroCalculado = numeroI.toString(8);
        resultado.value = numeroCalculado;
      break;
      case '3':
        numeroCalculado = numeroI.toString(16);
        resultado.value = numeroCalculado;
      break;
      case '4':
        numeroCalculado = parseInt(numeroI, 2)
        resultado.value = numeroCalculado;
      break;
      case '5':
        numeroCalculado = parseInt(numeroI, 8)
        resultado.value = numeroCalculado;
      break;
      case '6':
        numeroI = (dato.value); //obtengo el hexadecimal del input html dato sin convertir a entero
        numeroCalculado = parseInt(numeroI, 16)
        resultado.value = numeroCalculado;
      break;
      default:
        let comentario = document.querySelector("footer > p")
        comentario.innerHTML = "<b style='color: grey'>Opcion de conversion erronea</b>";
      break;
    }
} 
