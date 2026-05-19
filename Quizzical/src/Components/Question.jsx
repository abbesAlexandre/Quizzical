import Answer from "./Answer";

export default function Question(props) {
    const data = props.data

    const answers = data.map(answer => <Answer answer={answer} />);
  return (
    <>
      <h1>{props.data.question}</h1>
      {answers}
    </>
  );
}
