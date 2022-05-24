const { Toolkit } = CCLIBRARIES;

function doGet(e) {
  const questionsList = getQuestionsList();
  const indexTemplate = HtmlService.createTemplateFromFile('index');
  Object.assign(indexTemplate, { questionsList });
  return indexTemplate.evaluate();
}

function getQuestionsList() {
  const questionsFileId = "1G8IQr9hddTlMhri-lcVjQzSrBCsqBlRz";
  const questions = Toolkit.readFromJSON(questionsFileId);
  return questions;
}