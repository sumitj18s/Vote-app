import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadQuestions } from "../../redux/questions";
import { loadQuestionDetails } from "../../redux/question-details";
import Layout from "../../components/Layout";
import Question from "../../components/Question";

function Questions() {
  const history = useHistory();
  const dispatch = useDispatch();
  const questionsList = useSelector((state) => state.questions.response);

  const handleClick = (url) => {
    history.push("/detail");
    dispatch(loadQuestionDetails(url));
  };

  useEffect(() => {
    dispatch(loadQuestions());
  }, [dispatch]);

  return (
    <Layout>
      {questionsList &&
        questionsList.map((q) => {
          return (
            <Question key={q.url} handleClick={() => handleClick(q.url)}>
              {q.question}
            </Question>
          );
        })}
    </Layout>
  );
}

export default Questions;
