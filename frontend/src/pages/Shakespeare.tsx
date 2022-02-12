import React from 'react';
import '../Shakespeare.css';
import {Button, Container, Form, Row} from "react-bootstrap";


class Shakespeare extends React.Component<{}, {}> {
    state = {
        textToSummarize: "sentences",
        sentencesToReturn: 5
    };

    onSubmit = () => {
        const paraphraseRequestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                text: this.state.textToSummarize,
                sentences_to_return: this.state.sentencesToReturn
            })
        }

        const T5RequestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                text: this.state.textToSummarize,
                min_length: 100,
                max_length: 600,

            })
        }

        function onParaphraseResponseFromBackend(response: any) {
            let element = document.getElementById("backendResponse")
            // @ts-ignore
            element.textContent = response.summarized
            console.log(`${response.type} : ${response.summarized}`)
        }


        fetch('http://localhost:8000/api/paraphrase', paraphraseRequestOptions)
            .then(response => response.json())
            .then(data => {
                onParaphraseResponseFromBackend(data)
            });
        fetch('http://localhost:8000/api/t5_paraphrase', T5RequestOptions)
            .then(response => response.json())
            .then(data => {
                onParaphraseResponseFromBackend(data)
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
                    {/*<Container>*/}
                    {/*    <Row>*/}
                    <Form.Control
                        className="sentencesToReturn"
                        as="textarea"
                        placeholder="sentences"
                        value={this.state.sentencesToReturn}
                        onChange={e => this.setState({sentencesToReturn: e.target.value})}
                        type="number"/>

                    {/*    </Row>*/}
                    {/*</Container>*/}
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
