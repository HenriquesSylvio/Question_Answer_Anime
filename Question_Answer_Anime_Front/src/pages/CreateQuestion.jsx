import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';

import ReactPlayer from 'react-player'
import {getVideo} from "../services/getVideo";

const CreateQuestion = ({history}) => {{

    const [values, setValues] = useState({
        question: '',
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: '',
        videoUrl: '',
        url:''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    useEffect(async () => {
            // if (Object.keys(errors).length === 0 && isSubmitting) {
                console.log(values);
                try {

                    // const response = await addQuestion(values);
                    // history.replace('/login')
                    // toast.success('Création du compte réussi ! 😄')
                } catch ({response}) {
                    // toast.error(response.data.violations[0].message + " ! 😃")
                    //"Un problème est survenu lors de la création de votre compte, veuillez réessayer ! 😃"
                    // console.log(response.data.violations[0].message)
                }
            // }
        }
    );

    const handleClick = (event)=> {
        event.preventDefault();
        const urlVideo = getVideo("https://bleachmx.fr/wp-content/uploads/Demon-Slayer-Kimetsu-No-Yaiba-Saison-2-episode-14-780x439.jpg")
    }
        return(
        <div className="center">
            <h1 className="text-black text-center mt-3">
                Création d'une question
            </h1>
            <form className="form-profile text-black container" >
                <div className="form-group my-2">
                    <label htmlFor="question">Question :</label><input
                    type="text"
                    name="question"
                    className="form-control"
                    id="question"
                    value={values.question}
                    onChange={handleChange}
                />
                </div>
                <label htmlFor="answer1">Reponse 1 :</label>
                <div className="form-group my-2 input-group">
                    <input
                    type="text"
                    name="answer1"
                    className="form-control"
                    id="answer1"
                    value={values.answer1}
                    onChange={handleChange}
                    />
                    <input type="radio" name="goodAnswer" id="1"/>
                </div>
                <label htmlFor="answer2">Reponse 2 :</label>
                <div className="form-group my-2 input-group">
                    <input
                    type="text"
                    name="answer2"
                    className="form-control"
                    id="answer2"
                    // placeholder="mail@mail.fr"
                    value={values.answer2}
                    onChange={handleChange}
                    />
                    <input type="radio" name="goodAnswer" id="2" />
                </div>
                <label htmlFor="answer3">Reponse 3 :</label>
                <div className="form-group my-2 input-group">
                    <input
                    type="text"
                    name="answer3"
                    className="form-control"
                    id="answer3"
                    // placeholder="mail@mail.fr"
                    value={values.answer3}
                    onChange={handleChange}
                    />
                    <input type="radio" name="goodAnswer" id="3" />
                </div>
                <label htmlFor="answer4">Reponse 4 :</label>
                <div className="form-group my-2 input-group">
                    <input
                        type="text"
                        name="answer4"
                        className="form-control"
                        id="answer4"
                        value={values.answer4}
                        onChange={handleChange}
                        // placeholder="Mot de passe"
                    />
                    <input type="radio" name="goodAnswer" id="4" />
                </div>
                {/*<div className="form-group my-2">*/}
                {/*    <label>Url image :</label>*/}
                {/*    <input*/}
                {/*        type="text"*/}
                {/*        name="answer4"*/}
                {/*        className="form-control"*/}
                {/*        id="answer4"*/}
                {/*        // value={values.UrlImage}*/}
                {/*        // onChange={ e => this.getVideo(e.target.value)}*/}
                {/*        onChange={this.handleChange}*/}
                {/*        // placeholder="Mot de passe"*/}
                {/*    />*/}
                {/*</div>*/}
                {/*<button>*/}
                {/*    valider*/}
                {/*</button>*/}

                <label>Url image :</label>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Recipient's username"
                           aria-label="Recipient's username" aria-describedby="button-addon2" name="imageUrl" value={values.imageUrl}
                           onChange={handleChange}/>
                        <button className="btn btn-primary" type="button" id="button-addon2" onClick={handleClick}>Valider</button>
                </div>

                {/*<video width="320" height="240" controls className="horizontal-center">*/}
                {/*    <source src={this.videoUrl} type="video/ogg"/>*/}
                {/*</video>*/}
                <div className="horizontal-center" >
                    <ReactPlayer classname="center" url= controls={true} />
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-outline-primary">
                        Créer la question
                    </button>
                </div>
            </form>
            {/*<h2 className="text-black text-center mt-3">*/}
            {/*    Voulez-vous :*/}
            {/*</h2>*/}
            {/*<div className="row">*/}
            {/*    <div className="col-lg test1">*/}
            {/*        <button type="button" className="btn btn-primary container">Jouer !</button>*/}
            {/*    </div>*/}
            {/*    <div className="col-lg test1">*/}
            {/*        <button type="button" className="btn btn-primary container">Créer un question !</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
        )
    }

};

export  default CreateQuestion;
