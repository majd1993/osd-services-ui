import * as React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {

    return (
        <div style={{ display: 'flex', width: '1920px', height: '1080px', overflow: 'hidden' }}>
            <div style={{ width: '938px', height: '1080px', background: '#212121' }}>
                <img src="./login-page/Logo.png" alt="logo" width={"548px"} height={'333px'} style={{ position: 'absolute', top: '250px', left: '200px' }} />
                <img src="./login-page/Woman.png" alt="woman" width={"200.93px"} height={'401.5px'} style={{ position: 'absolute', top: '678.5px', left: '0px' }} />
                <img src="./login-page/Man.png" alt="man" width={"545.27px"} height={'435.02px'} style={{ position: 'absolute', top: '644.98px', left: '392.73px' }} />
            </div>
            <div style={{ width: '982px', height: '1080px', background: 'linear-gradient(to bottom, #754E95 0%, #362F5A 100%)' }}>
                <div style={{ margin: '30% 15%' }}>
                    <span
                        style={{
                            position: 'absolute', top: '250px', left: '1188px', width: '416px', height: '81px',
                            fontWeight: '100', fontSize: '72px', color: 'white'
                        }}
                    >
                        {'Time to work!'}
                    </span>
                    <span
                        style={{
                            position: 'absolute', top: '374px', left: '1201px', width: '513.5px', height: '24px',
                            fontWeight: '100', fontSize: '16px', color: 'white'
                        }}
                    >
                        {'Email'}
                    </span>
                    <input
                        style={{
                            position: 'absolute', top: '400px', left: '1201px', width: '534px', height: '38px',
                            fontWeight: '100', fontSize: '16px', color: 'white', borderRadius: '5px', backgroundColor: '#222222',
                            /* width: '80%', height: '20px', fontSize: '10px', padding: '0px 0px 0px 4px',
                            margin: '-3px 0px 0px 9px', backgroundColor: '#222222', color: '#9B9B9B', borderRadius: '3px', border: '0px' */
                        }}
                        type="text"
                        id="email"
                        name="email"
                    />
                    <span
                        style={{
                            position: 'absolute', top: '469px', left: '1201px', width: '513.5px', height: '24px',
                            fontWeight: '100', fontSize: '16px', color: 'white'
                        }}
                    >
                        {'Password'}
                    </span>
                    <input
                        style={{
                            position: 'absolute', top: '495px', left: '1201px', width: '534px', height: '38px',
                            fontWeight: '100', fontSize: '16px', color: 'white', borderRadius: '5px', backgroundColor: '#222222',
                            /* width: '80%', height: '20px', fontSize: '10px', padding: '0px 0px 0px 4px',
                            margin: '-3px 0px 0px 9px', backgroundColor: '#222222', color: '#9B9B9B', borderRadius: '3px', border: '0px' */
                        }}
                        type="password"
                        id="password"
                        name="password"
                    />
                    <br></br>
                    <button
                        style={{
                            position: 'absolute', top: '577px', left: '1201px', width: '564px', height: '38px',
                            fontWeight: 'bold', backgroundColor: '#B6A3C2', border: '0px',
                            textAlign: 'center', borderRadius: '15px',
                            /* padding: '3px 0px 0px 0px',
                            width: '81%', height: '18px', fontSize: '10px', fontWeight: 'bold', margin: '25px 0px 0px 9px',
                            textAlign: 'center', backgroundColor: '#B6A3C2', color: '#504471', borderRadius: '15px', border: '0px' */
                        }}
                    >
                        <Link to="/todolist" style={{ textDecoration: 'none', fontSize: '18px', color: '#403564', padding: '3px 0px 0px 0px' }}>SIGN IN</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};
