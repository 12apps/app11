Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {

  Template.body.helpers({
    color: function() { return Session.get("color"); },
    days: function () { return Session.get("days"); },
    hours: function () { return Session.get("hours"); },
    minutes: function () { return Session.get("minutes"); },
    seconds: function () { return Session.get("seconds"); }
  });

  Meteor.setInterval(countDown, 1000);

  function countDown() {
    var duration = moment.duration(moment("2014-12-31") - moment());
    Session.set("days", duration.days());
    Session.set("hours", duration.hours());
    Session.set("minutes", duration.minutes());
    Session.set("seconds", duration.seconds());
    Session.set("color", "#"+(~~(Math.random()*(1<<24))).toString(16));
  }

  // var r=4+parseInt(Math.random()*16);for(var i=r; i--;){setTimeout('createFirework(8,14,2,null,null,null,null,null,Math.random()>0.5,true)',(i+1)*(1+parseInt(Math.random()*1000)));}
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
