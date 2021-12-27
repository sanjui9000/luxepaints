import React from 'react';

import './Pulse.scss'

type Props = {
    color: string,
    isDisabled: boolean,
}

export const Pulse = ({color, isDisabled}: Props) => {
    return <span className={`pulse ${isDisabled ? 'pulse--is-disabled': ''}`} style={{backgroundColor: color}}></span>;
}
