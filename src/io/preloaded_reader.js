phantasus.PreloadedReader = function () {
};

phantasus.PreloadedReader.prototype = {
  read: function(name, callback) {
    console.log("preloaded read", name);
    name = typeof name === "string" ? { name : name } : name;
    var req = ocpu.call('loadPreloaded', name, function(session) {
      phantasus.ParseDatasetFromProtoBin.parse(session, callback, { preloaded : true });
    });
    req.fail(function () {
      callback(req.responseText);
    })
  }
};