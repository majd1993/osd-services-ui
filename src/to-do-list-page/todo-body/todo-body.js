import React, { useState } from 'react';

export default function ToDoBody(props) {
  const {
    serachValue,
    displayWarningMessage,
    allToDoLists, setAllToDoLists
  } = props;

  const [draggedItem, setDraggedItem] = useState(false);

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

  const cardHTML = (status) => {
    return (
      <>
        {allToDoLists &&
          allToDoLists[status] &&
          allToDoLists[status].map((item, index) => {
            const { title, Category, DueDate, Estimate, Importance } = item;
            const marginTop = index > 0 ? '20px' : '10px';

            return (
              <div key={index}>
                {item.title.toLowerCase().trim().includes(serachValue.toLowerCase().trim())
                  ? <div
                    style={{
                      width: '418.28px', height: '213.37px', background: '#212529', borderRadius: '6px',
                      marginTop: marginTop, boxShadow: '0px 3px 6px #00000029'
                    }}
                    draggable={"true"}
                    onDragStart={() => setDraggedItem({ ...item, status })}
                  >
                    <div style={{ display: 'flex', width: '367.74px', height: '43.5px' }}>
                      <span
                        style={{
                          width: '367.74px', height: '43.5px', fontSize: '16px', fontWeight: '400',
                          color: '#FFFFFF', margin: '15.5px 0px 0px 14.19px', letterSpacing: '0px',
                        }}
                      >
                        {title}
                      </span>
                    </div>
                    <div style={{ display: 'flex', width: '367.74px', height: '17px', margin: '18px 0px 0px 14.19px', }}>
                      <span
                        style={{
                          width: '101.15px', height: '14px', fontSize: '13px', fontWeight: '200',
                          color: '#6C757D', letterSpacing: '0px',
                        }}
                      >
                        {"Category"}
                      </span>
                      <span
                        style={{
                          height: '17px', fontSize: '14px', fontWeight: '200',
                          color: '#FFFFFF', letterSpacing: '0px',
                        }}
                      >
                        {Category}
                      </span>
                    </div>
                    <div style={{ display: 'flex', width: '367.74px', height: '17px', margin: '18px 0px 0px 14.19px', }}>
                      <span
                        style={{
                          width: '101.15px', height: '14px', fontSize: '13px', fontWeight: '200',
                          color: '#6C757D', letterSpacing: '0px',
                        }}
                      >
                        {"Due Date"}
                      </span>
                      <span
                        style={{
                          width: '101.15px', height: '17px', fontSize: '14px', fontWeight: '200',
                          color: '#FFFFFF', letterSpacing: '0px',
                        }}
                      >
                        {DueDate}
                      </span>
                    </div>
                    <div style={{ display: 'flex', width: '367.74px', height: '17px', margin: '18px 0px 0px 14.19px', }}>
                      <span
                        style={{
                          width: '101.15px', height: '14px', fontSize: '13px', fontWeight: '200',
                          color: '#6C757D', letterSpacing: '0px',
                        }}
                      >
                        {"Estimate"}
                      </span>
                      <span
                        style={{
                          height: '17px', fontSize: '14px', fontWeight: '200',
                          color: '#FFFFFF', letterSpacing: '0px',
                        }}
                      >
                        {Estimate}
                      </span>
                    </div>
                    <div style={{ display: 'flex', width: '367.74px', height: '17px', margin: '18px 0px 0px 14.19px', }}>
                      <span
                        style={{
                          width: '101.15px', height: '14px', fontSize: '13px', fontWeight: '200',
                          color: '#6C757D', letterSpacing: '0px',
                        }}
                      >
                        {"Importance"}
                      </span>
                      {Importance &&
                        <div style={{ background: '#FE913E', height: '30px', borderRadius: '4px', textAlign: 'center', ...importanceStyles[Importance] }}>
                          <span
                            style={{
                              height: '30px', fontSize: '13px', fontWeight: '200',
                              color: '#FFFFFF', letterSpacing: '0px', marginTop: '11px'
                            }}
                          >
                            {Importance}
                          </span>
                        </div>
                      }
                    </div>
                  </div>
                  : <></>
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