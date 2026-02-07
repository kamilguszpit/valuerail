import React, { Component, ReactNode, ErrorInfo } from 'react';
import { Text } from 'ink';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Silently swallow specific known errors or log if needed
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback || (
                <Text>VALUERAIL</Text>
            );
        }

        return this.props.children;
    }
}
