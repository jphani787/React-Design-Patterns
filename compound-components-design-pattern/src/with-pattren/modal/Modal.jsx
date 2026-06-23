const Modal = ({ children, isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="modal-backdrop">
            <div className="modal-container">{children}</div>
            <button className="modal-close" onClick={onClose}>X</button>
        </div>
    );
};

const ModalHeader = ({ children }) => {
    return <div className="modal-title">{children}</div>;
};

const ModalBody = ({ children }) => {
    return <div className="modal-body">{children}</div>;
};

const ModalFooter = ({ children }) => {
    return <div className="modal-footer">{children}</div>;
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
