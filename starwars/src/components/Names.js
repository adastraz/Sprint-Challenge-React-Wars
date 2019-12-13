import React from 'react'
import styled from 'styled-components'
import Info from './Info'

const SectionCSS = styled.section`
display:flex;
justify-content: space-around;
color: aqua;
background:lightcoral;
opacity:40%;
`

const HeaderCSS = styled.h2`
color:lightcyan;
font-weight:bold;
`
const Names = (props) => {
    return (
        <>
            <HeaderCSS>{props.name.name}</HeaderCSS>
            <SectionCSS>
               <Info name = {props.name}/>
            </SectionCSS>
        </>
    )
}

export default Names