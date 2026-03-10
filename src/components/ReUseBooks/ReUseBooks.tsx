import React from 'react';

const ReUseBooksApp: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', backgroundColor: '#f0f8ff', padding: '20px' }}>
            <h1 style={{ color: 'green', fontWeight: 'bold', fontSize: '2.5em', margin: '20px 0' }}>
            ReUse School Books Initiative
            </h1>
            <hr />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/books.png" alt="Books for all" style={{ width: '40%', height: 'auto', marginRight: '20px' }} />
                <div style={{ textAlign: 'left' }}>
                    <p style={{ fontSize: '1.3em' }}>It is an initiative by Green Gatherings to provide a platform for donating and receiving used textbooks. Your contribution can make a significant impact to conserve environment. 
                    <br/><b>How it works:</b><br/>
                        1. User Fills the form as Donor and./or Receiver of School books.<br/>
                        2. Once the match is found, the receiver will get the contact details of donor over an email.<br/>
                        3. Receiver is then expected to contact the donor for fixing time and place to collect the books.<br/>
                        4. Once the books are exchanged, receiver is expected to send and email confirming the collection mentioning donors Name<br/>
                        5. System is updated according to close the requirements.<br/>
                    </p>
                    <p style={{ fontSize: '1.3em' }}>After successful completion of the ReUse School Books 2025, with over 900 requirements registered with 60% of participants able to find the match for their needs, we are thrilled to announce the Launch of 2026 drive. This remarkable achievement highlights the power of community and the importance of sustainability in education. </p>
                    <br />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontSize: '2em', marginRight: '10px', animation: 'wave 1s infinite' }}>👉</span>
                         <a href="https://forms.gle/J1A3mmCGw3hWEZ5p9" target="blank" style={{ color: 'white', backgroundColor: 'blue', padding: '10px 20px', textDecoration: 'none', borderRadius: '5px', fontSize: '1.5em' }}>
                            Hyderabad-Registration for 2026 is open Now
                         </a>
                    </div>
		    	</div>
            </div>
        </div>
    );
};

export default ReUseBooksApp;


