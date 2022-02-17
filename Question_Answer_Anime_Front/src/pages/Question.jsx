import React, {Component} from 'react';
import ReactPlayer from "react-player";
import axios from "axios";
import CreateQuestion from "./CreateQuestion";

class Question extends Component {

    constructor(props) {
        super(props)

        this.state = {
            question: [],
        }
    }

    async componentDidMount() {
        await this.getQuestion();
    }

    async getQuestion() {
        // console.log(pageNumber)

            const url = "https://127.0.0.1:8000/api/questions"
        // console.log(config)
        await axios.get(url)
            .then(response => {
                console.log(response.data['hydra:member'][0]['answer1'])
                this.setState({question: response.data['hydra:member'][0]})
                // this.setState({pageNumberMax: Math.ceil(response.data['hydra:totalItems']/10)})
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const {question} = this.state
        // const history = useHistory()
        return (
            <div>
                {/*<h1 className="text-black text-center mt-3">*/}
                {/*    {"Question numéro 1 sur"}*/}
                {/*</h1>*/}
                <h2 className="text-black text-center mt-3 mb-3">{question['question']}</h2>
                <ReactPlayer
                    // url="https://media.trace.moe/video/21034/%5BLeopard-Raws%5D%20Gochuumon%20wa%20Usagi%20Desu%20ka%202nd%20-%2001%20RAW%20(KBS%201280x720%20x264%20AAC).mp4?t=290.625&token=AnrHqEaHe5nW7Ce9BXiEUWUmLPA"
                    url={question['videoUrl']}
                    controls={true}/>
                <div className="row mt-3">
                    <div className="col-lg">
                        <button type="button" className="btn btn-primary container">{question['answer1']}</button>
                    </div>
                    <div className="col-lg test1">
                        <button type="button" className="btn btn-primary container">{question['answer2']}</button>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg">
                        <button type="button" className="btn btn-primary container">{question['answer3']}</button>
                    </div>
                    <div className="col-lg test1">
                        <button type="button" className="btn btn-primary container">{question['answer4']}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export  default Question;
