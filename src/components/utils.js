import confetti from 'canvas-confetti'
import { TURNS, WINNING_COMBINATIONS } from '../constants';

/* Función que devuelve el valor inicial para el board al cargar la página */
export const getInitialBoard = () => {
    /* En caso de existir, cargo el board guardado en localStorage; sino, inicializo un board nuevo */
    const storedBoard = window.localStorage.getItem('board')
    return storedBoard ? JSON.parse(storedBoard) : Array(9).fill(null)
}

/* Función que devuelve el valor inicial para el turno al cargar la página */
export const getInitialTurn = () => {
    /* En caso de existir, cargo el turno guardado en localStorage; sino, inicializo con "X" */
    const storedTurn = window.localStorage.getItem('turn')
    return storedTurn ? storedTurn : TURNS.X
}

/* Función para verificar si hay un ganador en el tablero actual */
/* Recibe el tablero actual y no usa "board" porque el "setBoard" es asíncrono */
export const checkWinner = (boardToCheck) => {
    /* Recorre cada combinación ganadora */
    for (const combination of WINNING_COMBINATIONS) {
        const [a, b, c] = combination;
        /* Verifica si las tres posiciones son iguales y no están vacías */
        if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
            confetti()
            return boardToCheck[a];  /* Retorna 'X' o 'O' según el ganador*/
        }
    }
    /* Si no hay ganador y el juego ha terminado, devuelve false */
    if (checkGameOver(boardToCheck)) return false
    /* Si no hay ganador y el juego no ha terminado, retorna null */
    return null;
}

/* Función para verificar si el juego ha terminado */
export const checkGameOver = (boardToCheck) => {
    return boardToCheck.every(squareVal => squareVal !== null);
}

/* Función devolver el próximo turno */
export const getNewTurn = (turn) => {
    return turn === TURNS.X ? TURNS.O : TURNS.X
}