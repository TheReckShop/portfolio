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
  var $newProject = $('div.template').clone();
  $newProject.removeClass('template');
  $newProject.find('h1').html(this.name);
  $newProject.find('img').html(this.image).attr('src', this.imageUrl);
  console.log($newProject);
  return $newProject;
};

projectData.forEach(function(sectionObject) {
  projects.push(new Project(sectionObject));
});

projects.forEach(function(a){
  $('#project-display').append(a.toHtml());
});
