/*
You are given a dictionary/hash/object containing some languages and your test results in the given languages. 
Return the list of languages where your test score is at least 60, in descending order of the results.

Note: the scores will always be unique (so no duplicate values)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
*/

const myLanguages = (results) => {
  let sortedResults = [];
  let finalArr = [];
  for(let language in results) {
    sortedResults.push([language, results[language]]);
  }
  sortedResults.sort((a, b) => {
    return b[1] - a[1];
  })
  for(let i = 0; i < sortedResults.length; i++) {
    if(sortedResults[i][1] >= 60) {
      finalArr.push(sortedResults[i][0]);
    }
  }

  return finalArr;
}