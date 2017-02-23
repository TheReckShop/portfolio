'use strict'

var projects = [];

function Project(options) {
  this.name = options.name;
  this.description = options.description;
  this.image = options.image;
  this.imageUrl = options.imageUrl;
  this.link = options.link;
  this.date = options.date;
}

Project.prototype.toHtml = function() {
  var source = $('#project-display').html();
  var templateRender = handlebars.compile(source);
  return templateRender(this);
};

projectData.forEach(function(sectionObject) {
  projects.push(new Project(sectionObject));
});

projects.forEach(function(a){
  $('#project-display').append(a.toHtml());
});
