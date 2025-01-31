import React from 'react';
import { Link, Routes, Route, BrowserRouter, MemoryRouter, Navigate } from 'react-router-dom'; // Import the Link component
import ReUseBooksApp from './ReUseBooks/ReUseBooks';
import ReactDOM from 'react-dom';
const App: React.FC = () => {
    return (
        <div >
            
            <div >
            <div >
            <MemoryRouter >
                <nav>
                    <table><tr>
                    
                    <td><Link to="/">Home</Link></td>
                    
                    <td><Link to="/reusebooks">ReUse School Books</Link></td>
                    </tr></table>
                    </nav>
                <Routes>
                    <Route path="/" element={<HomeApp/>}/>
                    <Route path="/reusebooks" element={<ReUseBooksApp />} />
                </Routes>
             </MemoryRouter>
            </div>

            </div>
        </div>
    );
};


function reUseBook_click(){ 
    ReactDOM.render(
        <>
        <ReturnToHome/>
        <ReUseBooksApp/>
        </>,
        document.getElementById('root')
    );
}

const ReturnToHome: React.FC = () => {
    return (
        <div>
            <a href="/">Home</a>
        </div>
    );
}


const HomeApp: React.FC = () => {
    return (
        <div>
            <div style={{ textAlign: 'center', backgroundColor: '#f0f8ff', padding: '20px' }}>
                <h1 style={{ color: 'green', fontWeight: 'bold', fontSize: '2.5em', margin: '20px 0' }}>
                    Welcome to Green Gatherings
                </h1>
            </div>
            <hr />
            <div style={{ textAlign: 'center', backgroundColor: '#f0f8ff', padding: '20px' }}>
                <p style={{  fontSize: '2.5em', margin: '20px 0' }}>
                    Green Gatherings is encouraging green initiatives that help conserve our environment.
                </p>
                <br/>
                <a style={{fontSize: '2em'}} href="javascript:void(0)" onClick={reUseBook_click}>ReUseBooks Initiative</a>
                
            </div>
        </div>
    );
};


export default App;
