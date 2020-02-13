import React from 'react';
import ReactDom from 'react-dom';

// Portal here, attached to StreamDelete
// Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
const Modal = props => {
    return ReactDom.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active"> {/* stopPropagation would stop the click event on children div triggers the parent event listener */}
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">{props.actions}</div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;