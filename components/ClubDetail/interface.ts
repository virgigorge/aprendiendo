export type Jugador = {
  id: number;
  surname: string;
  name: string;
};

export type Partido = {
  id: number;
  local_id: number;
  visitor_id: number;
  local_score: number;
  visitor_score: number;
  competition_id: number;
  local_alias: string;
  visitor_alias: string;
  date: string;
  programme: string;
  status: number;
  status_text: string;
};

export type ClubDetailProps = {
  players: never[];
  id: number;
  name: string;
  fullname: string;
  city_id: number;
  alias: string;
  date: string;
  nickname: string;
  stadium: string;
  stadium_location: string;
  headquarters: string;
  president: string;
  secretary: string;
  active: number;
};
