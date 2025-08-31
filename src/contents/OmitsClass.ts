export interface Subject {
  id: number | string;
  name: string;
  presenter: string;
  videoUrl: string;
}

export const subjects: Subject[] = [
  {
    id: 1,
    name: 'SD',
    presenter: 'Maharani Dewi Wulansari',
    videoUrl: 'placeholder_video_SD',
  },
  {
    id: 2,
    name: 'SMP',
    presenter: 'Muhammad Ammar Balwan',
    videoUrl: 'placeholder_video_SMP',
  },
  {
    id: 3,
    name: 'SMA',
    presenter: 'Grace Tiwy Sitanggang',
    videoUrl: 'placeholder_video_SMA',
  },
  {
    id: 4,
    name: 'MISSION',
    presenter: 'Muhammad Fikri Hidayat',
    videoUrl: 'placeholder_video_MISSION',
  },
];
