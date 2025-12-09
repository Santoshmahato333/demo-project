'use client';
import React, { useState } from 'react';

const InnerComponent=()=>{
    return(
        <div>
            <h1> this is inner Component</h1>
        </div>
    )
}

const Event = () => {
    const apple = () => {
        alert('fruit');
    }
    const cauliflower = (item: string) => {
        alert(item);
    }
    const [name, setName]=useState('ram');
    const changeName=()=>{
        setName('shyam');
    }

    return (
        <div style={{ marginLeft: '50px', marginTop: '20px', border: '1px solid black', padding: '10px' }}>
            <div>Event function and state {name}</div>
            <div style={{ margin: '10px' }}>
                <button onClick={apple}>Click Me</button>
                <button onClick={() => {
                    alert("hello ");
                }}>
                    Say Hello
                </button>
                <button onClick={() => cauliflower("vegitable")}>
                    Say Vegetable
                </button>
                <button onClick={()=>changeName()}>
                    Change Name
                </button>
            </div>
            <InnerComponent />
        </div>
    )
}

export default Event;