import React, { useState } from 'react'

function TextUtils(props) {
    const [text,setText] = useState();
    return (
        <>
        <div className='d-flex flex-column mb-3 align-items-start gap-2 mt-5'>
            <textarea onChange={(event)=>{setText(event.target.value)}} value={text} name="textutils" id="text" placeholder='Enter Some texts' style={{backgroundColor:props.theme,color:props.fontcolor}} rows={10} cols={100}></textarea>
            <div className='d-flex gap-2'>
            <button className='btn btn-primary' onClick={()=>setText(text.toUpperCase())}>UpperCase</button>
            <button className='btn btn-primary' onClick={()=>setText(text.toLowerCase())}>LowerCase</button>
            <button className='btn btn-primary' onClick={()=>{setText('')}}>Clean</button>
            </div>
            <p>{text}</p>
        </div>
        </>
    )
}

export default TextUtils;