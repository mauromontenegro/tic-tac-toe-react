import { useState } from 'react'
import { TURNS } from './constants'
import { Square } from './components/Square'
import './App.css'
import { Button } from './components/Button'
import { ResultModal } from './components/ResultModal'
import { checkWinner, getNewTurn } from './components/utils'
import { Board } from './components/Board'

function App() {

  /* Tablero del juego -> Se inicializa con null */
  const [board, setBoard] = useState(Array(9).fill(null))

  /* Estado para saber el turno actual -> Se inicializa con la "X" */
  const [turn, setTurn] = useState(TURNS.X)

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
    /* Verificamos si hay un ganador */
    const theWinner = checkWinner(newBoard)
    setWinner(theWinner)
  }

  /* Función para reiniciar el juego */
  const resetGame = () => {
    /* Seteamos los estados con sus valores iniciales */
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className='board'>
      <h1>Ta te ti</h1>
      <section className='game'>
        <Board board={board} handleClick={updateBoard}></Board>
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <section>
        <Button handleClick={resetGame}>Reiniciar Juego</Button>
      </section>

      {/* Modal que indica resultado del juego */}
      <ResultModal winner={winner} handleClick={resetGame}></ResultModal>
    </main>
  )
}

export default App
