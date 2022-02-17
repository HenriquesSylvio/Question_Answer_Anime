import React, {useState} from 'react';

const NumberQuestion = ({history}) => {
    const [values] = useState({
        numberQuestion: '',
    });

    return (
        <div>
            <h1 className="text-black text-center mt-3">
                Choisissez le nombre de question
            </h1>
            <input
                type="number"
                className="form-control"
                name="numberQuestion"
                id="numberQuestion"
                // value={values.numberQuestion}
            />
            <div className="modal-footer">
                <a href={"#/question/5"}>
                    <button type="submit" className="btn btn-outline-primary">
                        Valider
                    </button>
                </a>
            </div>
        </div>
    )
};

export  default NumberQuestion;
