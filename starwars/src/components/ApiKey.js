import React from 'react'

const ApiKey = (props) => {
    return (
        <>
        <button 
        onClick = { () =>props.clickHandler(props.type) }>
            {props.content}</button>
        </>
    )
}
export default ApiKey