import React from 'react';
import '../App.css';
import {Button, Form} from "react-bootstrap";


class Shakespeare extends React.Component<{}, {}> {
    state = {
        textToSummarize: "sentences",
        sentencesToReturn: 5
    };

    onSubmit = () => {
        console.log(this.state.textToSummarize);
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                text: this.state.textToSummarize,
                sentences_to_return: this.state.sentencesToReturn
            })
        }

        function onResponseFromBackend(response: any) {
            let element = document.getElementById("backendResponse")
            // @ts-ignore
            element.textContent = response.summarized
        }


        fetch('http://localhost:8000/api/paraphrase', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                onResponseFromBackend(data)
            });
    };

    componentWillMount() {
        this.onSubmit = this.onSubmit.bind(this);
        this.setState = this.setState.bind(this)
    }

    render() {
        return (
            <>
                <h1>Shakespeare</h1>
                <Form.Group className="m-0">
                    <Form.Control
                        className="textToSummarize"
                        as="textarea"
                        placeholder="Input text you want to summarize"
                        value={this.state.textToSummarize}
                        onChange={e => this.setState({textToSummarize: e.target.value})}
                        type="text"/>
                    <Form.Control
                        className="sentencesToReturn"
                        as="textarea"
                        placeholder="sentences"
                        value={this.state.sentencesToReturn}
                        onChange={e => this.setState({sentencesToReturn: e.target.value})}
                        type="number"/>
                    <Button
                        className="btnFormSend"
                        variant="outline-success"
                        onClick={this.onSubmit}>
                        Send Feedback
                    </Button>
                </Form.Group>
                <p id="backendResponse">There would be a response from backend</p>
            </>
        );
    }
}

export default Shakespeare;
