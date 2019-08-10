const client = require("../auth_credentials/credentials");
const client_id = client.CLIENT_ID;
const client_secret = client.CLIENT_SECRET;
const redirect_uri = client.REDIRECT_URI;
const querystring = require("querystring");
const request = require("request");

var stateKey = "spotify_auth_state";

var authorization = {
  generateRandomString: function() {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 16; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  },

  getAuthorization: async function(req, res) {
    console.log("I am here");
    var state = authorization.generateRandomString(16);
    var scope = "user-read-private user-read-email";
    res.cookie(stateKey, state);
    console.log(redirect_uri);
    return res.redirect(
      "https://accounts.spotify.com/authorize?" +
        querystring.stringify({
          response_type: "code",
          client_id: client_id,
          scope: scope,
          redirect_uri: redirect_uri,
          state: state,
          show_dialog: true
        })
    );
  },

  redirectCallback: async function(req, res) {
    // your application requests refresh and access tokens
    // after checking the state parameter

    var code = req.query.code || null;
    var state = req.query.state || null;
    var storedState = req.cookies ? req.cookies[stateKey] : null;

    if (state === null || state !== storedState) {
      res.redirect(
        "http://localhost:8080/#" +
          querystring.stringify({
            error: "state_mismatch"
          })
      );
      res.status(409).json({
        message: "error state mismatch"
      });
    } else {
      res.clearCookie(stateKey);

      var authOptions = {
        url: "https://accounts.spotify.com/api/token",
        form: {
          code: code,
          redirect_uri: redirect_uri,
          grant_type: "authorization_code"
        },
        headers: {
          Authorization:
            "Basic " +
            new Buffer(client_id + ":" + client_secret).toString("base64")
        },
        json: true
      };

      request.post(authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {
          var access_token = body.access_token,
            refresh_token = body.refresh_token;

          // console.log('Access Token',access_token);
          // console.log('Refresh Token', refresh_token);

          var options = {
            url: "https://api.spotify.com/v1/me",
            headers: { Authorization: "Bearer " + access_token },
            json: true
          };

          //   use the access token to access the Spotify Web API
          //   request.get(options, function(error, response, body) {
          //     console.log(body);
          //   });

          // we can also pass the token to the browser to make requests from there
          res.redirect(
            "http://localhost:8080/home#" +
              querystring.stringify({
                access_token: access_token,
                refresh_token: refresh_token
              })
          );
        } else {
          res.redirect(
            "http://localhost:8080/#" +
              querystring.stringify({
                error: "invalid_token"
              })
          );
        }
      });
    }
  },

  regenerateAccessToken: async function(req, res) {
    // requesting access token from refresh token
    var refresh_token = req.query.refresh_token;
    var authOptions = {
      url: "https://accounts.spotify.com/api/token",
      headers: {
        Authorization:
          "Basic " +
          new Buffer(client_id + ":" + client_secret).toString("base64")
      },
      form: {
        grant_type: "refresh_token",
        refresh_token: refresh_token
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var access_token = body.access_token;
        res.send({
          access_token: access_token
        });
      }
    });
  }
};

module.exports = authorization;
