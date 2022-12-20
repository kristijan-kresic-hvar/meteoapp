import { Fragment } from 'react'

import styles from './Modal.module.css'

const Modal = ({ isOpen, children, onClose }) => {

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <Fragment>
            {isOpen && (
                <div
                    className={`
                    fixed top-0 bottom-0 left-0 right-0 bg-black/[.6]
                    flex items-center justify-center`
                    }
                    onClick={handleOverlayClick}
                >
                    <div
                        className="w-5/6 bg-white h-5/6 max-w-[1200px] relative rounded overflow-y-auto">
                        {children}
                        <div className="absolute right-5 top-5">
                            <button
                                type="button"
                                title="Close settings"
                                onClick={onClose}
                                className="text-black border border-black hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
                            >
                                <svg
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                                <span
                                    className="sr-only"
                                >
                                    Close modal
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default Modal