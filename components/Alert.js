import React from 'react';
import cn from 'classnames';
import styles from '../styles/alert.module.css';

const Alert = ({children, type}) => {
    return (
        <div
          className={cn({
            [styles.success]: type === 'success',
            [styles.error]: type === 'error'
          })}
        >
          {children}
        </div>
      )
    
}
export default Alert;