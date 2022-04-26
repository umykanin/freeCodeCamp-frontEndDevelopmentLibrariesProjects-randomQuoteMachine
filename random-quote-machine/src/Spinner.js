import React from "react";
import './Spinner.css'

class Spinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="spinner-container"></div>
        )
    }
}
export { Spinner };