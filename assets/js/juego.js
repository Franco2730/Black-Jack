// const miModulo = (() => {

//     'use strict'

//     //Lo primero que vamos a necesitar es crear la baraja (deck)
//     let deck = []; //Vamos a crear el deck con una let porque luego modificaremos su vamor
//     const tipos = ['C', 'D', 'H', 'S'], //Esta constante son los tipos de cartas
//     especiales = ['A', 'J', 'Q', 'K'];

//     let puntosJugadores = []; //Esto reemplaza las variables de puntosJugador y puntosComputadora. Ya que es m

//     //Referencias del HTML (Ya que vamos a trabajar mas de una vez con ciertos botones, es conveniente colocar ese elemento en una variable).
//     const btnPedir = document.querySelector('#btnPedir'),
//           btnDetener = document.querySelector('#btnDetener'),
//           btnNuevo = document.querySelector('#btnNuevo');

//     const divCartasJugador = document.querySelector('#jugador-cartas'), //Esta variable es la carta que vamos a pedir con el boton btnPedir. estamos creando una variable que es igual a la eleccion de la primer carta de la lista con ID jugador-cartas
//           divCartaComputadora = document.querySelector('#computadora-carta'),
//           puntosHTML = document.querySelectorAll('small'); //Vamos a crear una constante llamada puntosHTML que va a ser igual a la seleccion de ambas etiquetas small (tanto la etiqueta small del jugador como la etiqueta de la computadora)

//     //---------- Esta función inicializa el juego:

//     const inicializarJuego = (numJugadores = 1) => {
//         crearDeck();
//         console.log({ numJugadores })
//     }

//     //---------- Esta funcion me permite crear una baraja:
//     const crearDeck = () => {

//         deck = [];
//         for (let i = 2; i < 10; i++) {
//             for (let tipo of tipos) { ////La sentencia sentencia for of ejecuta un bloque de código para cada elemento de un objeto iterable, en el for of no se acostumbra a llamar a la variable como i, generalmente se coloca el modo singular del array. Entonces, para que quede claro. Nosotros creamos una variable nueva con todos los tipos de cartas y luego creamos un ciclo for (ya que las cartas van del 2 al 9) y en ese ciclo for 
//                 deck.push(i + tipo); //Acá ordenamos que a todos los valores i (del 2 al 9) se le sume al FINAL (.PUSH) la variable tipo.
//             }
//         }

//         for (let tipo of tipos) {
//             for (let esp of especiales) {
//                 deck.push(esp + tipo);

//             }
//         }
//         return _.shuffle(deck); //_.shuffle es parte de la libreria que descargamos copiamos en un nuevo archivo de js y cargamos en el index tal y como lo hacemos con el script de js. Lo que hace shuffle es mezclar el arreglo (la baraja)
//     }

//     //---------- La siguiente función me permite solicitar una carta.

//     const pedirCarta = () => {

//         if (deck.length === 0) {
//             throw 'No hay más cartas en la baraja'; //throw es una palabra reservada para mostrar un error en consola.
//         }

//         return deck.pop(); //Acá estamos retornando el deck.pop() esto significa que, tal y como sabemos, .pop es un metodo que elimina el último elemento de una matriz y lo devuelve. Si la matriz está vacía, se devuelve undefined y la matriz no se modifica. Basicamente estamos diciendo: "La carta será la que se elimine de la baraja"
//     }


//     //----------Con la siguiente función le otorgaremos poder a cada carta:

//     const valorCarta = (carta) => { //Acá colocamos el argumento que necesitamos. la carta que vamos a evaluar 

//         const valor = carta.substring(0, carta.length - 1); //La forma original de colocar un valor para las cartas era const valor = carta[0]; De esa forma estabamos seleccionando la posicion 0 del string, es decir, de todas las cartas estabamos seleccionando el primer valor, y en todos estaba bien, pero con los 10 solo iba a seleccionar el numero 1. Entonces con el .substring seleccionamos la primer posición del string (0) y la cantidad de todos los caracteres que este posea (carta.length) menos 1 (-1) ya que en ningun caso necesitamos saber si es de diamante, coraz, treb, piqe.

//         return (isNaN(valor)) ? //Acá estamos pidiendo que haya un retorno y preguntamos si lo que esta dentro del parentesis es un numero o no. isNaN significa Is not a number. si sale true no es un numero. ENTONCES (?) evaluaremos otra condicion ternaria que es la que aparece a abajo 
//             (valor === 'A') ? 11 : 10 // Si el valor es estrictamente igual a: 'A' ENTONCES (?) tendra un valor de 11 CASO CONTRARIO (:) tendra un valor de 10, y damos por echo que si no es 'A' tendrá un valor de 10 por que seguimos en la condición de que si no es un numero, es decir, hasta acá sabemos que no es un número. Esto es la primera condicion ternaria, abajo estará la otra. 
//             : valor * 1; //CASO CONTRARIO (:), es decir, si no es una letra, será un numero el cual tendremos que multiplicar por 1 para convertir un valor tipo string en un valor numerico. 
//     }

//     const acumularPuntos = () => {



//     }

//     //ES MOMENTO DE LA INTELIGENCIA ARTIFICIAL..(Turno de que la computadora juegue).
//     //El turno de la computadora será un ciclo WHILE ya que nosotros no deberemos apretar ningun boton para que la computadora eliga una carta. Si usamos la logica, este ciclo se debera realizar aunquesea una sola vez, ya que, por lo menos, debera tener una sola carta para ceder el turno. Entonces un DO-WHILE será el elegido.

//     const turnoComputadora = (puntosMinimos) => { //El argumento de esta función flecha serán los puntos logrados por el jugador, ya que tenemos que programar el turno de la computadora para que iguale el puntaje del jugador o llegue a 21.

//         do { //Al ser un ciclo DO WHILE, todo lo que está entre llaves se realizará aunque sea una sola vez, ya que la condicion esta al lado del while. 
//             const carta = pedirCarta();

//             puntosComputadora = puntosComputadora + valorCarta(carta);
//             puntosHTML[1].innerText = puntosComputadora;

//             const imgCarta = document.createElement('img');
//             imgCarta.src = `assets/cartas/${carta}.png`;
//             imgCarta.classList.add('carta');
//             divCartaComputadora.append(imgCarta);

//             if (puntosMinimos > 21) {
//                 break;
//             }

//         } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));


//         setTimeout(() => { //setTimeout es una función que va a ejecutar el siguiente codigo dentro de las llaves, luego del tiempo especificado abajo.

//             if (puntosJugador === puntosComputadora) {
//                 alert('Empataron, mejor, jueguen al truco ! ');
//             }
//             else if (puntosJugador > puntosComputadora && puntosJugador <= 21 || puntosComputadora > 21) {
//                 alert('Ganaste, Vamo lo pibe !!')
//             } else if (puntosJugador < puntosComputadora && puntosComputadora <= 21 || puntosJugador > 21) {
//                 alert('Como al amor de ella, perdiste !!')
//             }

//         }, 200); //Se especifica en milisegundos. "2 segundos"
//     }

//     btnPedir.addEventListener('click', () => { //De esta forma vamos a registrar un evento. cuando colocamos .addEventListener , en este caso el btnPedir, estará atento a lo que le especifiquemos en la primer parte del argumento, ahora estará pendiente de cuando le hagan click para dispararse la accion a continuación detallada.

//         const carta = pedirCarta();//Acá vamos a crear una constante llamada carta que va a ser igual a la funcion que creamos anteriormente. 

//         puntosJugador = puntosJugador + valorCarta(carta); //Esto se lee: Como los puntos del jugador valen 0 (primer puntosJugador) necesito incrementarlos con los puntos del jugador (segundo puntosJugador) + el valor de la carta que nos vaya saliendo.

//         puntosHTML[0].innerText = puntosJugador; //Luego de crear la constante en las referencias del html vamos a redactar esta linea de codigo que se puede leer de la siguiente forma: en los puntosHTML (recordar que esa era una variable con el valor de la seleccion de las dos etiquetas small tanto la del jugador como la de la computadora) y como son dos etiquetas lo que aclaramos es que queremos modificar la que esta en la primera posicion [0]. a eso le sumamos la accion innerText (significa que modifica o realiza una modificacion) y esta modificación sera los puntos del jugador. Si quisieramos modificar el segundo small (de la computadora) solo tendriamos que cambiar puntosHTML[0] y modificar el 0 por el 1. puntosHTML[1]

//         console.log(puntosJugador);


//         //De forma dinamica tenemos que crear lo siguiente: <img class = "carta" src = "assets/carta/2C.png">
//         const imgCarta = document.createElement('img'); // Acá creamos una imagen. <img>
//         imgCarta.src = `assets/cartas/${carta}.png`;    // Si hubiesemos dejado: assets/carta/2C.png, cada vez que hicieramos click en pedir nos aparecería el 2C, para arreglar eso, colocamos backsticks para reemplazar el 2C por el valor de la carta.
//         imgCarta.classList.add('carta'); //Acá le estamos agregando la clase carta a esta nueva imagen.
//         divCartaJugador.append(imgCarta);


//         if (puntosJugador > 21) {
//             console.warn('¡ Casi, te has pasado !');
//             btnPedir.disabled = true; //Acá estamos bloqueando el boton de Pedir con la palabra disabled. cuando nos pasamos de 21, no podremos pedir mas cartas.
//             btnDetener.disabled = true;

//             turnoComputadora(puntosJugador); //Acá estamos diciendo que al momento de perder por sobrepasar los 21, llamamos la función para que sea el turno de la computadora

//         } else if (puntosJugador === 21) {
//             console.warn('¡ Black Jack, Has ganado !');
//             btnPedir.disabled = true;
//             btnDetener.disabled = true;

//             turnoComputadora(puntosJugador); //Acá estamos diciendo que al momento de lograr un BlackJack, llamamos la función para que sea el turno de la computadora
//         }


//     });

//     btnDetener.addEventListener('click', () => {
//         btnPedir.disabled = true;
//         btnDetener.disabled = true;
//         turnoComputadora(puntosJugador);
//     });

//     btnNuevo.addEventListener('click', () => { //Cuando hagamos click en el boton nuevo ocurrira lo siguiente:

//         console.clear();
//         inicializarJuego();
//         //deck = [];
//         //deck = crearDeck(); // Se creará otro arreglo (como si se barajaran las cartas)

//         puntosJugador = 0; //El puntaje volvera a 0.
//         puntosComputadora = 0;

//         puntosHTML[0].innerText = 0; //El puntaje volvera a 0.
//         puntosHTML[1].innerText = 0;

//         divCartaComputadora.innerHTML = '';
//         divCartaJugador.innerHTML = '';

//         btnPedir.disabled = false; //El boton que habiamos bloqueado con .disabled, al colocar false, estará disponible nuevamente.
//         btnDetener.disabled = false;
//     });


const miModulo = (() => {
    'use strict';

    let deck         = [];
    const tipos      = ['C','D','H','S'],
          especiales = ['A','J','Q','K'];

    let puntosJugadores = [];

    // Referencias del HTML
    const btnPedir   = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo   = document.querySelector('#btnNuevo');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
          puntosHTML = document.querySelectorAll('small');


    // Esta función inicializa el juego 
    const inicializarJuego = ( numJugadores = 2 ) => {
        deck = crearDeck();

        puntosJugadores = [];
        for( let i = 0; i< numJugadores; i++ ) {
            puntosJugadores.push(0);
        }
        
        puntosHTML.forEach( elem => elem.innerText = 0 );
        divCartasJugadores.forEach( elem => elem.innerHTML = '' );

        btnPedir.disabled   = false;
        btnDetener.disabled = false;

    }

    // Esta función crea un nuevo deck
    const crearDeck = () => {

        deck = [];
        for( let i = 2; i <= 10; i++ ) {
            for( let tipo of tipos ) {
                deck.push( i + tipo);
            }
        }

        for( let tipo of tipos ) {
            for( let esp of especiales ) {
                deck.push( esp + tipo);
            }
        }
        return _.shuffle( deck );;
    }

    // Esta función me permite tomar una carta
    const pedirCarta = () => {
        if ( deck.length === 0 ) {
            throw 'No hay cartas en el deck';
        }
        return deck.pop();
    }

    const valorCarta = ( carta ) => {
        const valor = carta.substring(0, carta.length - 1);
        return ( isNaN( valor ) ) ? 
                ( valor === 'A' ) ? 11 : 10
                : valor * 1;
    }

    // Turno: 0 = primer jugador y el último será la computadora
    const acumularPuntos = ( carta, turno ) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    const crearCarta = ( carta, turno ) => {

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append( imgCarta );

    }

    const determinarGanador = () => {

        const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

        setTimeout(() => {
            if( puntosComputadora === puntosMinimos ) {
                alert('Nadie gana :(');
            } else if ( puntosMinimos > 21 ) {
                alert('Computadora gana')
            } else if( puntosComputadora > 21 ) {
                alert('Jugador Gana');
            } else {
                alert('Computadora Gana')
            }
        }, 100 );

    }

    // turno de la computadora
    const turnoComputadora = ( puntosMinimos ) => {

        let puntosComputadora = 0;

        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1 );
            crearCarta(carta, puntosJugadores.length - 1 );

        } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

        determinarGanador();
    }



    // Eventos
    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta();
        const puntosJugador = acumularPuntos( carta, 0 );
        
        crearCarta( carta, 0 );


        if ( puntosJugador > 21 ) {
            console.warn('Lo siento mucho, perdiste');
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );

        } else if ( puntosJugador === 21 ) {
            console.warn('21, genial!');
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );
        }

    });


    btnDetener.addEventListener('click', () => {
        btnPedir.disabled   = true;
        btnDetener.disabled = true;

        turnoComputadora( puntosJugadores[0] );
    });

    // btnNuevo.addEventListener('click', () => {
        
    //     inicializarJuego();

    // });


    return {
        nuevoJuego: inicializarJuego
    };

})();













