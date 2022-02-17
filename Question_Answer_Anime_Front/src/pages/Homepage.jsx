import React from 'react';
import { saveAs } from "file-saver";

const Homepage = ({history}) => {
    const saveFile = () => {
        saveAs(
            "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        );
    };
    return (
        <div>
            <h1 className="text-black text-center mt-3">
                Bienvenue au quiz d'animé !
            </h1>
            <h2 className="text-black text-center mt-3">
                Voulez-vous :
            </h2>
            <div className="row">
                <div className="col-lg test1">
                    <a href={"#/numberQuestion/"}>
                        <button type="submit" className="btn btn-primary container">Jouer !</button>
                    </a>
                </div>
                <div className="col-lg test1">
                    <a href={"#/createQuestion/"}>
                        <button type="button" className="btn btn-primary container">Créer une question !</button>
                    </a>
                </div>
            </div>
            <button onClick={saveFile}>download</button>
            {/*<a href='https://media.trace.moe/video/21034/%5BLeopard-Raws%5D%20Gochuumon%20wa%20Usagi%20Desu%20ka%202nd%20-%2001%20RAW%20(KBS%201280x720%20x264%20AAC).mp4?t=290.625&token=AnrHqEaHe5nW7Ce9BXiEUWUmLPA' download>Click to download</a>*/}

            {/*<table className="center">*/}
            {/*    <tr>*/}
            {/*        <td>*/}
            {/*            <div>*/}
            {/*                <button type="button" className="btn btn-primary">Jouer !</button>*/}
            {/*            </div>*/}
            {/*        </td>*/}
            {/*        <td>*/}
            {/*            <div>*/}
            {/*                <button type="button" className="btn btn-primary">Jouer !</button>*/}
            {/*            </div>*/}
            {/*        </td>*/}
            {/*    </tr>*/}
            {/*</table>*/}
        </div>
    )
};

export  default Homepage;
