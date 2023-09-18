import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

const ReactPortal = ({ children, wrappedId = "react-portal-wrapper" }) => {
    const [wrapperElement, setWrapperElement] = useState(null);

    useLayoutEffect(() => {
        let element = document.getElementById(wrappedId);
        let systemCreated = false;
        if (!element) {
            systemCreated = true;
            element = createWrapperAndAppendToBody(wrappedId);
        };
        setWrapperElement(element);
        return () => {
            if (systemCreated && element.parentNode) {
                element.parentNode.removeChild(element);
            }
        }
    }, [wrappedId]);

    if (wrapperElement === null) null;

    return createPortal(children, document.getElementById(wrappedId));
};

const createWrapperAndAppendToBody = (wrapperId) => {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute('id', wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
}

export default ReactPortal;
