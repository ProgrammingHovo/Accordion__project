import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"


const SingleQuestion = ({title, info}) => {
    const [ showInfo, setShowInfo ] = useState(false)
    return(
        <article className="question">
            <header class="question__header">
                <h4>{title}</h4>
                <button onClick={() => setShowInfo(!showInfo) }>{showInfo ? <FaMinus /> : <FaPlus />}</button>
            </header>
            {showInfo && <p>{info}</p>}
        </article>
    )
}

export default SingleQuestion;