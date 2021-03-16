import React from "react";
import { Comment, Avatar } from "antd";
import ReplyBox from "./ReplyBox";
import AnswerContent from "./AnswertContent";

const Answer = (props) => {
  const { data } = props;
  const { answer, name, designation, answers } = data;

  return (
    <div className="block-answer">
      <Comment
        author={
          <>
            <a>{name}</a>
            <br />
            <a>{designation}</a>
          </>
        }
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <>
            <AnswerContent answer={answer} />
            <hr />
            {answers && answers.length > 0
              ? answers.map((subAnswer) => <Answer data={subAnswer} />)
              : null}
            <ReplyBox />
          </>
        }
      />
    </div>
  );
};

export default Answer;
