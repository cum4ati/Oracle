import React from 'react';
import '../App.css';
import {Button, Form} from "react-bootstrap";


class Shakespeare extends React.Component<{}, {}> {
    state = {
        val: ""
    };

    onSubmit = () => {
        console.log(this.state.val);
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({text: this.state.val})
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
                        className="textFeedback"
                        as="textarea"
                        placeholder="feedback"
                        value={this.state.val}
                        onChange={e => this.setState({val: e.target.value})}
                        type="text"/>
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
