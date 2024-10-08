import { useState } from 'react'
import { TURNS } from './constants'
import { Square } from './components/Square'
import './App.css'
import { Button } from './components/Button'
import { ResultModal } from './components/ResultModal'
import { getInitialBoard, getInitialTurn, checkWinner, getNewTurn } from './components/utils'
import { Board } from './components/Board'

function App() {

  /* Tablero del juego */
  const [board, setBoard] = useState(() => {
    /* Inicializo estado */
    return getInitialBoard()
  })

  /* Estado para saber el turno actual */
  const [turn, setTurn] = useState(() => {
    /* Inicializo estado */
    return getInitialTurn()
  })

  /* Estado para saber si hay un ganador -> Se inicializa con null; será false si hay empate o true si hay ganador */
  const [winner, setWinner] = useState(null)

  /* Función para actualizar el tablero */
  const updateBoard = (index) => {
    /* Si hay algo escrito en cuadro actual, o hay un ganador, no hacemos nada sobre el cuadro */
    if (board[index] || winner) return
    /* Actualizamos el tablero -> se hace una copia, para no mutar el original */
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    /* Cambiamos el turno */
    const newTurn = getNewTurn(turn)
    setTurn(newTurn)
    /* Guardamos la partida en local storage */
    saveGame(newBoard, newTurn)
    /* Verificamos si hay un ganador */
    const theWinner = checkWinner(newBoard)
    setWinner(theWinner)
  }

  /* Función para reiniciar el juego */
  const resetGame = () => {
    /* Seteamos los estados con sus valores iniciales */
    let board = Array(9).fill(null)
    setBoard(board)
    let turn = TURNS.X
    setTurn(turn)
    setWinner(null)
    /* Guardamos la partida en local storage */
    saveGame(board, turn)
  }

  /* Función para guardar la partida en local storage */
  const saveGame = (board, turn) => {
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
  }

  return (
    <main className='board'>
      <h1>TIC TAC TOE</h1>
      <section className='game'>
        <Board board={board} handleClick={updateBoard}></Board>
      </section>

      <section className='turn'>
        <h2>Current turn</h2>
        <div className='container'>
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </div>
      </section>

      <section>
        <Button handleClick={resetGame}>Reset game</Button>
      </section>

      {/* Modal que indica resultado del juego */}
      <ResultModal winner={winner} handleClick={resetGame}></ResultModal>
    </main>
  )
}

export default App
