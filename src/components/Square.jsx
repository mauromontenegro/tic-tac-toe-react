import React from 'react';
import { TURNS } from '../constants';

export const Square = React.forwardRef(({ children, handleClick, index, isSelected }, ref) => {

    const className = `square ${isSelected ? 'is-selected' : ''} ${children === TURNS.X ? 'square-x' : ''} ${children === TURNS.O ? 'square-o' : ''}`;

    const fnHandleClick = () => {
        handleClick(index);
    };

    return (
        <div ref={ref} className={className} onClick={fnHandleClick}>
            {children}
        </div>
    );
});
