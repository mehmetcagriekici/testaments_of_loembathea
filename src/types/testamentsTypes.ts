//testaments types
export interface TestamentContent {
  verse_id: {
    creator_id: string;
    N: string;
    W: string;
    S: string;
    E: string;
  };
}

export interface TestamentMember {
  user_id: string;
}

export interface Testament {
  id: string;
  title: string;
  content: { [id: string]: TestamentContent };
  members: { [id: string]: TestamentMember };
  created_by: string;
  created_at: Date;
  updated_at: Date;
}
