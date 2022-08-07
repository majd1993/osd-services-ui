import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { usersData } from '../to-do-list-data';
import ToDoBody from './todo-body/todo-body';
import ToDoHeader from './todo-header/todo-header';

export default function ToDoListPage() {
    const { state } = useLocation();
    const { email } = state;

    const { user_todo_list } = usersData.find(userObj => userObj.user_email === email);
    const [allToDoLists, setAllToDoLists] = useState(user_todo_list);

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
                allToDoLists={allToDoLists}
                setAllToDoLists={setAllToDoLists}
            />
            <ToDoBody
                displayWarningMessage={displayWarningMessage}
                allToDoLists={allToDoLists}
                setAllToDoLists={setAllToDoLists}
            />
        </>
    );
};
