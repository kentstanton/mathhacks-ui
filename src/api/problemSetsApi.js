const problemSets = [
    {
      id: 1,
      qSetName: "Algebraic Terms",
      qsetlevel: 1,
      questions: [
        {
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
        },
        {
          qid: 1,
          theQuestion : "2(e^2)",
          answers: {
            answer1: {
              answer : "e*e*e*e",
              correct : 0
            },
            answer2: {
              answer : "2*(e^2)",
              correct : 1
            },
            answer3: {
              answer : "4*e",
              correct :
            },
            answer4: {
              answer : "e^4",
              correct : 0
            }
          }
        }

      ]
    }
  ];



export default ProblemSetsApi;
