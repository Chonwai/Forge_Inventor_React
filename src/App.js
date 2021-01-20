import './App.css';
import Viewer from './components/viewer';
import Panel from './components/panel';
import React from 'react';

function App() {
    return (
        <div className="App">
            <div className="flex flex-row justify-center items-center p-2">
                <div className="panel p-2 w-1/3">
                    <Panel />
                </div>
                <div className="p-2 w-2/3 h-90vh">
                    <Viewer />
                </div>
            </div>
        </div>
    );
}

export default App;
