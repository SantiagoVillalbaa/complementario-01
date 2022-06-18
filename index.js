let numero = parseFloat(prompt("Ingrese un Numero"))
for(let i = 1; i <= 10; i++){
    if (i===7) {
        continue
    } else {
        let resultado = numero ** i;
        console.log(numero + " ^ "+ i + " = " + resultado)
    }
} 