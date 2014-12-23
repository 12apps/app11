Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  Template.body.helpers({
    tasks: function () {
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.body.events({
    'submit #add-new-task-form': function(event) {
      var newTask = event.target.newtask.value;
      Tasks.insert({ text: newTask, createdAt: (new Date()) });
      event.target.text.value = "";
      return false;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
