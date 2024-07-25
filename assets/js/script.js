let opcion = parseint(prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesides.\nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial  \n4.- Otras consultas"));

//FUNCIONES

if (opcion === 1,2,3,4) {
    switch (opcion) {
        case 1:
            let opcion1 = parseInt(prompt('Seleccione una opcion:\n 1-Ver boleta \n2-pagar cuenta'))
            if (opcion1 === 1,2){
                switch(opcion1){
                    case 1:
                        console.log('Haga click aqui para descargar')
                    break
                    case 2:
                        console.log('Usted esta siendo transferido')
                    break
                    default: console.log('eliga una opcion correcta')
                }
                
            }else{

            }
        
            break
        case 2:
            let opcion2 = parseInt(prompt('Seleccione una opcion:\n 1-Problema con la señol \n 2- Problema con la llamada'))
            if (opcion1 === 1) {
                switch (opcion1) {
                    case 1:
                        let solicitud = prompt('Aconinuacion escriba su solicitud:')
                        console.log('Estimado usuario su solicitud:\n'+solicitud+ ' Ha sido ingresada con éxito.\n Pronto será contactado por uno de nuestos ejecutivos.')
                        break
                    case 2:
                        console.log('Usted esta siendo transferido')
                        break
                    default: console.log('eliga una opcion correcta')
                }
            } else {

            }
        break
        case 3:
            let opcion3 = prompt('Mentel, tiene una oferta comercial acorde a tus necesidades! \n PAra conocer para ser más asesorado personalmente por un \n ejecutivo escribe Si y un ejecutivo te llamará, de lo contrario escribe NO')
            if (opcion== si) {
                console.log('Un ejecutivo se contactara con usted')
            } else {
                console.log('Gracias por preferir nuestros servicios')
            }

        break
        case 4:
            let opcion4 = prompt('Escriba su consulta:')
            console.log('Estimado usuario su consulta:'+ opcion4 + 'Ha sido ingresada con exito.\n Pronto será contactado por uno de nuestros ejecutivos. ')
  
        
       }
    }else{
        console.log('La opcion ingresada no es válida. Gracias por preferir nuestros servicios')
    
}


