export class Vacation {
  id = 0;
  name = '';
  price = 0;
  totalDays : number = 0;
  guests: Guests[];
}

export class Guests {
  guestName = 'Enter guest name';
  guestDays : number  = 0;
}

export const vacations: Vacation[] = [
  {
    id: 1,
    name: 'New vacation',
    price: 0,
    totalDays: 0,
    guests: [
      {guestName: 'Enter guest name',  guestDays: 0},
    ]
  },
  {
    id: 2,
    name: 'Donalds bachelor party',
    price: 125000,
    totalDays: 0,
    guests: [
      {guestName: 'Donald Trump',  guestDays: 7},
      {guestName: 'Johnny Walker', guestDays: 5},
      {guestName: 'Bill Clinton', guestDays: 4},
      {guestName: 'Bill Belichick', guestDays: 5},
      {guestName: 'Clint Eastwood', guestDays: 2},
      {guestName: 'Charles Barkley', guestDays: 7},
      {guestName: 'Lil Wayne', guestDays: 7},
    ]
  },
];

