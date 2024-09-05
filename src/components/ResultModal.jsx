import { Button } from "./Button"
import { Square } from "./Square"

export function ResultModal({ winner, handleClick }) {
    if (winner === null) return null

    const modalText = !winner ? 'Hay un empate' : 'Ganó '

    return (
        <section className='winner'>
            <div className='text'>
                <h2>{modalText}</h2>
                {winner && (
                    <header className='win'>
                        <Square>{winner}</Square>
                    </header>
                )
                }
                <footer>
                    <Button handleClick={handleClick}>Empezar de nuevo</Button>
                </footer>
            </div>
        </section>
    )
}