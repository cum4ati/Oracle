import React from "react";
import Shakespeare from "./Shakespeare";

class MainApp extends React.Component<{}, { pageToDisplay: string }> {
    constructor(props: any) {
        super(props);
        this.state = {pageToDisplay: 'shake'};
    }


    render() {
        const pageToDisplay = this.state.pageToDisplay;
        const shakespear = new Shakespeare({})

        if (pageToDisplay == 'shake') {
            return (
                <div>
                    {<Shakespeare/>}
                </div>
            )
        } else {
            return <h1>"Bye"</h1>
        }

    }

}

export default MainApp