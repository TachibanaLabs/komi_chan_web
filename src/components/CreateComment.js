import React, {Component} from 'react';

class CreateComment extends Component {
    constructor(props){
        super(props);

        this.state = {
            newComment: " "
        };

        this.onChangeMessage = this.onChangeMessage.bind(this);
    }

    onChangeMessage(e) {
        this.setState({newComment: e.target.value});
    }

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
                            <textarea onChange={this.onChangeMessage} className="textarea" placeholder="Add a comment..."/>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <button className="button">Post comment</button>
                        </p>
                    </div>
                </div>
            </article>
        );
    }
}

export default CreateComment;
