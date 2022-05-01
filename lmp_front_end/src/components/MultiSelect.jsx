import React from "react";

function MultiSelect({
    index_ans,
    questionObj,
    answer,
    handleChange
}) {
    return (
        <div key={index_ans}>
            <input
                key={index_ans}
                type="checkbox"
                name={questionObj.queno}
                value={answer.que_options}
                checked={!!answer.selected}
                onChange={handleChange}
            />
            {answer.que_options}
        </div>
    )
}

export default MultiSelect;