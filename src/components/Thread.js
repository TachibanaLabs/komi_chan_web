import React, {Component, Fragment} from 'react';
import Comment from './Comment';
import CreateComment from './CreateComment';

class Thread extends Component {

    state = {
        name: "",
        message: "",
        imageUrl: "",
        comments: []
    };

    componentDidMount() {
        this.setState(
            {
                name: "Juanito",
                message: "Memes",
                imageUrl: "https://bulma.io/images/placeholders/128x128.png",
                comments: [
                    {
                        name: "Juanito",
                        message: "Memes1",
                        imageUrl: "https://bulma.io/images/placeholders/128x128.png"
                    },
                    {
                        name: "Juanito",
                        message: "Memes2",
                        imageUrl: "https://bulma.io/images/placeholders/128x128.png"
                    }
                ]
            }
        )
    }

    pushNewComment = (comment) => {
        console.log(this.state);
        let comments = [...this.state.comments];
        comments.push({
            name: "yo",
            message: comment,
            imageUrl: "https://bulma.io/images/placeholders/128x128.png"
        });
        this.setState({comments})
    };

    removeComment = (comment) => {

    };

    render() {
        const {name, message, imageUrl, comments} = this.state;
        return (
            <Fragment>
                <article className="media">
                    <figure className="media-left">
                        <p className="image is-64x64">
                            <img src={imageUrl}/>
                        </p>
                    </figure>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{name}</strong>
                                <br/>{message}<br/>
                            </p>
                        </div>
                        {comments.map((comment, index) => this.renderComment(comment, index))}
                    </div>
                </article>
                <CreateComment action={this.pushNewComment}/>
            </Fragment>
        );
    }

    renderComment = (comment, index) => {
        const {name, message, imageUrl} = comment;
        return (
            <Comment key={index} name={name} message={message} imageUrl={imageUrl} action={this.removeComment}/>
        )
    }
}

export default Thread;
