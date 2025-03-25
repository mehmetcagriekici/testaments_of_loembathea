//verses types
export interface VerseContent {
  text: string;
  N: string;
  W: string;
  S: string;
  E: string;
}

export interface VerseSubscriber {
  user_id: string;
}

export interface Verse {
  id: string;
  subtitle: string;
  content: { [index: number]: VerseContent };
  created_by: string;
  subscribers: { [id: string]: VerseSubscriber };
  testament_id: string;
  created_at: Date;
  updated_at: Date;
}
