import * as React from 'react';
import { MatchDTO } from '../../../interfaces/RiotDTOs/MatchDTO.interface';
import { MatchDisplayWrapper } from './match-display-wrapper';
import { SummonerDTO } from '../../../interfaces/RiotDTOs/SummonerDTO.interface';
import { ParticipantDTO } from '../../../interfaces/RiotDTOs/ParticipantDTO.interface';
import { ParticipantIdentityDTO } from '../../../interfaces/RiotDTOs/ParticipantIdentityDTO.interface';
import { LolChampions } from '../../../static-data/lol-champions';
import { Champion } from '../../../interfaces/champion.interface';
import { MatchDisplayChampion } from './match-display-champion';
import { MatchDisplayDuration } from './match-display-duration';
import { MatchDisplayOutcome } from './match-display-outcome';
import { MatchDisplaySpells } from './match-display-spells';
import { SpellDisplay } from '../../shared/spell-display';
import { LolSpells } from '../../../static-data/lol-spells';
import { Duration } from '../../../utils/duration';
import { MatchDisplayKDA } from './match-display-kda';
import { MatchDisplayHeader } from './match-display-header';
import { MatchDisplayInventory } from './match-display-inventory';
import { MatchDisplayStats } from './match-display-stats';
import { MatchDisplayLevel } from './match-display-level';
import { MatchDisplayCreepScore } from './match-display-creep-score';
import { MatchDisplayCPM } from './match-display-cpm';
import { MatchDisplayRunes } from './match-display-runes';
import { RuneDisplay } from '../../shared/rune-dispaly';
import { LolRunes } from '../../../static-data/lol-runes';
import { Item } from '../../../interfaces/item.interface';
import { LolItems } from '../../../static-data/lol-items';
import { MatchDisplayItems } from './match-display-items';
import { ItemDisplay } from '../../shared/item-display';
import { RoundToN } from '../../../utils/round-to-n';

export interface MatchDisplayProps {
  match: MatchDTO;
  summoner: SummonerDTO;
}

export const MatchDisplay = ({ match, summoner }: MatchDisplayProps) => {

  const participantId: ParticipantIdentityDTO = match.participantIdentities.find(pi => {
    return pi.player.accountId === summoner.accountId;
  });

  const participant: ParticipantDTO = match.participants.find(p => {
    return p.participantId === participantId.participantId;
  });

  const champion: Champion = LolChampions.find(c => {
    return c.id === participant.championId;
  }); 
  const won = participant.stats.win;
  const duration = match.gameDuration;

  const spells = [participant.spell1Id, participant.spell2Id].map(spell => {
    return LolSpells.find(s => s.id === spell);
  });
  const runes = (participant.hasOwnProperty('runes') ? participant.runes : []).map(rune => {
    return LolRunes.find(r => r.id === rune.runeId);
  });
  const itemIds: number[] = [
    participant.stats.item0,
    participant.stats.item1,
    participant.stats.item2,
    participant.stats.item3,
    participant.stats.item4,
    participant.stats.item5,
    participant.stats.item6,
  ]; 
  const items: Item[] = itemIds.map(iid => {
    const item = LolItems.find(i => i.id === iid);
    if (!item) {
      return LolItems.find(i => i.id === -1);
    } else {
      return item;
    }
  });

  const kills = participant.stats.kills;
  const deaths = participant.stats.deaths;
  const assists = participant.stats.assists;

  const creepScore = participant.stats.totalMinionsKilled;
  const creepPerMinute = RoundToN(creepScore / (duration / 60), 4);
  const level = participant.stats.champLevel;
  

  return <MatchDisplayWrapper>

    <MatchDisplayHeader>
      <MatchDisplayChampion>{champion.name}</MatchDisplayChampion>
      <MatchDisplayOutcome win={won}>{won ? 'win' : 'loss'}</MatchDisplayOutcome>
      <MatchDisplayDuration>{Duration(duration)}</MatchDisplayDuration>
    </MatchDisplayHeader>

    <MatchDisplayStats>
      <MatchDisplayLevel>Level: {level}</MatchDisplayLevel>
      <MatchDisplayKDA>{kills} / {deaths} / {assists}</MatchDisplayKDA>
      <MatchDisplayCreepScore>Creeps Killed: {creepScore}</MatchDisplayCreepScore>
      <MatchDisplayCPM>CPM: {creepPerMinute}</MatchDisplayCPM>
    </MatchDisplayStats>

    <MatchDisplayInventory>
      <MatchDisplaySpells>
        {spells.map(s => <SpellDisplay>{s.name}</SpellDisplay>)}
      </MatchDisplaySpells>
      <MatchDisplayRunes>
        {runes.map(r => <RuneDisplay>{r.name}</RuneDisplay>)}
      </MatchDisplayRunes>
      <MatchDisplayItems>
        {items.map(i => <ItemDisplay>{i.name}</ItemDisplay>)}
      </MatchDisplayItems>
    </MatchDisplayInventory>

  </MatchDisplayWrapper>; 
};
