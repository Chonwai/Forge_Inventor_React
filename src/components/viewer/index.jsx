import React, { useState } from 'react';
import './index.css';
import ForgeViewer from 'react-forge-viewer';

function Viewer() {
    const [view, setView] = useState(null);
    const getForgeToken = () => {
        return {
            access_token: process.env.REACT_APP_ACCESS_TOKEN,
            token_type: 'Bearer',
            expires_in: 3599,
        };
    };
    const handleTokenRequested = onAccessToken => {
        // console.log('Token requested by the viewer.');
        // console.log(onAccessToken);
        if (onAccessToken) {
            let token = getForgeToken();
            if (token) onAccessToken(token.access_token, token.expires_in);
        }
    };
    const handleDocumentLoaded = (doc, viewables) => {
        // console.log('Document Loaded!');
        // console.log(doc, viewables);
        if (viewables.length === 0) {
            console.error('Document contains no viewables.');
        } else {
            //Select the first viewable in the list to use in our viewer component
            setView(viewables[0]);
        }
    };
    const handleModelLoaded = (viewer, model) => {
        // console.log('Loaded model:', model);
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
                    onModelLoad={handleModelLoaded}
                    // onModelError={this.handleModelError.bind(this)}
                ></ForgeViewer>
            </div>
        </div>
    );
}

export default Viewer;
