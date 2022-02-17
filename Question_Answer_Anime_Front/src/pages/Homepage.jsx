import React from 'react';

const Homepage = ({history}) => {

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
