
import React from 'react'

// Styles


const DetailTask = ({ data }) => {

    const { name, description, date } = data

    return (
        <div>
            <h4><u>{ name }</u></h4>
            <p>{ description }</p>
            <p><i>{ date }</i></p>
        </div>
    )

}

export default DetailTask