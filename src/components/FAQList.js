import React, {useState} from "react";
import FAQ from "./FAQ";

const FAQList = (props) => {

    const [selectedQuestionId, setSelectedQuestionId] = useState(null)

    const faqs = props.data.map(faq => {

        return (
            <FAQ 
                key={faq.id}
                data={faq}
                selected={selectedQuestionId}
                selectHandler= {setSelectedQuestionId}
            />
        )
    })

    return (
        <>
            {faqs}
        </>
    )
}
export default FAQList