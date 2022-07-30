import * as React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {

    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
            <div style={{ width: '50%' }}>
                <img src="./login-page/login-image.png" alt="login_image" width={"100%"} height={'100%'} />
            </div>
            <div style={{ width: '50%', background: 'linear-gradient(to bottom, #754E95 0%, #362F5A 100%)' }}>
                <div style={{ margin: '30% 15%' }}>
                    <h1 style={{ fontSize: '40px', color: 'white', fontWeight: 'normal' }}>Time to work!</h1>
                    <p style={{ fontSize: '10px', color: '#C6BAD2', margin: '0px 0px 0px 8px' }}>Email</p>
                    <input
                        style={{
                            width: '80%', height: '20px', fontSize: '10px', padding: '0px 0px 0px 4px',
                            margin: '-3px 0px 0px 9px', backgroundColor: '#222222', color: '#9B9B9B', borderRadius: '3px', border: '0px'
                        }}
                        type="text"
                        id="email"
                        name="email"
                    />
                    <p style={{ fontSize: '10px', color: '#C6BAD2', margin: '14px 0px 0px 8px' }}>Password</p>
                    <input
                        style={{
                            width: '80%', height: '20px', fontSize: '10px', padding: '0px 0px 0px 4px',
                            margin: '-3px 0px 0px 9px', backgroundColor: '#222222', color: '#9B9B9B', borderRadius: '3px', border: '0px'
                        }}
                        type="password"
                        id="password"
                        name="password"
                    />
                    <br></br>
                    <div
                        style={{
                            padding: '3px 0px 0px 0px',
                            width: '81%', height: '18px', fontSize: '10px', fontWeight: 'bold', margin: '25px 0px 0px 9px',
                            textAlign: 'center', backgroundColor: '#B6A3C2', color: '#504471', borderRadius: '15px', border: '0px'
                        }}
                    >
                        <Link to="/todolist" style={{ textDecoration: 'none' }}>SIGN IN</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
