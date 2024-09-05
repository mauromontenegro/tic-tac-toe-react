import { Square } from "./Square"

export function Board({ board, handleClick }) {
    return (
        <>
            {board.map((square, index) => {
                const fnHandleClick = () => {
                    handleClick(index);
                };
                return (
                    <Square key={index} index={index} handleClick={fnHandleClick}>
                        {square}
                    </Square>
                );
            })}
        </>
    );
}
