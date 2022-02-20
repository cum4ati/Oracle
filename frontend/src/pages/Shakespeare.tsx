import React from 'react';
import '../Shakespeare.css';
import {Button, Container, Form, Row} from "react-bootstrap";


class Shakespeare extends React.Component<{}, {}> {
    state = {
        textToSummarize: "sentences",
        sentencesToReturn: 5
    };

    onParaphraseResponseFromBackend(response: any) {
        let element = document.getElementById("backendResponse")
        // @ts-ignore
        element.textContent = response.summarized
        console.log(`${response.type} : ${response.summarized}`)
    }

    useSummarize = () => {
        const paraphraseRequestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                text: this.state.textToSummarize,
                sentences_to_return: this.state.sentencesToReturn
            })
        }

        fetch('http://localhost:8000/api/paraphrase', paraphraseRequestOptions)
            .then(response => response.json())
            .then(data => {
                this.onParaphraseResponseFromBackend(data)
            });
    };

    useT5 = () => {
        let min_length = Math.ceil((this.state.textToSummarize.replaceAll(".", '').replaceAll(',', '').split(' ').length) * 0.4)
        let max_length = Math.ceil((this.state.textToSummarize.replaceAll(".", '').replaceAll(',', '').split(' ').length) * 0.8)
        console.log(`minlen=${min_length}. maxlen=${max_length}`)
        const T5RequestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                text: this.state.textToSummarize,
                min_length: min_length,
                max_length: max_length,

            })
        }
        fetch('http://localhost:8000/api/t5_paraphrase', T5RequestOptions)
            .then(response => response.json())
            .then(data => {
                this.onParaphraseResponseFromBackend(data)
                console.log(data.summarized.split(" ").length)
            });
    }

    componentWillMount() {
        this.useSummarize = this.useSummarize.bind(this);
        this.useT5 = this.useT5.bind(this);
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
                        onClick={this.useSummarize}>
                        Summarize
                    </Button>
                    <Button
                        className="btnFormSend"
                        variant="outline-success"
                        onClick={this.useT5}>
                        T5 network
                    </Button>
                </Form.Group>
                <p id="backendResponse">There would be a response from backend</p>
            </>
        );
    }
}

export default Shakespeare;
