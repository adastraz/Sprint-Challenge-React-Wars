import React from 'react'

const Info = (props) => {
    return(
        <>
            <p>Hair Color : {props.name.hair_color}</p>
            <p>Skin Color : {props.name.skin_color}</p>
            <p>Height : {props.name.height}</p>
        </>
    )
}
export default Info