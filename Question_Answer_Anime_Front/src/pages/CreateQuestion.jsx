import React, { Component } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';

import ReactPlayer from 'react-player'

class CreateQuestion extends Component {
    // constructor(props) {
    //     super(props)
    //
    //     this.state = {
    //         video: [],
    //         videoUrl: '',
    //     }
    // }

    async getVideo(urlImage) {
        const url = "https://api.trace.moe/search?url=" + urlImage
        await axios.get(url)
            .then(response => {
                console.log(response.data['result'][0]['video'])
                this.setState({url: response.data['result'][0]['video']})
            })


            .catch(error => {
                console.log(error)
            })
    }

    async addQuestion(credentials) {
        const url = `http://127.0.0.1:8000/api/question`
        // await axios.get("http://127.0.0.1:8000/api/posts/12")
        //     .then(response => {
        //         console.log(response)
        //         this.setState({post: response.data['hydra:member']})
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        await axios
            .post(url, credentials);
    }

    async getVideo(urlImage) {
        const url = "https://api.trace.moe/search?url=" + urlImage
        await axios.get(url)
            .then(response => {
                console.log(response.data['result'][0]['video'])
                this.setState({url: response.data['result'][0]['video']})
            })


            .catch(error => {
                console.log(error)
            })
        }

    constructor(props){
        super(props);

        this.state = {
            inputValue : "",
            url:"",
            video:[]
        }
    }

    handleChange = (event)=>{
        this.setState({inputValue : event.target.value})
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.getVideo(this.state.inputValue);
        // this.setState({url: this.video['result'][0]['video']})
    }

    render () {
        return(
        <div className="center">
            <h1 className="text-black text-center mt-3">
                Création d'une question
            </h1>
            <form className="form-profile text-black container" onSubmit={this.handleSubmit}>
                <div className="form-group my-2">
                    <label htmlFor="question">Question :</label><input
                    type="text"
                    name="question"
                    className="form-control"
                    id="question"
                />
                </div>
                <label htmlFor="answer1">Reponse 1 :</label>
                <div className="form-group my-2 input-group">
                    <input
                    type="text"
                    name="answer1"
                    className="form-control"
                    id="answer1"
                    />
                    <input type="radio" name="goodAnswer"/>
                </div>
                <label htmlFor="answer2">Reponse 2 :</label>
                <div className="form-group my-2 input-group">
                    <input
                    type="text"
                    name="answer2"
                    className="form-control"
                    id="answer2"
                    // placeholder="mail@mail.fr"
                    />
                    <input type="radio" name="goodAnswer" />
                </div>
                <label htmlFor="answer3">Reponse 3 :</label>
                <div className="form-group my-2 input-group">
                    <input
                    type="text"
                    name="answer3"
                    className="form-control"
                    id="answer3"
                    // placeholder="mail@mail.fr"
                    />
                    <input type="radio" name="goodAnswer" />
                </div>
                <label htmlFor="answer4">Reponse 4 :</label>
                <div className="form-group my-2 input-group">
                    <input
                        type="text"
                        name="answer4"
                        className="form-control"
                        id="answer4"
                        // placeholder="Mot de passe"
                    />
                    <input type="radio" name="goodAnswer" />
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
                           aria-label="Recipient's username" aria-describedby="button-addon2"
                           onChange={this.handleChange}/>
                        <button className="btn btn-primary" type="submit" id="button-addon2">Valider</button>
                </div>

                {/*<video width="320" height="240" controls className="horizontal-center">*/}
                {/*    <source src={this.videoUrl} type="video/ogg"/>*/}
                {/*</video>*/}
                <div className="horizontal-center" >
                    <ReactPlayer classname="center" url={this.state.url} controls={true} />
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-outline-primary">
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
