import Question from "../components/qa/Question";
import Answer from "../components/qa/Answer";
function Qa(props) {
  const { data } = props;
  const { question, answers } = data;

  return (
    <div className="App">
      <Question data={question} countAnswers={answers.length} />
      <br />
      {answers.map((answer) => {
        return <Answer data={answer} />;
      })}
    </div>
  );
}

export default Qa;
