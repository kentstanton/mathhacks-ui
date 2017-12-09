import React from 'react';
const MathJax = require('react-mathjax')

const tex = `f(x) = \\int_{-\\infty}^\\infty
\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
\\,d\\xi`

const asciimath = `x^-3`

/*
class AboutPage extends React.Component {
    render() {
        return (
            <div >
                <h1>About MathHacks</h1>


            </div>
        );
    }
}
*/
module.exports = () => {
  return (
      <MathJax.Context>
        <div>
          <div className="mathquestionrow">
              <MathJax.Node inline>{`(e^2)^2`}</MathJax.Node>
          </div>
              <div >Click on each of the equivalent expressions below:</div>

              <div className="mathanswerblock">

              <div className="mathanswerrow" onClick={colorrow}>
              <MathJax.Node>{`e*e*e*e`}</MathJax.Node>
              </div>
              <div className="mathanswerrow">
              <MathJax.Node>{`2*(e^2)`}</MathJax.Node>
              </div>
              <div className="mathanswerrow">
              <MathJax.Node>{`4*e`}</MathJax.Node>
              </div>
              <div className="mathanswerrow">
              <MathJax.Node>{`e^4`}</MathJax.Node>
              </div>

              </div>
          </div>
      </MathJax.Context>
  );
}
//export default AboutPage;
