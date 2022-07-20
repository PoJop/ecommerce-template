import React from "react";

function useEvent(handler) {
    const handlerRef = React.useRef(null);

    // In a real implementation, this would run before layout effects
    React.useLayoutEffect(() => {
        handlerRef.current = handler;
    });

    return React.useCallback((...args) => {
        // In a real implementation, this would throw if called during render
        const fn = handlerRef.current;
        return fn(...args);
    }, []);
}
export default useEvent