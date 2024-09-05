export const Button = ({ children, handleClick }) => {
    return (
        <button onClick={handleClick}>{children}</button>
    )
}