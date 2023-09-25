"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLoadingCoverState = void 0;
const react_1 = require("react");
const useLoadingCoverState = () => {
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const hideLoadingCover = () => {
        setIsLoading(false);
    };
    const showLoadingCover = () => {
        setIsLoading(true);
    };
    return { isLoading, hideLoadingCover, showLoadingCover };
};
exports.useLoadingCoverState = useLoadingCoverState;
