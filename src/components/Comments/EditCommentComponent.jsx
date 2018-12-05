import React, {Component} from "react";

export default class EditComponent extends Component {
    state = {editText: this.props.value};
    onSubmit = (event) => {
        event.preventDefault();
        const {slug, updateComment, id, cancel} = this.props;
        const {editText} = this.state;
        updateComment(slug, id, editText);
        cancel();
    };
    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const {cancel} = this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" required name="editText" value={this.state.editText}
                           className="materialize-textarea" onChange={this.onChange}/>
                    <input type="submit" value="EDIT" className="btn-primary right white teal-text"/>
                </form>
                <input type="submit" name="cancelEdit" value="CANCEL" className="btn-primary right white teal-text"
                       onClick={cancel}/>
            </div>
        );
    }
}
