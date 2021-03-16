import React from "react";
import { Comment, Input, Button } from "antd";

const { TextArea } = Input;

const Question = (props) => {
  const { data, countAnswers } = props;
  const { category, subCategory, question } = data;

  return (
    <div className="block-question">
      <Comment
        author={
          <a>
            {category} . {subCategory}
          </a>
        }
        content={
          <>
            <p>{question}</p>
            {countAnswers} Answers
            <br />
            <br />
            <TextArea />
            <br />
            <br />
            <Button type="primary">Submit</Button>
          </>
        }
      />
    </div>
  );
};

export default Question;
