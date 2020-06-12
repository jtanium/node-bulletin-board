var events = require('./events.js');

exports.events = function (req, res) {
  res.json(events);
};

exports.event = function (req, res) {
  res.json(events[req.params.eventId]);
};

exports.new_event = function (req, res) {
  // There's a bug here: we aren't setting the 'id'...
  res.json(events.push(req.body));
}

exports.destroy = function (req, res) {
  let e = null;
  let i = null;
  events.forEach(function (event, index, array) {
    if (event.id === parseInt(req.params.eventId)) {
      e = event;
      i = index;
    }
  });
  events.splice(i, 1);
  res.json(e);
}