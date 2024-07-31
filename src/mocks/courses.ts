import { Course } from '../schema';

export const MOCK_COURSES: Course[] = [
  {
    id: 1,
    creationDate: new Date(new Date().setFullYear(1999)).toUTCString(),
    description: 'First cource description',
    durationMintues: 30,
    title: 'First course',
  },
  {
    id: 2,
    creationDate: new Date(new Date().setFullYear(2000)).toUTCString(),
    description: 'Second cource description',
    durationMintues: 60,
    title: 'Second course',
  },
];
