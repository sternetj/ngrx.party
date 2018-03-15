const express = require('express');
const router = express.Router();

const events = require('events');
const request = require('request');

const emitter = new events.EventEmitter();

const base = 'https://www.googleapis.com/youtube/v3';
const apiKey = process.env.YOUTUBE_KEY;
const searchBase = `${base}/search?part=snippet&key=${apiKey}&maxResults=7&topicId=/m/04rlf`;

const songs = [];

router.get('/', (req, res) => res.send(songs));

const fakeSearchResults = [
  {
    id: 'PWgvGjAhvIw',
    title: 'OutKast - Hey Ya!',
    description:
      "OutKast's official music video for 'Hey Ya!'. Click to listen to OutKast on Spotify: http://smarturl.it/OutKastSpotify?IQid=OutKHY As featured on SpeakerBoxxx/The Love Below. Click to buy...",
    thumbnail: 'https://i.ytimg.com/vi/PWgvGjAhvIw/hqdefault.jpg'
  },
  {
    id: 'gJLIiF15wjQ',
    title: 'Spice Girls - Wannabe',
    description:
      'Vote for your favourite girl group here: https://www.udiscovermusic.com/stories/best-girl-groups/ Listen to more from The Spice Girls: http://spicegirls.lnk.to/Essentials Listen to some of...',
    thumbnail: 'https://i.ytimg.com/vi/gJLIiF15wjQ/hqdefault.jpg'
  },
  {
    id: 'rYEDA3JcQqw',
    title: 'Adele - Rolling in the Deep',
    description:
      'Buy/Listen 25: http://smarturl.it/25Album?IQid=yt Buy/Listen 21: http://smarturl.it/Adele21Album?IQid=yt Buy/Listen 19: http://smarturl.it/19Album?IQid=yt Follow Adele on: Facebook - http://faceb...',
    thumbnail: 'https://i.ytimg.com/vi/rYEDA3JcQqw/hqdefault.jpg'
  },
  {
    id: 'tlYcUqEPN58',
    title: 'Ed Sheeran - Sing [Official Video]',
    description:
      "Here's my official music video for 'Sing' featuring the talented Pharrell Williams. Buy now on iTunes: http://smarturl.it/EdSing Subscribe to my channel: http://bit.ly/SubscribeToEdSheeran...",
    thumbnail: 'https://i.ytimg.com/vi/tlYcUqEPN58/hqdefault.jpg'
  },
  {
    id: 'xy4FXhkm6Nw',
    title: 'Young MC - Bust A Move',
    description:
      'Buy on iTunes: http://bit.ly/fpGNq7 http://www.deliciousvinyl.com ------------------------------ http://www.deliciousvinyl.com As heard everywhere 1989! From his Delicious Vinyl...',
    thumbnail: 'https://i.ytimg.com/vi/xy4FXhkm6Nw/hqdefault.jpg'
  },
  {
    id: '4fndeDfaWCg',
    title: 'Backstreet Boys - I Want It That Way',
    description:
      "Backstreet Boys' official music video for 'I Want It That Way'. Click to listen to Backstreet Boys on Spotify: http://smarturl.it/BBSpot?IQid=BBTW Backstreet Boys will be going back on tour...",
    thumbnail: 'https://i.ytimg.com/vi/4fndeDfaWCg/hqdefault.jpg'
  },
  {
    id: 'y0p3jn7ODuc',
    title: "Aaron Carter - Aaron's Party (Come Get It)",
    description:
      "Aaron Carter's official music video for 'Aaron's Party (Come Get It)'. Click to listen to Aaron Carter on Spotify: http://smarturl.it/AaronCarterSpotify?IQid=AaronCAP As featured on Aaron's...",
    thumbnail: 'https://i.ytimg.com/vi/y0p3jn7ODuc/hqdefault.jpg'
  }
];

router.get('/search', (req, res) => {
  if(!apiKey) {
    return res.json(fakeSearchResults);
  }

  request(`${searchBase}&q=${req.query.search}`, (err, response) => {
    if (err) {
      console.log(err);
      return res.status(500).end();
    }

    const result = JSON.parse(response.body);

    const foundSongs = result.items
      .map(song => ({
        id: song.id.videoId,
        title: song.snippet.title,
        description: song.snippet.description,
        thumbnail: (
          song.snippet.thumbnails.high ||
          song.snippet.thumbnails.medium ||
          song.snippet.thumbnails.default
        ).url
      }))
      .filter(song => !!song.id);

    res.json(foundSongs);
  });
});

router.post('/', (req, res) => {
  var newSong = req.body;

  songs.push({
    ...newSong,
  });

  emitter.emit('song', songs);

  res.send(songs);
});

module.exports = {
  router,
  emitter,
};
