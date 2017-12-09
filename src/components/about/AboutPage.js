import React from 'react';
const MathJax = require('react-mathjax')

const tex = `f(x) = \\int_{-\\infty}^\\infty
\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
\\,d\\xi`

const problemSet = {
  "id": 1,
  "qSetName": "Algebraic Terms",
  "qsetlevel": 1,
  "questions" : [
    {
      qid: 1,
      theQuestion : "(e^2)^2",
      answers: [
        {
          answerValue : "e*e*e*e",
          correct : 1
        },
        {
          answerValue : "2*(e^2)",
          correct : 0
        },
        {
          answerValue : "4*e",
          correct : 0
        },
        {
          answerValue : "e^4",
          correct : 1
        }
      ]
    },
    {
      qid: 2,
      theQuestion : "2(e^2)",
      answers: [
        {
          answerValue : "e*e*e*e",
          correct : 0
        },
        {
          answerValuer : "2*(e^2)",
          correct : 1
        },
        {
          answerValue : "4*e",
          correct : 0
        },
        {
          answerValue : "e^4",
          correct : 0
        }
      ]
    }
  ]
};



class AboutPage extends React.Component {
    render() {

      function handleClick(ans, e) {
        if (ans) {
          e.target.classList = "correctAnswerRow";
        } else {
          e.target.classList = "incorrectAnswerRow";
        }

      }

      return (
          <MathJax.Context>
            <div>
              <div className="questionSetName">
              {problemSet.qSetName}
                </div>
              <div className="mathquestionrow">
                  <MathJax.Node inline>{problemSet.questions[0].theQuestion}</MathJax.Node>
              </div>
                  <div >Click on each of the equivalent expressions below:</div>

                  <div className="mathanswerblock">

                  <div className="mathanswerrow" onClick={handleClick.bind(this, problemSet.questions[0].answers[0].correct)} >
                  <MathJax.Node>{problemSet.questions[0].answers[0].answerValue}</MathJax.Node>
                  </div>
                  <div className="mathanswerrow" onClick={handleClick.bind(this,problemSet.questions[0].answers[1].correct)}>
                  <MathJax.Node>{problemSet.questions[0].answers[1].answerValue}</MathJax.Node>
                  </div>
                  <div className="mathanswerrow" onClick={handleClick.bind(this, problemSet.questions[0].answers[2].correct)}>
                  <MathJax.Node>{problemSet.questions[0].answers[2].answerValue}</MathJax.Node>
                  </div>
                  <div className="mathanswerrow" onClick={handleClick.bind(this,problemSet.questions[0].answers[3].correct)}>
                  <MathJax.Node>{problemSet.questions[0].answers[3].answerValue}</MathJax.Node>
                  </div>

                  </div>
              </div>
          </MathJax.Context>
      )
    }
  }

  export default AboutPage;
