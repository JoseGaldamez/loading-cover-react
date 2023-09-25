import { useState } from "react";

export const useLoadingCoverState = () => {
    const [isLoading, setIsLoading] = useState(false);

    const hideLoadingCover = () => {
        setIsLoading(false);
    };

    const showLoadingCover = () => {
        setIsLoading(true);
    };

    return { isLoading, hideLoadingCover, showLoadingCover };
};
