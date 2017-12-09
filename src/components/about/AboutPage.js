import React from 'react';
const MathJax = require('react-mathjax')

const tex = `f(x) = \\int_{-\\infty}^\\infty
\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
\\,d\\xi`

const question = `(e^2)^2`;

const answer1 = `e*e*e*e`;
const answer2 = `2*(e^2)`;
const answer3 = `4*e`;
const answer4 = `e^4`;


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
                  <MathJax.Node inline>{question}</MathJax.Node>
              </div>
                  <div >Click on each of the equivalent expressions below:</div>

                  <div className="mathanswerblock">

                  <div className="mathanswerrow" onClick={handleClick.bind(this, 1)} >
                  <MathJax.Node>{answer1}</MathJax.Node>
                  </div>
                  <div className="mathanswerrow" onClick={handleClick.bind(this, 1)}>
                  <MathJax.Node>{answer2}</MathJax.Node>
                  </div>
                  <div className="mathanswerrow" onClick={handleClick.bind(this, 0)}>
                  <MathJax.Node>{answer3}</MathJax.Node>
                  </div>
                  <div className="mathanswerrow" onClick={handleClick.bind(this, 0)}>
                  <MathJax.Node>{answer4}</MathJax.Node>
                  </div>

                  </div>
              </div>
          </MathJax.Context>
      )
    }
  }

  export default AboutPage;
