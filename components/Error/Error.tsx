import React from 'react';
import styles from './Error.module.scss';

type Props = {
    message: string;
}

const ErrorComponent = ({ message }: Props) => {
    return (
        <div className={styles.error}>
            <h2>Oops! Something went wrong.</h2>
            <p>{message}</p>
        </div>
    );
};

export default ErrorComponent;