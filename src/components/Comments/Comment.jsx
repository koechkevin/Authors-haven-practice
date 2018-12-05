import React, {Component} from 'react';
import avatar from "../../assets/img/avatar.png";
import CommentsLikeContainer from "../../containers/Comments/CommentsLikeContainer";
import {EditContainer, ReplyContainer} from "../../containers/Comments/CommentContainer";
import {Icon} from "react-materialize";
import swal from "sweetalert";
import {CommentDropDown, History, Threads} from "./FunctionalComponents";
import authUser from "../../utils/authUser.util";

class Comment extends Component {
  state = {
      showDropDown: false,
      showHistory: false,
      showEdit: false,
      showComment: true,
      showThreads: false,
      showReply: false,
  };

  onDelete = (event) => {
    event.preventDefault();
    this.setState({ showDrop: false });
    const { slug, deleteComment, id } = this.props;
    swal({
        title: 'Confirm',
        text: 'Are you sure you want to delete?',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
    })
        .then(willDelete => (willDelete
            ? deleteComment(slug, id) : null),
        );
};

  onClickHistory = () => {
      const { showHistory } = this.state;
      this.setState({ showHistory: !showHistory, showDropDown: false });
  };

  onClickEdit = () => {
      const { showEdit, showComment } = this.state;
      this.setState({ showEdit: !showEdit, showComment: !showComment, showDropDown: false  });
  };

  render() {
      const {
          id,
          slug,
          history,
          author,
          body,
          createdAt,
          threads,
          imageUrl,
      } = this.props;
      const { showDropDown, showHistory,showEdit, showComment, showThreads, showReply } = this.state;
      const visible = authUser() && authUser().username === author?'visible':'hidden';
      return (
      <div className="card" style={{ borderRadius: '10px'}}>
          <div
              className={"right waves-effect waves-dark card z-depth-0 "+visible}
              style={{ width: '30px', height:'30px', borderRadius:'50%', verticalAlign:'center'}}
              tabIndex={-1}
              id="clickable"
              role="button"
              onKeyUp={() => this.setState({ showDropDown: !showDropDown })}
              onClick={() => this.setState({ showDropDown: !showDropDown })}
          >
              <span style={{ marginLeft:'10%', marginTop: '10%' }}><Icon>more_vert</Icon></span>
          </div>
          <div className={showDropDown? 'visible': 'hidden'}>
          <CommentDropDown onClickHistory={this.onClickHistory} onClickEdit={this.onClickEdit} onClickDelete={this.onDelete}/>
          </div>
          <img className="card z-depth-0 top" src={imageUrl === 'image-url' ? avatar: imageUrl} alt="avatar" style={{ height:'50px', width:'50px', borderRadius:'50%'}} />
          <div className="card z-depth-0" style={{ display:'inline-block', verticalAlign:'top', marginTop:'2%', width:'80%', marginLeft:'2%' }}>
              <a href={`/profiles/${author}`}><span className="teal-text" style={{ fontWeight:'bold' }}>{ author }</span></a>
              <span style={{ marginLeft:'2%', fontWeight:'bold', fontSize:'small' }}>{new Date(createdAt).toDateString()}</span>
                  <span className={ showHistory? 'visible' : 'hidden' }>
                      {history.map(data =>
                          <div key={history.indexOf(data) + 1}>
                              <History createdAt={new Date(data.created_at).toDateString()} body={data.body}/>
                          </div>
                      )}
                  </span>
              <div className={"card z-depth-0 "+(showComment?'visible':'hidden')}>
                  {body}
              </div>
              <div className={showEdit ? 'visible':'hidden'}>
                  <EditContainer slug={slug} cancel={this.onClickEdit} value={body} id={id}/>
              </div>
              <div className="links">
                  <input type="submit" onClick={() => this.setState({showReply: !showReply})} style={{ border:'none' }} className="teal-text" value="Reply"/>
                  <input type="submit" onClick={() => this.setState({showThreads: !showThreads, showReply: !showReply})} style={{ border:'none', marginRight: '2%' }} className="teal-text" value="View Replies"/>
                  <CommentsLikeContainer {...this.props} />
              </div>
              <span className={showReply? 'visible':'hidden'}>
                <ReplyContainer authorized={!!authUser()} slug={slug} id={id} cancel={() => this.setState({ showReply: !showReply})}/>
              </span>
              <span className={showThreads? 'visible':'hidden'}>
                  { threads.map(thread =>
                      <div key={thread.id}>
                      <Threads
                          body={thread.body}
                          createdAt={new Date(thread.created_at).toDateString()}
                          author={thread.author.username}
                          imageUrl={thread.author.image_url}
                      />
                      </div>
                  )}
              </span>
          </div>
      </div>)
  }
}

export default Comment;
