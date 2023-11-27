import './ChallModal.css'
const ChallModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return ( 
        <div className="ChallModal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {children}
            <button className="modal-close-btn" onClick={onClose}>
                <p className='go'>확인</p>
            </button>
            </div>

        </div>
     );
}
 
export default ChallModal ;