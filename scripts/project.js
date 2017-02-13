'use strict'

var projects = [];

function Project(name, description, image, link, date) {
  this.name = name;
  this.description = description;
  this.image = image;
  this.link = link;
  this.date = date;

Project.prototype.toHtml = function() {
};
