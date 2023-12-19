interface League {
  title: string;
  league_id: number;
  league_logo: string;
  currentMatches: number;
  tableLeader: string;
  className: string;
}

export const top5leagues: League[] = [
  {
    title: "Premier League",
    league_id: 1,
    league_logo: "premier-league.png",
    currentMatches: 10,
    tableLeader: "Manchester City",
    className: "premierLeague",
  },
  {
    title: "La Liga",
    league_id: 2,
    league_logo: "LaLiga.png",
    currentMatches: 14,
    tableLeader: "Real Madrid",
    className: "laliga",
  },
  {
    title: "Serie A",
    league_id: 3,
    league_logo: "serie-a.png",
    currentMatches: 8,
    tableLeader: "Juventus",
    className: "serieA",
  },
  {
    title: "Ligue 1",
    league_id: 4,
    league_logo: "ligue1.png",
    currentMatches: 12,
    tableLeader: "PSG",
    className: "ligue1",
  },
  {
    title: "Bundesliga",
    league_id: 5,
    league_logo: "bundesliga.png",
    currentMatches: 10,
    tableLeader: "Borussia Dortmund",
    className: "bundesliga",
  },
];

interface FootballBets {
  date: string;
  time: string;
  homeTeamName: string;
  homeTeamBadge: string;
  homeTeamOdd: number;
  draw: number;
  awayTeamName: string;
  awayTeamBadge: string;
  awayTeamOdd: number;
  markets: string;
}

export const footballBets: FootballBets[] = [
  {
    date: "today",
    time: "10:00",
    homeTeamName: "Manchester City",
    homeTeamBadge: "manCity",
    homeTeamOdd: 1.78,
    draw: 3.44,
    awayTeamName: "Liverpool",
    awayTeamBadge: "liverpool",
    awayTeamOdd: 3.5,
    markets: "+120",
  },
  {
    date: "today",
    time: "10:00",
    homeTeamName: "Arsenal",
    homeTeamBadge: "arsenal",
    homeTeamOdd: 1.9,
    draw: 4.65,
    awayTeamName: "Wolves",
    awayTeamBadge: "wolves",
    awayTeamOdd: 5.43,
    markets: "+120",
  },
  {
    date: "today",
    time: "11:30",
    homeTeamName: "AS Roma",
    homeTeamBadge: "roma",
    homeTeamOdd: 2.1,
    draw: 2.7,
    awayTeamName: "Lazio",
    awayTeamBadge: "lazio",
    awayTeamOdd: 2.3,
    markets: "+80",
  },
];
