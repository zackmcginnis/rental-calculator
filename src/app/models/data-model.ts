export class Vacation {
  id = 0;
  name = '';
  guests: Guests[];
}

export class Guests {
  street = '';
  city   = '';
  state  = '';
  zip    = '';
}

export const vacations: Vacation[] = [
  {
    id: 1,
    name: 'Whirlwind',
    guests: [
      {street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801'},
      {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226'},
    ]
  },
  {
    id: 2,
    name: 'Bombastic',
    guests: [
      {street: '789 Elm',  city: 'Smallville', state: 'OH',  zip: '04501'},
    ]
  },
  {
    id: 3,
    name: 'Magneta',
    guests: [ ]
  },
];