var exampleInput = [
  { title: "Intro", artist: "The xx", minutes: 127 },
  { title: "Free Fallin'", artist: "Tom Petty", minutes: 256 },
  { title: "What You Know", artist: "Two Door Cinema Club", minutes: 191 },
  { title: "Closer", artist: "The Chainsmokers", minutes: 244 },
  { title: "Gooey", artist: "Glass Animals", minutes: 289 },
];

// P: Parameters = array of song objects; function name = justTitles
// R: return an array of the titles of the song objects in the array
// E: Example: exampleInput => we expect a result of:
// ["Intro", "Free Fallin'", "What You Know", "Closer", "Gooey"]
// P: Pseudocode - see pseudocode throughout

function justTitles(songArray) {
  // Use the .map function on songArray and return it
  return songArray.map(function (song) {
    // Just return the title property of each song (.map function will put
    // each into an array automatically)
    return song.title;
  });
}

console.log(justTitles(exampleInput));
