/* eslint-disable no-plusplus */
// NOTE: replace 'NvPY9M9MzFTARQ6M816YAzDJxZ72' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
  const users = [
    {
      userId: 'pFS4nTHGq5ZpEq6CNMkW7HCSV3i1',
      username: 'ShaqDeezle',
      fullName: 'Shaquil Njovens',
      emailAddress: 'Shaquil360@gmail.com',
      following: ['3', '4', '5', '6', '7'],
      followers: ['3', '4', '5', '6', '7'],
      dateCreated: Date.now()
    },
    {
      userId: '3',
      username: 'RaeOfSunshine',
      fullName: 'Raven Vanderpuye',
      emailAddress: 'salvador@dali.com',
      following: ['7'],
      followers: ['7'],
      dateCreated: Date.now()
    },
    {
      userId: '4',
      username: 'BryFondufe',
      fullName: 'Bryan Fondufe',
      emailAddress: 'george@orwell.com',
      following: [],
      followers: [],
      dateCreated: Date.now()
    },
    {
      userId: '5',
      username: 'Ch1Pper',
      fullName: 'Charles Lee',
      emailAddress: 'lee@orwell.com',
      following: ['6'],
      followers: ['6'],
      dateCreated: Date.now()
    },
    {
      userId: '6',
      username: 'FlyLikeKly',
      fullName: 'Kyle Stegner',
      emailAddress: 'Kyle@orwell.com',
      following: ['5'],
      followers: ['5'],
      dateCreated: Date.now()
    },
    {
      userId: '7',
      username: 'The_1st_Artist',
      fullName: 'Joshua Fortune',
      emailAddress: 'fortune@orwell.com',
      following: ['3'],
      followers: ['3'],
      dateCreated: Date.now()
    }
  ];
  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection('users').add(users[k]);
  }
  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection('photos')
      .add(
        {
          photoId: i,
          userId: '3',
          imageSrc: `/images/users/Raven/${i}.jpg`,
          caption: 'Wave your hands in the air, like you just dont care XD',
          likes: [],
          comments: [
            {
              displayName: 'ShaqDeezle',
              comment: 'You corny af, smh'
            },
            {
              displayName: 'The_1st_Artist',
              comment: 'Yeah she is, jk lol'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        },
        {
          photoId: i,
          userId: 'XdfcI2kP4vO3jCzGp63E1JduL1J3',
          imageSrc: `/images/users/Shaq/${i}.jpg`,
          caption: 'How you gonna get to the top by just fitting in?',
          likes: [],
          comments: [
            {
              displayName: 'ChocolateFondufe',
              comment: 'Facts! #100'
            },
            {
              displayName: 'The_1st_Artist',
              comment: 'Lets GO!!!'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        },
        {
          photoId: i,
          userId: '6',
          imageSrc: `/images/users/Kyle/${i}.jpg`,
          caption: 'Charles better not piss me off today',
          likes: [],
          comments: [
            {
              displayName: 'Ch1Pper',
              comment: 'Too Late XD'
            },
            {
              displayName: 'ShaqDeezle',
              comment: 'Lmao!!'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        }
      );
  }
}
