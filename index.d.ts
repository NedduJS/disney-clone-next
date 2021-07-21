type Url = string;
type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[];

type TMovieId = string;

type TMovie = {
  id: TMovieId;
  backgroundImg: Url;
  cardImg: Url;
  description: string;
  subTitle: string;
  title: string;
  titleImg: Url;
  type: string;
};
