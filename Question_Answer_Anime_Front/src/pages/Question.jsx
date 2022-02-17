import React, {useState} from 'react';
import ReactPlayer from "react-player";

const Question = (props) => {

    return (
        <div>
            <h1 className="text-black text-center mt-3">
                {"Question numéro 1 sur"}
            </h1>
            <h2 className="text-black text-center mt-3 mb-3">Qui est ce personnage ?</h2>
            <ReactPlayer url="https://media.trace.moe/video/21034/%5BLeopard-Raws%5D%20Gochuumon%20wa%20Usagi%20Desu%20ka%202nd%20-%2001%20RAW%20(KBS%201280x720%20x264%20AAC).mp4?t=290.625&token=AnrHqEaHe5nW7Ce9BXiEUWUmLPA" controls={true} />
            <div className="row mt-3">
                <div className="col-lg">
                    <button type="button" className="btn btn-primary container">Jouer !</button>
                </div>
                <div className="col-lg test1">
                    <button type="button" className="btn btn-primary container">Créer un question !</button>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg">
                    <button type="button" className="btn btn-primary container">Jouer !</button>
                </div>
                <div className="col-lg test1">
                    <button type="button" className="btn btn-primary container">Créer un question !</button>
                </div>
            </div>
        </div>
    )
};

export  default Question;
