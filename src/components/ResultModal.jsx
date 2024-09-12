import { Button } from "./Button"
import { Square } from "./Square"
import { motion } from "framer-motion"

export function ResultModal({ winner, handleClick }) {
    if (winner === null) return null

    const modalText = !winner ? 'There is a tie!' : 'The winner is '

    return (
        <section className='winner'>
            <motion.div className='text' 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}>
                <h2>{modalText}</h2>
                {winner && (
                    <header className='win'>
                        <Square className='square'>{winner}</Square>
                    </header>
                )
                }
                <footer>
                    <Button handleClick={handleClick}>New game</Button>
                </footer>
            </motion.div>
        </section>
    )
}