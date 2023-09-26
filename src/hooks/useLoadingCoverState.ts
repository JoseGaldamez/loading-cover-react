import { useState } from "react";
import { singletonHook } from "react-singleton-hook";

const init = {
    isLoading: false,
    hideLoadingCover: () => {},
    showLoadingCover: () => {},
    toggleLoadingCover: () => {},
};

export const useLoadingCoverStateImplementation = () => {
    const [isLoading, setIsLoading] = useState(init.isLoading);

    const hideLoadingCover = () => {
        if (isLoading) {
            setIsLoading(false);
        }
    };

    const showLoadingCover = () => {
        if (!isLoading) {
            setIsLoading(true);
        }
    };

    const toggleLoadingCover = () => {
        setIsLoading(!isLoading);
    };

    return {
        isLoading,
        hideLoadingCover,
        showLoadingCover,
        toggleLoadingCover,
    };
};

export const useLoadingCover = singletonHook(
    init,
    useLoadingCoverStateImplementation
);
