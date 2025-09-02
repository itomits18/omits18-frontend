export interface Subject {
  id: number | string;
  name: string;
  videoUrl: string;
}

export const subjects: Subject[] = [
  {
    id: 1,
    name: 'VIDEO 1',
    videoUrl: 'placeholder_video_SD',
  },
  {
    id: 2,
    name: 'VIDEO 2',
    videoUrl: 'placeholder_video_SMP',
  },
  {
    id: 3,
    name: 'VIDEO 3',
    videoUrl: 'placeholder_video_SMA',
  },
  {
    id: 4,
    name: 'RECORD 1',
    videoUrl: 'placeholder_video_MISSION',
  },
];
