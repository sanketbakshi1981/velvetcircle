export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: 'Bollywood in Raag Yaman',
    date: '2025-08-10',
    description: 'Spend your evening immersed in the enchanting melodies of Bollywood music, performed live in Raag Yaman.',
    image: '/img/yoga.svg',
  },
  {
    id: 2,
    title: 'Hindi Originals',
    date: '2025-08-15',
    description: 'Experience never before heard music and lyrics composed and performed by local artists',
    image: '/img/cooking.svg',
  },
  {
    id: 3,
    title: 'Mallakhamb Performances & Tryouts',
    date: '2025-08-20',
    description: 'Experience the thrill of Mallakhamb, a traditional Indian sport, with live performances and tryouts.',
    image: '/img/photowalk.svg',
  },
];
