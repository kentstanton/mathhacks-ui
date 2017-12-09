import delay from './delay';

const practiceTopicsData = [
  {
    id: "Algebra-terms-1",
    title: "Algebra: Terms",
    levelId: "1",
    helpPage: "http://www.pluralsight.com/courses/react-flux-building-applications",
    authorId: "MathHacks",
    level: "foundations",
    category: "Algebra"
  },
  {
    id: "Pre-algebra-exponents-1",
    title: "Pre-Algebra: Exponents",
    levelId: "1",
    helpPage: "http://www.pluralsight.com/courses/react-flux-building-applications",
    authorId: "MathHacks",
    level: "foundations",
    category: "Pre-Algebra"
  }
];

/*
function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (practiceTopic) => {
  return replaceAll(practiceTopic.title, ' ', '-');
};
*/

class PracticeTopicsApi {

  static getAllPracticeTopics() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], practiceTopicsData));
      }, delay);
    });
  }

  /*
  static saveHack(hack) {
    hack = Object.assign({}, hack); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minHackTitleLength = 1;
        if (hack.title.length < minHackTitleLength) {
          reject(`Title must be at least ${minHackTitleLength} characters.`);
        }

        if (hack.id) {
          const existingHackIndex = mathHacks.findIndex(a => a.id == hack.id);
          mathHacks.splice(existingHackIndex, 1, hack);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          hack.id = generateId(hack);
          hack.watchHref = `http://www.pluralsight.com/courses/${hack.id}`;
          mathHacks.push(hack);
        }

        resolve(hack);
      }, delay);
    });
  }
  */

  /*
  static deleteHack(hackId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfHackToDelete = mathHacks.findIndex(hack => {
          hack.id == hackId;
        });
        mathHacks.splice(indexOfHackToDelete, 1);
        resolve();
      }, delay);
    });
  }
  */
}

export default PracticeTopicsApi;
