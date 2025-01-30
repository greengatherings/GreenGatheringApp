import React from 'react';

const App: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', backgroundColor: '#f0f8ff', padding: '20px' }}>
            <h1 style={{ color: 'green', fontWeight: 'bold', fontSize: '2.5em', margin: '20px 0' }}>
                Welcome to the Green Gatherings Community
            </h1>
            <hr />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/books.png" alt="Books for all" style={{ width: '300px', height: 'auto', marginRight: '20px' }} />
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3.0em' }}>ReUse School Books Initiative</h1>
                    <p style={{ fontSize: '1.3em' }}>We are thrilled to announce the successful completion of the ReUse School Books 2024! With over 600 requirements registered, we are proud to report that 60% of participants were able to find a perfect match for their needs. This remarkable achievement highlights the power of community and the importance of sustainability in education.</p>
                    <br />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontSize: '2em', marginRight: '10px', animation: 'wave 1s infinite' }}>👉</span>
                         <a href="https://forms.gle/7nYvr9tWazMYj1aG7" target="blank" style={{ color: 'white', backgroundColor: 'blue', padding: '10px 20px', textDecoration: 'none', borderRadius: '5px', fontSize: '1.5em' }}>
                            Registration for 2025 is open Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;