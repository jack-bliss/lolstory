import * as express from 'express';
import { join } from 'path';
import { FetchSummoner } from './src/server/fetch-summoner';
import { FetchMatchList } from './src/server/fetch-match-list';
import { FetchMatch } from './src/server/fetch-match';

const app = express();
const PORT = parseInt(process.env.PORT, 10) || 3000;
const RIOTKEY = process.env.RIOTKEY;

app.use(express.static('dist'));

app.get('/summoner/:name', (req, res) => {
  FetchSummoner(req.params.name, RIOTKEY)
    .then(summoner => {
      res.send(summoner);
    }, err => {
      res.status(err.code);
      res.send(err);
    });
});

app.get('/matches/:accountId', (req, res) => {
  FetchMatchList(req.params.accountId, RIOTKEY)
    .then(match_list => {
      res.send(match_list);
    }, err => {
      res.status(err.code);
      res.send(err);
    });
});

app.get('/match/:matchId', (req, res) => {
  FetchMatch(req.params.matchId, RIOTKEY)
    .then(match => {
      res.send(match);
    }, err => {
      res.status(err.code);
      res.send(err);
    });
});

app.get('/app.css', (req, res) => {
  res.sendFile(join(__dirname, './src/client/app.css'));
});

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, './src/client/app.html'));
});

app.listen(PORT, () => {
  console.log('LOLStory running on ' + PORT);
});
