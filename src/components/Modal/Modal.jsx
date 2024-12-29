import './Modal.scss';


const Modal = ({ img, title, subTitle, modalClose }) => {
  const modalStyle = {
    backgroundColor: 'rgba(0,0,0,0.8)',
    display: 'block',
  };
  return (
    <div className="modal show fade bd-example-modal-lg" style={modalStyle}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          {/* <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
            <button
              type="button"
              className="btn-close"
              onClick={modalClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="st-flex-center">
              <img src={img} />
            </div>
            <p className="modal-subtitle">{subTitle}</p>
          </div> */}
          <div className='modal-left col-lg-6'>
             <button
              type="button"
              className="btn-close"
              onClick={modalClose}
            ></button>
            <h2>{title}</h2>
            <h3>{subTitle }</h3>
          </div>
          <div className='modal-right col-lg-6'>
            <img src={img} className="" alt="Modal img" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Modal;
