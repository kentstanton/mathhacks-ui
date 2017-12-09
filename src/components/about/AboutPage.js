import React from 'react';
const MathJax = require('react-mathjax')

const tex = `f(x) = \\int_{-\\infty}^\\infty
\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
\\,d\\xi`

const questionSet = [
  {
    id: 1,
    qSetName: "Algebraic Terms",
    qsetlevel: 1,
    question: {
      qid: 1,
      theQuestion : "(e^2)^2",
      answers: {
        answer1: {
          answer : "e*e*e*e",
          correct : 1
        },
        answer2: {
          answer : "2*(e^2)",
          correct : 0
        },
        answer3: {
          answer : "4*e",
          correct : 0
        },
        answer4: {
          answer : "e^4",
          correct : 1
        }
      }
  }

  }
]

//const question = `(e^2)^2`;
let theQuestion = questionSet[0].question.theQuestion;
const answer1 = questionSet[0].question.answers.answer1.answer;
const answer2 = questionSet[0].question.answers.answer2.answer;
const answer3 = questionSet[0].question.answers.answer3.answer;
const answer4 = questionSet[0].question.answers.answer4.answer;

const answer1Value = questionSet[0].question.answers.answer1.correct;
const answer2Value = questionSet[0].question.answers.answer2.correct;
const answer3Value = questionSet[0].question.answers.answer3.correct;
const answer4Value = questionSet[0].question.answers.answer4.correct;


class AboutPage extends React.Component {
    render() {

      function handleClick(ans, e) {
        if (ans) {
          alert("Correct");
        } else {
          alert("Not Correct");
        }

      }

      return (
          <MathJax.Context>
            <div>
              <div className="mathquestionrow">
                  <MathJax.Node inline>{theQuestion}</MathJax.Node>
              </div>
                  <div >Click on each of the equivalent expressions below:</div>

                  <div className="mathanswerblock">

                  <div className="mathanswerrow" onClick={handleClick.bind(this, answer1Value)} >
                  <MathJax.Node>{answer1}</MathJax.Node>
                  </div>
                  <div className="mathanswerrow" onClick={handleClick.bind(this,answer2Value)}>
                  <MathJax.Node>{answer2}</MathJax.Node>
                  </div>
                  <div className="mathanswerrow" onClick={handleClick.bind(this, answer3Value)}>
                  <MathJax.Node>{answer3}</MathJax.Node>
                  </div>
                  <div className="mathanswerrow" onClick={handleClick.bind(this,answer4Value)}>
                  <MathJax.Node>{answer4}</MathJax.Node>
                  </div>

                  </div>
              </div>
          </MathJax.Context>
      )
    }
  }

  export default AboutPage;
