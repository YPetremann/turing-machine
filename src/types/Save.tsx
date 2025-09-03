interface Info{
  /** mode */
  m:number; 
  /** difficulty */
  d:number;
  /** number of verificators */
  n:number;

  verifier: Record<string, number>;

  user:string;
  hash:string;
}
export interface Save{
  version?:string;
  name: string;
  info: Info;
  codes?: Record<string, number>;
  res?: Record<string, number>;
  deduct?: Record<string, number>;
  cross?: Record<string, number>;
  grid?: Record<string, number>;
  notes?: Record<string, number>;
}
