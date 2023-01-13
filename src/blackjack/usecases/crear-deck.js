import _ from 'underscore';


/**
 * Esta función crea un nuevo deck
 * @param {Array<string>} tiposCartas Ejemplo ['C','D','H','S'];
 * @param {Array<string>} tiposEspeciales  Ejemplo ['A','J','Q','K'];
 * @returns {Array<string>} return un nuevo deck
 */
export const crearDeck = (tiposCartas, tiposEspeciales) => {


    if ( !tiposCartas  || tiposCartas.length === 0 ) throw new Error ('Tipo de cartas es obligatorio como un arreglo de string');
    if ( !tiposEspeciales  || tiposEspeciales.length === 0 ) throw new Error ('Tipo de cartas es obligatorio como un arreglo de string');

    let deck =[];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    // console.log( deck );
    return deck;
}
