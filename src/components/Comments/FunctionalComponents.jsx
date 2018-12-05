import React from "react";
import avatar from "../../assets/img/avatar.png";

export const Threads = ({author, createdAt, body, imageUrl}) => (
    <div className="card z-depth-0" style={{width: '80%', marginBottom: '-2%'}}>
        <img className="card z-depth-0 circle top" src={imageUrl === 'image-url' ? avatar : imageUrl} alt="avatar"
             style={{height: '40px', width: '40px', borderRadius: '50%'}}/>
        <div className="card z-depth-0"
             style={{display: 'inline-block', verticalAlign: 'top', marginTop: '2%', width: '80%', marginLeft: '2%'}}>
            <span className="teal-text" style={{fontWeight: 'bold'}}>{author}</span>
            <span style={{marginLeft: '2%', fontWeight: 'bold', fontSize: '13px'}}>{createdAt}</span>
            <div className="card z-depth-0" style={{fontSize: '18px'}}>
                {body}
            </div>
        </div>
    </div>
);

export const History = ({body, createdAt}) => (
    <div className="card z-depth-0" style={{width: '80%', marginLeft: '5%'}}>
        <div className="teal-text" style={{fontStyle: 'italic', fontSize: '12px'}}>
            ({createdAt})
        </div>
        <span>
            {body}
        </span>
    </div>
);

export const CommentDropDown = ({onClickEdit, onClickHistory, onClickDelete}) => (
    <div className="card drop">
        <input type="submit" id="edit" value="Edit" className="waves-effect" onClick={onClickEdit}/>
        <input type="submit" id="show-history" value="History" className="waves-effect white" onClick={onClickHistory}/>
        <input type="submit" id="on-delete" value="Delete" className="waves-effect white" onClick={onClickDelete}/>
    </div>
);
