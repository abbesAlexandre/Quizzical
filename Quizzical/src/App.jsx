import "./App.css";
import Quizz from "./Components/Quizz";
import Header from "./Components/Header";

export default function App() {
  const startQuizz = false

  return (
    <>
      {startQuizz ? <Quizz /> : <Header />}
    </>
  );
}
