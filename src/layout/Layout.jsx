import { Outlet } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
import { ContextProvider } from "../utils/Context";

function Layout() {
    return (
        <ContextProvider>
            {/* Header */}
            {/* Error */}
            <div>sono header</div>

            <div id='content'>
                <ErrorBoundary>
                    <div className="my-4" id="main-content" role="main">
                        <Outlet />
                    </div>
                </ErrorBoundary>
            </div>

            {/* Footer */}
        </ContextProvider> 
    );
}

export default Layout;