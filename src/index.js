import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className ="ui container comments">

            <ApprovalCard> <h4>Warning!</h4>Are you sure you want to do this?

            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:45PM" commentLine="This is great!"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 7:39PM" commentLine="Nice work!"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Yesterday at 4:03PM" commentLine="Amazing job!"/>
            </ApprovalCard>
        </div>

    );
};


ReactDOM.render(<App />, document.querySelector('#root'));
