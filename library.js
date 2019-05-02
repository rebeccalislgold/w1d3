var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

function format(str) {

// WRITE A HELPER FUNCTION TO ACCESS IN OTHER FUNCTIONS

}

var printPlaylists = function () {

  for (var plistID in library.playlists) {

    var index = library.playlists[plistID];
    var notracks = library.playlists[plistID].tracks.length;

    console.log(index.id + ": ", index.name + " - " + notracks + " tracks");

  }

}

printPlaylists();


//ADDED THIS FUNCTION TO DISPLAY PLAYLIST SONGS

var printPlaylistSongs = function (tr_id) {

  var index = library.tracks[tr_id];

  console.log(index.id + ": ", index.name + " by " + index.artist + " (" + index.album + ")");

}

printPlaylistSongs('t03');


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {

  for (var songId in library.tracks) {

    var index = library.tracks[songId];

    console.log(index.id + ": ", index.name + " by " + index.artist + " (" + index.album + ")");

  }

}

printTracks();


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {

  var index = library.playlists[playlistId];
  var notracks = index.tracks.length;
  console.log(index.id + ": ", index.name + " - " + notracks + " tracks");

  for (var songId of library.playlists[playlistId].tracks) {

    printPlaylistSongs(songId);

  }

}

printPlaylist('p02');


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

  var addTr = library.playlists[playlistId].tracks;

  addTr.push(trackId);

}


addTrackToPlaylist('t03', 'p01');

printPlaylist('p01');

// COME BACK TO THIS!!!!!



// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {

  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

}

var createTrack = function(name, artist, album) {
  return { id: uid(),
           name: name,
           artist: artist,
           album: album
  }
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var newTrack = createTrack(name, artist, album)
  library.tracks[newTrack.id] = newTrack

}

addTrack('My Heart Will Go On', 'Celine Dion', 'Titanic');
printTracks();


var createPlaylist = function(name) {
  return { id: uid(),
           name: name
  }
}


// adds a playlist to the library

var addPlaylist = function (name) {
  var newPlaylist = createPlaylist(name)
  library.playlists[newPlaylist.id] = newPlaylist
}

addPlaylist("Coding Music 2");



// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}