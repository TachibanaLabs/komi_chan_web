import React, {Component} from 'react';

class Comment extends Component {
    render() {
        const {name, imageUrl, message} = this.props;

        return (
            <article className="media">
                <figure className="media-left">
                    <p className="image is-48x48">
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
                </div>
            </article>
        );
    }
}

export default Comment;
