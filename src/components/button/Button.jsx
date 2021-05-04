import React from 'react'
import './Button.scss'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'


export default function Button(props) {
    const className = [props.className]

    if (props.isPrimary) className.push("btn-primary")
    if (props.isDanger) className.push("btn-danger")
    if (props.isLarge) className.push("btn-lg")

    return (
       <button 
       className={className.join(" ")}>{props.children}</button>
    )
}

Button.prototype = {
    className: PropTypes.string,
    isLarge: PropTypes.bool,
    isPrimary: PropTypes.bool,
    isDanger: PropTypes.bool,
}
