import React from "react";
import {Button} from "react-bootstrap";
import ReactDOM from "react-dom";

class APIButton extends React.Component<{}, { APIEndpoint: string }> {
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    constructor(props: any) {
        super(props);
        this.state = {APIEndpoint: "http://localhost:8000/"}
    }
    handleClick = () => {
        console.log('this is:', this);
        fetch(this.state.APIEndpoint).then(response => response.json()).then(data => console.log(data))
        // @ts-ignore
        let field = ReactDOM.findDOMNode()
        console.log(field)
    }

    render() {
        return (
            <Button onClick={this.handleClick} variant="dark">
                Click me
            </Button>
        );
    }
}
export default APIButton