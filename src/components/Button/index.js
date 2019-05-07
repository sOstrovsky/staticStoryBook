import React from 'react';
import styles from './button.module.scss'

const Button = ({
    title,
    onClick,
    type = 'primary',
}) => (
    <button onClick={onClick} className={`${styles.button} ${styles[type]}`}>{title}</button>
);

export default Button;
