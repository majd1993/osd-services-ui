import React, { useState } from 'react';

export default function ToDoBody(props) {
  const {
    serachValue,
    displayWarningMessage,
    allToDoLists, setAllToDoLists
  } = props;

  const [draggedItem, setDraggedItem] = useState(false);
  const [changingValueInsideCard, setChangingValueInsideCard] = useState(false);

  const importanceStyles = {
    Low: { background: '#39AC95', width: '44px' },
    Medium: { background: '#FE913E', width: '66px' },
    High: { background: '#DC3545', width: '46px' },
  };

  const onDragOver = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  const onDrop = (newStatus) => {
    const { id, status } = draggedItem;
    if (newStatus !== status) {
      let newAllToDoLists = { ...allToDoLists };
      //move (add to new staus and delete from its old status) the todo item to the new status
      newAllToDoLists = {
        ...newAllToDoLists,
        [newStatus]: [...newAllToDoLists[newStatus], draggedItem],//add to new status
        [status]: newAllToDoLists[status].filter((item) => item.id !== id),//delete from old status
      }
      setAllToDoLists({ ...newAllToDoLists })

    }
  };



  const updateCard = (index, status, inputName, newValue) => {
    let newAllToDoLists = { ...allToDoLists };
    let newListOfThisStatus = [...newAllToDoLists[status]];

    newListOfThisStatus[index] = { ...newListOfThisStatus[index], [inputName]: newValue };
    newAllToDoLists = {
      ...newAllToDoLists,
      [status]: [...newListOfThisStatus],
    };

    setAllToDoLists({ ...newAllToDoLists })
  };

  const cardTitleHTML = (index, status, id, title) => {
    let isEditing = changingValueInsideCard &&
      changingValueInsideCard.status === status &&
      changingValueInsideCard.id === id &&
      changingValueInsideCard.inputName === 'title';

    return (
      <div
        style={{ display: 'flex', width: '367.74px', height: '43.5px' }}
      >
        {isEditing
          ? <input
            style={{
              width: '367.74px', height: '33px', fontSize: '13px', fontWeight: '400', borderRadius: '7px',
              color: '#000000', margin: '8.5px 0px 0px 14.19px', letterSpacing: '0px',
            }}
            type="text"
            autoFocus
            value={changingValueInsideCard.newValue}
            onChange={(event) => setChangingValueInsideCard({ ...changingValueInsideCard, newValue: event.target.value })}
            onBlur={() => { updateCard(index, status, 'title', changingValueInsideCard.newValue); setChangingValueInsideCard(false); }}
          />
          : <span
            style={{
              width: '367.74px', height: '43.5px', fontSize: '16px', fontWeight: '400',
              color: '#FFFFFF', margin: '15.5px 0px 0px 14.19px', letterSpacing: '0px',
            }}
            onClick={() => setChangingValueInsideCard({ status, id, inputName: 'title', newValue: title })}
          >
            {title}
          </span>
        }
      </div>
    );
  };

  const cardCategoryHTML = (index, status, id, Category) => {
    let isEditing = changingValueInsideCard &&
      changingValueInsideCard.status === status &&
      changingValueInsideCard.id === id &&
      changingValueInsideCard.inputName === 'Category';

    return (
      <div
        style={{ display: 'flex', width: '367.74px', height: '17px', margin: '18px 0px 0px 14.19px', }}
        onClick={() => setChangingValueInsideCard({ status, id, inputName: 'Category', newValue: Category })}
      >
        <span
          style={{
            width: '101.15px', height: '14px', fontSize: '13px', fontWeight: '200',
            color: '#6C757D', letterSpacing: '0px',
          }}
        >
          {"Category"}
        </span>
        {isEditing
          ? <input
            style={{
              width: '367.74px', height: '30px', fontSize: '14px', fontWeight: '400', borderRadius: '7px',
              color: '#000000', margin: '-7px 0px 0px 14.19px', letterSpacing: '0px',
            }}
            type="text"
            autoFocus
            value={changingValueInsideCard.newValue}
            onChange={(event) => setChangingValueInsideCard({ ...changingValueInsideCard, newValue: event.target.value })}
            onBlur={() => { updateCard(index, status, 'Category', changingValueInsideCard.newValue); setChangingValueInsideCard(false); }}
          />
          : <span
            style={{
              height: '17px', fontSize: '14px', fontWeight: '200',
              color: '#FFFFFF', letterSpacing: '0px',
            }}
          >
            {Category}
          </span>
        }
      </div>
    );
  };

  const cardDueDateHTML = (index, status, id, DueDate) => {
    let isEditing = changingValueInsideCard &&
      changingValueInsideCard.status === status &&
      changingValueInsideCard.id === id &&
      changingValueInsideCard.inputName === 'DueDate';

    return (
      <div
        style={{ display: 'flex', width: '367.74px', height: '17px', margin: '18px 0px 0px 14.19px', }}
        onClick={() => setChangingValueInsideCard({ status, id, inputName: 'DueDate', newValue: DueDate })}
      >
        <span
          style={{
            width: '101.15px', height: '14px', fontSize: '13px', fontWeight: '200',
            color: '#6C757D', letterSpacing: '0px',
          }}
        >
          {"Due Date"}
        </span>
        {isEditing
          ? <input
            style={{
              width: '367.74px', height: '30px', fontSize: '14px', fontWeight: '400', borderRadius: '7px',
              color: '#000000', margin: '-7px 0px 0px 14.19px', letterSpacing: '0px',
            }}
            type="date"
            autoFocus
            value={changingValueInsideCard.newValue}
            onChange={(event) => setChangingValueInsideCard({ ...changingValueInsideCard, newValue: event.target.value })}
            onBlur={() => { updateCard(index, status, 'DueDate', changingValueInsideCard.newValue); setChangingValueInsideCard(false); }}
          />
          : <span
            style={{
              height: '17px', fontSize: '14px', fontWeight: '200',
              color: '#FFFFFF', letterSpacing: '0px',
            }}
          >
            {DueDate}
          </span>
        }
      </div>
    );
  };

  const cardEstimateHTML = (index, status, id, Estimate) => {
    let isEditing = changingValueInsideCard &&
      changingValueInsideCard.status === status &&
      changingValueInsideCard.id === id &&
      changingValueInsideCard.inputName === 'Estimate';

    return (
      <div
        style={{ display: 'flex', width: '367.74px', height: '17px', margin: '18px 0px 0px 14.19px', }}
        onClick={() => setChangingValueInsideCard({ status, id, inputName: 'Estimate', newValue: Estimate })}
      >
        <span
          style={{
            width: '101.15px', height: '14px', fontSize: '13px', fontWeight: '200',
            color: '#6C757D', letterSpacing: '0px',
          }}
        >
          {"Due Date"}
        </span>
        {isEditing
          ? <input
            style={{
              width: '367.74px', height: '30px', fontSize: '14px', fontWeight: '400', borderRadius: '7px',
              color: '#000000', margin: '-6px 0px 0px 14.19px', letterSpacing: '0px',
            }}
            type="text"
            autoFocus
            value={changingValueInsideCard.newValue}
            onChange={(event) => setChangingValueInsideCard({ ...changingValueInsideCard, newValue: event.target.value })}
            onBlur={() => { updateCard(index, status, 'Estimate', changingValueInsideCard.newValue); setChangingValueInsideCard(false); }}
          />
          : <span
            style={{
              height: '17px', fontSize: '14px', fontWeight: '200',
              color: '#FFFFFF', letterSpacing: '0px',
            }}
          >
            {Estimate}
          </span>
        }
      </div>
    );
  };

  const cardImportanceHTML = (index, status, id, Importance) => {
    let isEditing = changingValueInsideCard &&
      changingValueInsideCard.status === status &&
      changingValueInsideCard.id === id &&
      changingValueInsideCard.inputName === 'Importance';

    return (
      <div
        style={{ display: 'flex', width: '367.74px', height: '17px', margin: '18px 0px 0px 14.19px', }}
        onClick={() => setChangingValueInsideCard({ status, id, inputName: 'Importance', newValue: Importance })}
      >
        <span
          style={{
            width: '101.15px', height: '14px', fontSize: '13px', fontWeight: '200',
            color: '#6C757D', letterSpacing: '0px',
          }}
        >
          {"Importance"}
        </span>
        {isEditing
          ? <select
            name="cars" id="cars"
            style={{
              width: '367.74px', height: '30px', fontSize: '14px', fontWeight: '400', borderRadius: '7px',
              color: '#000000', margin: '-5px 0px 0px 14.19px', letterSpacing: '0px',
            }}
            value={changingValueInsideCard.newValue}
            onChange={(event) => { updateCard(index, status, 'Importance', event.target.value); setChangingValueInsideCard(false); }}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          : Importance &&
          <div style={{ background: '#FE913E', height: '30px', borderRadius: '4px', textAlign: 'center', ...importanceStyles[Importance] }}>
            <span
              style={{
                height: '30px', fontSize: '13px', fontWeight: '200',
                color: '#FFFFFF', letterSpacing: '0px', marginTop: '12px'
              }}
            >
              {Importance}
            </span>
          </div>
        }
      </div>
    );
  };

  const cardHTML = (status) => {
    return (
      <>
        {allToDoLists &&
          allToDoLists[status] &&
          allToDoLists[status].map((item, index) => {
            const { id, title, Category, DueDate, Estimate, Importance } = item;
            const marginTop = index > 0 ? '20px' : '10px';

            return (
              <div key={index}>
                {<div
                  style={{
                    width: '418.28px', height: '213.37px', borderRadius: '6px',
                    background: serachValue && item.title.toLowerCase().trim().includes(serachValue.toLowerCase().trim()) ? '#103356' : '#212529',
                    marginTop: marginTop, boxShadow: '0px 3px 6px #00000029'
                  }}
                  draggable={"true"}
                  onDragStart={() => setDraggedItem({ ...item, status })}
                >
                  {cardTitleHTML(index, status, id, title)}
                  {cardCategoryHTML(index, status, id, Category)}
                  {cardDueDateHTML(index, status, id, DueDate)}
                  {cardEstimateHTML(index, status, id, Estimate)}
                  {cardImportanceHTML(index, status, id, Importance)}
                </div>
                }
              </div>
            )
          })
        }
      </>
    );
  };

  return (
    <div
      style={{
        display: 'table', width: '1920px', minHeight: '1526px', background: '#5B5E60', marginTop: displayWarningMessage ? '216px' : '148px',
        paddingBottom: '50px',/*  overflowX: 'hidden' */
      }}
    >
      <div style={{ float: 'left', minWidth: '418.28px', minHeight: '1526px', marginLeft: "34.84px" }} onDragOver={(event) => onDragOver(event)} onDrop={() => onDrop('To Do')}>
        {cardHTML('To Do')}
      </div>
      <div style={{ float: 'left', minWidth: '418.28px', minHeight: '1526px', marginLeft: "33.72px" }} onDragOver={(event) => onDragOver(event)} onDrop={() => onDrop('Doing')}>
        {cardHTML('Doing')}
      </div>
      <div style={{ float: 'left', minWidth: '418.28px', minHeight: '1526px', marginLeft: "33.72px" }} onDragOver={(event) => onDragOver(event)} onDrop={() => onDrop('Done')}>
        {cardHTML('Done')}
      </div>
    </div>
  );
};