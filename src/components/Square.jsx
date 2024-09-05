export const Square = ({ children, handleClick, index, isSelected }) => {

    const className = `square ${isSelected ? 'is-selected' : ''}`

    /* Función que se ejecuta al hacer click en un Square */
    const fnHandleClick = () => {
        handleClick(index)
    }

    return (
        <div className={className} onClick={fnHandleClick}>
            {children}
        </div>
    )
}