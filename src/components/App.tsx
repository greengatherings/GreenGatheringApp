import React from 'react';
import { Link, Routes, Route, BrowserRouter, MemoryRouter } from 'react-router-dom'; // Import the Link component
import ReUseBooksApp from './ReUseBooks/ReUseBooks';
const App: React.FC = () => {
    return (
        <div >
            
            <div >
            <div >
            <MemoryRouter >
                <nav>
                    <Link to="/">Home</Link>
                    <br/>
                    <Link to="/ReUseBooksApp">ReUse School Books Initiative</Link>
                    </nav>
                <Routes>
                    <Route path="/" element={<HomeApp/>}/>
                    <Route path="/ReUseBooksApp" element={<ReUseBooksApp />} />
                </Routes>
             </MemoryRouter>
            </div>

            </div>
        </div>
    );
};

const HomeApp: React.FC = () => {
    return (
        <div>
            <div style={{ textAlign: 'center', backgroundColor: '#f0f8ff', padding: '20px' }}>
                <h1 style={{ color: 'green', fontWeight: 'bold', fontSize: '2.5em', margin: '20px 0' }}>
                    Welcome the Green Gatherings
                </h1>
            </div>
            <hr />
            <div style={{ textAlign: 'center', backgroundColor: '#f0f8ff', padding: '20px' }}>
                <p style={{  fontSize: '2.5em', margin: '20px 0' }}>
                    Green Gatherings is encouraging green initiatives that help conserve our environment.
                </p>
            </div>
        </div>
    );
};


export default App;
