import React from 'react';
import styles from './Button.module.scss'

type PropsType = {
  title: string
  onClick?: () => void
}

const Button: React.FC<PropsType> = ({onClick, title}) => {
  return (
    <button className={styles.btn}>{title}</button>
  );
};

export default Button;