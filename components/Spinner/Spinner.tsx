import styles from './Spinner.module.scss';
import React from 'react'
import classNames from 'classnames';

const DOT_COUNT = 3;

type Props = {
    fullScreen?: true;
}

const Spinner = ({ fullScreen }: Props) => (
    <div className={classNames([styles.spinner, fullScreen && styles.fullScreen])}>
        {Array(DOT_COUNT).fill(null).map((_, i) => <div className={styles.dot} key={i} />)}
    </div>
);

export default Spinner;