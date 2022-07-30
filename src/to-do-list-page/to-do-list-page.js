import * as React from 'react';
import ToDoHeader from './todo-header/todo-header';

export default function ToDoListPage() {

    return (
        <>
            <ToDoHeader />
            <div style={{ height: '100%', background: '#5B5E60' }}>
                <div style={{ width: '50%' }}>
                    <img src="./login-page/login-image.png" alt="login_image" width={"100%"} height={'100%'} />
                </div>
                <div style={{ width: '50%', background: 'linear-gradient(to bottom, #754E95 0%, #362F5A 100%)' }}>
                    <div style={{ margin: '30% 15%', /* background: 'red' */ }}>
                        <h1 style={{ fontSize: '40px', color: 'white', fontWeight: 'normal' }}>Time to work!</h1>
                        <p style={{ fontSize: '10px', color: '#C6BAD2', margin: '0px 0px 0px 8px' }}>Email</p>
                        <input
                            style={{ width: '80%', height: '20px', fontSize: '10px', padding: '0px 0px 0px 4px', margin: '-3px 0px 0px 9px', backgroundColor: '#222222', color: '#9B9B9B', borderRadius: '3px', border: '0px' }}
                            type="text"
                            id="email"
                            name="email"
                        />
                        <p style={{ fontSize: '10px', color: '#C6BAD2', margin: '14px 0px 0px 8px' }}>Password</p>
                        <input
                            style={{ width: '80%', height: '20px', fontSize: '10px', padding: '0px 0px 0px 4px', margin: '-3px 0px 0px 9px', backgroundColor: '#222222', color: '#9B9B9B', borderRadius: '3px', border: '0px' }}
                            type="password"
                            id="password"
                            name="password"
                        />
                        <br></br>
                    </div>
                </div>
            </div>
        </>
    );
};
