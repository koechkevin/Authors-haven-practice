import React, {Component} from "react";

export default class CreateComment extends Component {
    state = {commentText: ''};
    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    onSubmit = (event) => {
        event.preventDefault();
        const {postComment, slug} = this.props;
        const {commentText} = this.state;
        postComment(slug, commentText);
        this.setState({commentText: ''})
    };

    render() {
        const {commentText} = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{width: '90%'}}>
                    <input type="text" required id="comment-text" value={commentText} name="commentText"
                           className="materialize-textarea" placeholder="Write a comment" onChange={this.onChange}/>
                    <input type="submit" value="SUBMIT" className="btn-primary right"/>
                </form>
                <br/>
            </div>
        );
    }
}
