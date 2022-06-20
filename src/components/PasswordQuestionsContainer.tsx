import { styled } from "@stitches/react";
import { Button } from "./Button";
import { QuestionSection } from "./QuestionSection";
import passwordQuestionsData from "../passwordQuestions.json";
import { AlertCard } from "./AlertCard";

type PasswordQuestionsContainerProps = {
  currentFeedback: number;
  currentQuestion: number;
  selectedOption: number;
  currentSection: string;
  questionResult: boolean;
  anwserOptions: any;
  progressBarValue?: number;
  handleSelectedOption: Function;
  handleButtonContinue: Function;
  buttonContinueText: string;
};


const PasswordQuestionsContainerStyle = styled("div", {
  overflowY: "auto",
  maxHeight: "calc(100% - 100px)",
  length: 0
});

const ButtonContainer = styled("div", {
  margin: "1.5em",
  display: "flex",
  justifyContent: "center",
});

export function PasswordQuestionsContainer({
  currentFeedback,
  currentQuestion,
  selectedOption,
  currentSection,
  questionResult,
  anwserOptions,
  progressBarValue,
  handleSelectedOption,
  handleButtonContinue,
  buttonContinueText,
}: PasswordQuestionsContainerProps) {

  const sendToMedalsPage = () => {
    window.location.href = "/elderly-gamification/medalhas";
    localStorage.setItem("currentSection", "content");
    localStorage.setItem("currentContent", "0");
    localStorage.setItem("progressBarValue", "0");
    localStorage.setItem("currentQuestion", "0");
  }

  console.log("currentFeedback", currentFeedback);

  return (
    <PasswordQuestionsContainerStyle>
      {currentSection === "question" && (
        <>
          <QuestionSection
            question={passwordQuestionsData[currentQuestion].question}
            image={`${passwordQuestionsData[currentQuestion].image}`}
            imageAlt={passwordQuestionsData[currentQuestion].imageAlt}
            handleSelectedOption={handleSelectedOption}
            anwserOptions={anwserOptions}
            selectedOption={selectedOption}
          />
        </>
      )}

      {currentSection === "feedback" && (
        <AlertCard
          image={`${
            questionResult === true
              ? passwordQuestionsData[currentFeedback].feedbacks
                  ?.imageFeedbackRight
              : passwordQuestionsData[currentFeedback].feedbacks
                  .imageFeedbackWrong
          }`}
          imageAlt={passwordQuestionsData[currentQuestion].imageAlt}
          text={
            questionResult === true
              ? passwordQuestionsData[currentFeedback].feedbacks?.feedbackRight
              : passwordQuestionsData[currentFeedback].feedbacks?.feedbackWrong
          }
        />
      )}

      <ButtonContainer>


        <Button
          backgroundColor={
            "linear-gradient(271.96deg, #125BDE -6.04%, #1255CE -6.02%, #13274A 110.71%);"
          }
          width={"100%"}
          onClick={progressBarValue === passwordQuestionsData.length ? sendToMedalsPage : handleButtonContinue}
          text={buttonContinueText}
        />
      </ButtonContainer>
    </PasswordQuestionsContainerStyle>
  );
}
