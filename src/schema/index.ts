export type ID = number;

export interface Identifiable<IdType = ID> {
  id: IdType;
}

export interface Course extends Identifiable {
  title: string;
  creationDate: string;
  durationMintues: number;
  description: string;
}

export interface User extends Identifiable {
  firstName: string;
  lastName: string;
}
