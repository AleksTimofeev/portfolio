import React from 'react';
import styles from './Button.module.scss'

type PropsType = {
  title: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  className?: string
}

const Button: React.FC<PropsType> = ({onClick, title, className}) => {

  const handleOnclick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onClick && onClick(e)
  }

  const style = `${styles.btn} ${className}`

  return (
    <button className={style} onClick={handleOnclick}>{title}</button>
  );
};

export default Button;