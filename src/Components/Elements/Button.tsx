import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import styles from './Button.module.scss'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type PropsType = {
  title: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  className?: string
}

const Button: React.FC<PropsType & DefaultButtonPropsType> = ({onClick, title, className, ...restProps}) => {

  const handleOnclick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onClick && onClick(e)
  }

  const style = `${styles.btn} ${className}`

  return (
    <button className={style} onClick={handleOnclick} >{title}</button>
  );
};

export default Button;