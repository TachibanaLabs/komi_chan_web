import React, {Component, Fragment} from 'react';
import Comment from './Comment';
import CreateComment from './CreateComment';

class Thread extends Component {

    constructor(props) {
        super(props);

        this.pushNewComment = this.pushNewComment.bind(this);

        this.state = {
            name: "",
            message: "",
            imageUrl: "",
            comments: []
        }
    }

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

    pushNewComment() {

    }

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
                        {comments.map(comment => this.renderComment(comment))}
                    </div>
                </article>
                <CreateComment />
            </Fragment>
        );
    }

    renderComment(comment) {
        const {name, message, imageUrl} = comment;
        return (
            <Comment name={name} message={message} imageUrl={imageUrl}/>
        )
    }
}

export default Thread;
