import './SectionTitle.css'
import React from 'react'

const SectionTitle = props => (
    <div className="SectionTitle">
        <h3>{props.title}</h3>
        <div>{props.children}</div>
    </div>
)

export default SectionTitle