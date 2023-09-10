const request = require("request");

const geocode = (address, callback) => {
  const URL = `https://api.geoapify.com/v1/geocode/search?text=${address}&apiKey=fca03bec59e5424ca9088f1b86461c94`;

  request({ url: URL, json: true }, (err, res, body) => {
    if (err) {
      callback("Unable to connect to location services", undefined);
    } else if (body.features.length === 0) {
      callback("Location not found", undefined);
    } else {
      callback(undefined, {
        lat: body.features[0].properties.lat,
        lon: body.features[0].properties.lon
      });
    }
  });
};

geocode("France", (error, data) => {

  console.log(data);
});
