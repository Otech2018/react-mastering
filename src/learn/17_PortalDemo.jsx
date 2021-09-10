import React from 'react'
import ReactDOM from 'react-dom'  //react dom need to be imported

function PortalDemo() {
    return ReactDOM.createPortal(    //ReactDOM.createPortal accepts twp parameter
        <div>
            <h1>Portals demo</h1>
        </div>,

        document.getElementById('portal-root')
    )
}

export default PortalDemo
