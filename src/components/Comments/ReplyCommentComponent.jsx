import React, {Component} from "react";
import avatar from "../../assets/img/avatar.png";

export default class ReplyComponent extends Component {
    state = {
        replyText: '',
    };
    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    onSubmit = (event) => {
        event.preventDefault();
        const {replyComment, id, slug} = this.props;
        const {replyText} = this.state;
        replyComment(slug, id, replyText);
        this.setState({replyText: ''})
    };

    render() {
        const {cancel, authorized} = this.props;
        console.log(authorized);
        const {replyText} = this.state;
        const visible = authorized ?' visible':' hidden';
        return (
            <div className={"card z-depth-0"+visible}>
                <img className="card z-depth-0 circle-thread circle card-reply top" src={avatar} alt="avatar"
                     style={{height: '50px', width: '50px', borderRadius: '50%'}}/>
                <form style={{display: 'inline-block', width: '70%', verticalAlign: 'top'}} onSubmit={this.onSubmit}>
                    <input type="text" required value={replyText} name="replyText" onChange={this.onChange}/>
                    <br/>
                    <input className="teal-text right" style={{border: 'none'}} type="submit" value="Reply"/>
                    <input onClick={(e) => {
                        e.preventDefault();
                        cancel();
                    }} className="teal-text right" style={{border: 'none'}} type="submit" value="Cancel"/>
                </form>
            </div>
        );
    }
}
