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
             },
  printPlaylists: function() {

    for (var plistID in this.playlists) {

        var index = this.playlists[plistID];
        var notracks = this.playlists[plistID].tracks.length;

        console.log(index.id + ": ", index.name + " - " + notracks + " tracks");
    }
  },
  printSongDetails: function (tr_id) {

    var index = this.tracks[tr_id];
    console.log(index.id + ": ", index.name + " by " + index.artist + " (" + index.album + ")");
  },
  printTracks: function () {

    for (var songId in this.tracks) {

      var index = this.tracks[songId];
      console.log(index.id + ": ", index.name + " by " + index.artist + " (" + index.album + ")");

    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {

    var addTr = this.playlists[playlistId].tracks;
    addTr.push(trackId);

  },
  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  createTrack: function(name, artist, album) {
    return { id: this.uid(),
             name: name,
             artist: artist,
             album: album
    }
  },
  addTrack: function(name, artist, album) {

    var newTrack = this.createTrack(name, artist, album)
    library.tracks[newTrack.id] = newTrack //this is how to "push" for object (push function is only for arrays)

  },
  createPlaylist: function(name) {
    return { id: this.uid(),
             name: name
    }
  },
  addPlaylist: function(name) {
    var newPlaylist = this.createPlaylist(name)
    this.playlists[newPlaylist.id] = newPlaylist
    this.playlists[newPlaylist.id].tracks = {}
  },
  printPlaylist: function(playlistId) {

    var index = this.playlists[playlistId];
    var notracks = index.tracks.length;
    console.log(index.id + ": ", index.name + " - " + notracks + " tracks");

    for (var songId of this.playlists[playlistId].tracks) {

      this.printSongDetails(songId);

    }
  }

}

