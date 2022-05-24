const { Toolkit } = CCLIBRARIES;

var questionsList

function doGet(e) {
  getQuestionsList();
  const indexTemplate = HtmlService.createTemplateFromFile('index');
  Object.assign(indexTemplate, { questionsList });
  return indexTemplate.evaluate();
}

function getQuestionsList() {
  questionsFileId = ENV.questionsFileId;
  questionsList = questionsList || Toolkit.readFromJSON(questionsFileId);
  return JSON.stringify(questionsList);
}