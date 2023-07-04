import styles from "./Modal.module.scss";
import React, { MouseEvent } from 'react'
import classNames from "classnames";

export type Props = {
    children: React.ReactNode;
    isOpen: boolean
    onClose: () => void;
    className?: string;
}

const Modal = ({ children, isOpen, onClose, className }: Props) => {
    if (!isOpen) {
        return <></>
    }
    const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    const handleKeypush = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose();
            (document.activeElement as HTMLElement).blur();
        }
    }

    document.addEventListener('keydown', handleKeypush)

    return (
        <div className={styles.backdrop} onClick={handleBackdropClick}>
            <div className={classNames([styles.modal, className])}>
                {children}
            </div>
        </div>
    )
};

export default Modal;