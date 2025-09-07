export interface Subject {
  id: number | string;
  name: string;
  videoUrl: string;
}

export const subjects: Subject[] = [
  {
    id: 1,
    name: 'Pembahasan Soal',
    videoUrl: 'placeholder_video_SD',
  },
  {
    id: 2,
    name: 'Record Zoom',
    videoUrl: 'placeholder_video_SMP',
  },
];
