//const redirectUrl = "http://crystal-clear-jammming.surge.sh/";
//const redirectUrl = 'http://localhost:3000/;
const clientID = '9a71923003d24d23b1b841756675754f';
const redirect_uri = 'http://localhost:8888/callback';

let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        } 
        // else if (!accessToken)
        // The accessToken is not yet retrieved
        // We have to determine if we have to redirect the user to the Spotify login/authorization page
        // or if the user come back from the Spotify login
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        // const state = window.location.href.match(/state=(.[^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        
        if (accessTokenMatch && expiresInMatch) {
            // The user has been redirected back to the application with the accessToken
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            // A timer will reset the accessToken after its timeout
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');    // ?Push State?
            return accessToken;
        } else {
            // We have to redirect the user to the Spotify login/authorization page.
            // For implicit flow, response type = token.
              const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=user-read-private%20user-read-email%20playlist-modify-public&redirect_uri=${redirect_uri}`;
              window.location = accessUrl;

              /* RESPONSE TYPE CODE EXAMPLE
              app.get('/login', function(req, res) {
                var scopes = 'user-read-private user-read-email';
                res.redirect('https://accounts.spotify.com/authorize' +
                    '?response_type=code' +
                    '&client_id=' + clientID +
                    (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
                    '&redirect_uri=' + encodeURIComponent(redirect_uri));
                });
                */
        }
    },

    search(term) {
        if (!term) {
            return [];
        }

        // let accessToken = this.getAccessToken();
        accessToken = Spotify.getAccessToken();
        const query = `https://api.spotify.com/v1/search?q=${term}&type=track`;
        let myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${accessToken}`);
        console.log(myHeaders);
    
        return fetch(query, {
            method: 'GET',
            headers: myHeaders
        }).then(response => response.json()
        ).then(jsonResponse => {
            if (!jsonResponse) {
                return [];
            }
            console.log(jsonResponse);
            let spotifyTracks = jsonResponse.tracks.items.map(track => {
                return {
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                }
            });
            return spotifyTracks;
        });
    }

}

export default Spotify;

/**
 * accessURL EXAMPLE:
 * https://accounts.spotify.com/authorize?client_id=5fe01282e94241328a84e7c5cc169164&redirect_uri=http:%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=123
 
 To Enter URI for an App on iOS:
    1. Verify that:
        All the characters are lowercase.
        The prefix must be unique to your application. It cannot be a general prefix like http.
        The prefix must only be used by your application for authenticating Spotify. If you already have a URL scheme handled by your application for other uses, do not reuse it.
        We recommend that you include the name of your application in the URI.
        Include a path after the first pair of forward slashes. For example: Your app name is My Awesome App The redirect URI may be my-awesome-app-login://callback or awesomeprotocol123://returnafterlogin.
    Note: Do not use https, http, or any other common protocol as a prefix as you will find that the callback opens your client web browser or some other program. Enter a unique protocol prefix so that your app has a chance to listen for it.

    2. Click ADD.
 

    */