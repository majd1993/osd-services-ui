import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const allowedUsers = [
    { user_email: 'majd.93.isk@gmail.com', user_password: 'majd1993' },
    { user_email: 'user.01.osd@gmail.com', user_password: 'user01' },
];

export default function LoginPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorSpan, setErrorSpan] = useState(false);


    const checkIfEmailIsCorrect = () => {
        return allowedUsers.find((userObj) => email === userObj.user_email);
    };

    const checkIfPasswordCompatibleWithEmail = () => {
        let userData = checkIfEmailIsCorrect();
        let errorSpan = false;
        if (!userData) {
            errorSpan = 'email';
        }
        else {
            let { user_password } = userData;
            if (user_password !== password) {
                errorSpan = 'password';
            }
            else {
                errorSpan = false;
                navigate("/todolist", { state: { email } });
            };
        };

        setErrorSpan(errorSpan);
    };

    // useEffect(() => {
    //     checkIfPasswordCompatibleWithEmail();
    // }, [email, password]);// eslint-disable-line

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
                        value={email}
                        onChange={(event) => { setEmail(event.target.value); setErrorSpan(false); }}
                    />
                    {errorSpan && errorSpan === 'email' &&
                        <span
                            style={{
                                position: 'absolute', top: '444px', left: '1201px', width: '448px', height: '24px',
                                fontWeight: '100', fontSize: '14px', color: '#DC3545'
                            }}
                        >
                            {'Invalid email'}
                        </span>}

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
                        value={password}
                        onChange={(event) => { setPassword(event.target.value); setErrorSpan(false); }}
                    />
                    {errorSpan && errorSpan === 'password' &&
                        <span
                            style={{
                                position: 'absolute', top: '539px', left: '1201px', width: '622px', height: '24px',
                                fontWeight: '100', fontSize: '14px', color: '#DC3545'
                            }}
                        >
                            {'Incorrect Password'}
                        </span>}

                    <br></br>
                    <button
                        style={{
                            position: 'absolute', top: '577px', left: '1201px', width: '540px', height: '38px',
                            fontWeight: 'bold', backgroundColor: '#B6A3C2', border: '0px',
                            textAlign: 'center', borderRadius: '15px', fontSize: '18px', color: '#403564', padding: '3px 0px 0px 0px'
                            /* padding: '3px 0px 0px 0px',
                            width: '81%', height: '18px', fontSize: '10px', fontWeight: 'bold', margin: '25px 0px 0px 9px',
                            textAlign: 'center', backgroundColor: '#B6A3C2', color: '#504471', borderRadius: '15px', border: '0px' */
                        }}
                        onClick={() => checkIfPasswordCompatibleWithEmail()}
                    >
                        {'SIGN IN'}
                    </button>
                </div>
            </div>
        </div>
    );
};
