import React, { ChangeEvent } from 'react';
import styles from './NumberInput.module.scss';

type Props = {
    max: number;
    handleValueChange: (value: number) => void;
    value: number;
}

const NumberInput = ({ max, handleValueChange, value }: Props) => {
    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const val = changeToCorrectValue(+evt.target.value);
        passValueUp(val);
    };

    const handleClick = (increment: number) => {
        const val = changeToCorrectValue(value + increment);
        passValueUp(val);
    };

    const handlePlus = () => handleClick(1);
    const handleMinus = () => handleClick(-1);
    const passValueUp = (val: number) => handleValueChange(val);

    const changeToCorrectValue = (value: number): number => {
        let correctValue = value;
        if (value < 0 || isNaN(value)) {
            correctValue = 0;
        } else if (value > max) {
            correctValue = max;
        } else if (Math.floor(value) !== value) {
            correctValue = Math.floor(value);
        }
        return correctValue;
    };

    return (
        <div className={styles.numberInput}>
            <button className={styles.button} onClick={handleMinus}>
                -
            </button>
            <input type="text" className={styles.input} onChange={handleChange} value={value.toString()} />
            <button className={styles.button} onClick={handlePlus}>
                +
            </button>
        </div>
    );
};

export default NumberInput;
