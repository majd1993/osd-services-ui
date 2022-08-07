import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ToDoBody from './todo-body/todo-body';
import ToDoHeader from './todo-header/todo-header';

export default function ToDoListPage() {
    const { state } = useLocation();
    const { email } = state;

    const [displayCloseIcon, setDisplayCloseIcon] = useState(false);
    const [displayWarningMessage, setDisplayWarningMessage] = useState(true);

    return (
        <>
            <ToDoHeader
                email={email}
                displayCloseIcon={displayCloseIcon}
                setDisplayCloseIcon={setDisplayCloseIcon}
                displayWarningMessage={displayWarningMessage}
                setDisplayWarningMessage={setDisplayWarningMessage}
            />
            <ToDoBody
                email={email}
                displayWarningMessage={displayWarningMessage}
            />
        </>
    );
};
