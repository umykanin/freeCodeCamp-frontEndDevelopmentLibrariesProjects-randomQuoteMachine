import React from "react";
import { HtmlInterface } from "./HtmlInterface";
import { Spinner } from "./Spinner";

class BeforeData extends React.Component {
    render() {
        return (
            <HtmlInterface
                quote={<Spinner />}
                author={<p>...</p>}
            />
        );
    }
}

export { BeforeData };