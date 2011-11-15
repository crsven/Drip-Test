var Drip = function() {

  var droplet;

  this.setDroplet = function(dripElement) {
    droplet = dripElement;
  }

  this.getDroplet = function() {
    return droplet;
  }

  this.drop = function () {
    $(droplet).addClass("dropping");
  }

  this.reset = function() {
    $(droplet).removeClass("dropping");
  }

};

$("document").ready(function() {
  $(".drip").each(function() {
    var theDrip = new Drip();
    theDrip.setDroplet(this);
    $(theDrip.getDroplet()).hover(theDrip.drop, theDrip.reset);
  });
});
