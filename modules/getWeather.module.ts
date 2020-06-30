handleRequest("get weather", (req, res) => {
  return res.text('It is currently sunny till 5pm').speak('it is currently sunny till five pm').send();
});

handleRequest("get weather <location>", (req, res) => {
  return res.text('It is currently sunny till 5pm at <location>').speak('it is currently sunny till five pm at <location>').send();
});

handleRequest("get weather <duration>", (req, res) => {
  return res.text('It is currently sunny till 5pm at <location>').speak('it is currently sunny till five pm at <location>').send();
});

handleRequest("get weather <location> <duration>", (req, res) => {
  return res.text('It is currently sunny till 5pm at <location>').speak('it is currently sunny till five pm at <location>').send();
});