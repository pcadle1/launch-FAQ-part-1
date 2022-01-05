import React, {useState} from 'react'

const FAQ = (props) => {

    const handleSelect = () => {
        props.selectHandler(props.data.id)
    }

    let faName = 'fas fa-plus-square'
    let answer = null
    if(props.data.id === props.selected){
        faName = 'fas fa-minus-square green'
        answer = props.data.answer
    }

    return(
        <div className="faq">
            <p>
                <i className={faName} onClick={handleSelect}></i>
                {props.data.question}
            </p>
            <p className="answer">{answer}</p>
        </div>
    )
}

export default FAQ