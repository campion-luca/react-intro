import { Component } from "react"

class ImageComponent extends Component {
    render() {
        return (
            <img src={this.props.srcinput} alt={this.props.altinput} />
        )
    }
}

export default ImageComponent