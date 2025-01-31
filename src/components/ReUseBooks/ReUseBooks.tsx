import React from 'react';

const ReUseBooksApp: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', backgroundColor: '#f0f8ff', padding: '20px' }}>
            <h1 style={{ color: 'green', fontWeight: 'bold', fontSize: '2.5em', margin: '20px 0' }}>
            ReUse School Books Initiative
            </h1>
            <hr />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/books.png" alt="Books for all" style={{ width: '300px', height: 'auto', marginRight: '20px' }} />
                <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '1.3em' }}>It is an initiative by Green Gatherings to provide a platform for donating and receiving used textbooks. Your contribution can make a significant impact to conserve environment. 
                        How it works:
                        1. User Fills the form as Donor and./or Receiver of School books.
                        2. Once the match is found, the receiver will get the contact details of donor over an email.
                        3. Receiver is then expected to contact the donor for fixing time and place to collect the books.
                        4. Once the books are exchanged, receiver is expected to send and email confirming the collection mentioning donors Name
                        5. System is updated according to close the requirements.
                    </p>
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

export default ReUseBooksApp;