import React, {Component} from 'react';

class CreateComment extends Component {

    state = {
        newComment: ""
    };

    readComment = (event) => {
        this.setState({newComment: event.target.value});
    };

    pushCommentToParent = () => {
        this.props.action(this.state.newComment);
        this.setState({newComment: ""});
    };

    render() {
        return (
            <article className="media">
                <figure className="media-left">
                    <p className="image is-64åx64">
                        <img src="https://bulma.io/images/placeholders/128x128.png"/>
                    </p>
                </figure>
                <div className="media-content">
                    <div className="field">
                        <p className="control">
                            <textarea value={this.state.newComment} onChange={this.readComment} className="textarea"
                                      placeholder="Add a comment..."/>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <button onClick={this.pushCommentToParent} className="button">Post comment</button>
                        </p>
                    </div>
                </div>
            </article>
        );
    }
}

export default CreateComment;
