import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45 PM"
                    blogText="1" b
                    logImage={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 2:00 AM"
                    blogText="2"
                    blogImage={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Yesterday at 5:00 PM"
                    blogText="3"
                    blogImage={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
}

ReactDom.render(<App />, document.querySelector('#root'));
