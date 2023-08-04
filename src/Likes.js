import { Component } from "react";
import heartImg from "./heart.jpg";
import heartTwo from "./heart2.jpg";


export class Likes extends Component {
    state = {
        CTA: "LIKE US!",
        changeImg: heartImg
    }

    likeClicked = () => {
        console.log("clicked")
        this.setState({
                CTA: "Thank you, we like you too!",
                changeImg: heartTwo
        }
        )
    }
    
    render() {
        return <div>
                <div>
                    <h1>{this.state.CTA}</h1>
                </div>
                
                <div>
                    <img onClick={this.likeClicked} src={this.state.changeImg} alt="heart niop for likes" width="80px" />
                </div>
                
            </div>
    }
}