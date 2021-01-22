import React, { useState } from 'react';
import './index.css';
import ForgeViewer from 'react-forge-viewer';
import LocalStroage from '../../utils/localstorage';

function Viewer() {
    const [view, setView] = useState(null);
    const getForgeToken = () => {
        return {
            access_token: LocalStroage.get('access_token'),
            token_type: 'Bearer',
            expires_in: 3599,
        };
    };
    const handleTokenRequested = onAccessToken => {
        if (onAccessToken) {
            let token = getForgeToken();
            if (token) onAccessToken(token.access_token, token.expires_in);
        }
    };
    const handleDocumentLoaded = (doc, viewables) => {
        if (viewables.length === 0) {
            console.error('Document contains no viewables.');
        } else {
            //Select the first viewable in the list to use in our viewer component
            setView(viewables[0]);
        }
    };
    return (
        <div className="w-full h-full">
            <div className="w-full h-full relative">
                <ForgeViewer
                    version="7.0"
                    urn="dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6ZWRpc29uX2J1Y2tldC9ib3guaXB0"
                    view={view}
                    headless={false}
                    // onViewerError={this.handleViewerError.bind(this)}
                    onTokenRequest={handleTokenRequested}
                    onDocumentLoad={handleDocumentLoaded}
                    // onDocumentError={this.handleDocumentError.bind(this)}
                    // onModelLoad={handleModelLoaded}
                    // onModelError={this.handleModelError.bind(this)}
                ></ForgeViewer>
            </div>
        </div>
    );
}

export default Viewer;
