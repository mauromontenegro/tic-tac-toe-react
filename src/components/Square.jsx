import React from 'react';

export const Square = React.forwardRef(({ children, handleClick, index, isSelected }, ref) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`;

    const fnHandleClick = () => {
        handleClick(index);
    };

    return (
        <div ref={ref} className={className} onClick={fnHandleClick}>
            {children}
        </div>
    );
});
