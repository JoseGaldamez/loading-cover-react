"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingCover = void 0;
const react_1 = __importDefault(require("react"));
const useLoadingCoverState_1 = require("./hooks/useLoadingCoverState");
const LoadingCover = () => {
    const { isLoading, showLoadingCover, hideLoadingCover } = (0, useLoadingCoverState_1.useLoadingCoverState)();
    return (react_1.default.createElement("div", null,
        isLoading ? (react_1.default.createElement("p", null, "Loading")) : (react_1.default.createElement("p", null, "No loading")),
        react_1.default.createElement("br", null),
        react_1.default.createElement("button", { onClick: showLoadingCover }, "Mostrar"),
        react_1.default.createElement("button", { onClick: hideLoadingCover }, "Ocultar")));
};
exports.LoadingCover = LoadingCover;
