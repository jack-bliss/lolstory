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
    });
});

app.get('/matches/:accountId', (req, res) => {
  FetchMatchList(req.params.accountId, RIOTKEY)
    .then(match_list => {
      res.send(match_list);
    });
});

app.get('/match/:matchId', (req, res) => {
  FetchMatch(req.params.matchId, RIOTKEY)
    .then(match => {
      res.send(match);
    });
});

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, './src/client/app.html'));
});

app.listen(PORT, () => {
  console.log('LOLStory running on ' + PORT);
});
