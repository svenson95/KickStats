import React from 'react';

export interface LoadingContextData {
    state: boolean;
    setLoading?: (state: boolean) => void;
}

const LOADING_CONTEXT_DATA: LoadingContextData = {
    state: false,
    setLoading(value: boolean) { this.state = value }
};
const LoadingContext = React.createContext(LOADING_CONTEXT_DATA);

export default LoadingContext;
