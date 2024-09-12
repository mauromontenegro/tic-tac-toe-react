import { Square } from "./Square"
import { motion } from "framer-motion"

const MotionSquare = motion.create(Square);

export function Board({ board, handleClick }) {
    return (
        <>
            {board.map((square, index) => {
                const fnHandleClick = () => {
                    handleClick(index);
                };
                return (
                    <MotionSquare
                        key={index} index={index} handleClick={fnHandleClick}
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        {square}
                    </MotionSquare>
                );
            })}
        </>
    );
}
