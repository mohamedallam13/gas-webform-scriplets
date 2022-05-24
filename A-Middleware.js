function include(file, props) {
  var template = HtmlService.createTemplateFromFile(file);
  Object.assign(template, props);
  return template.evaluate().getContent()
}