import { Group } from '../models'

export const groups: Group[] = [
  {
    id: 'group1',
    memberCount: '1.2K',
    name: 'Group 1',
    mediaUrl: 'https://picsum.photos/id/27/400/200',
    owner: 'Kyle Lynch',
    type: 'private',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et elementum lacus. Duis justo nisl, mattis in tincidunt et, ullamcorper a massa. Suspendisse lectus nisl, blandit vel nulla sed, pharetra molestie diam.',
    price: '9.99',
    currency: '$',
    periodically: 'mo',
    requirements: {
      minimumAccountAge: '18',
      minimumFollowers: '1000',
      minimumUSFollowers: '10',
    },
  },
  {
    id: 'group2',
    memberCount: '0.6M',
    name: 'Group 2',
    mediaUrl: 'https://picsum.photos/id/7/400/200',
    owner: 'Alicia Tucker',
    type: 'public',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et elementum lacus. Duis justo nisl, mattis in tincidunt et, ullamcorper a massa. Suspendisse lectus nisl, blandit vel nulla sed, pharetra molestie diam.',
    price: '19.99',
    currency: '$',
    periodically: 'mo',
    requirements: {
      minimumAccountAge: '18',
      minimumFollowers: '1000',
      minimumUSFollowers: '10',
    },
  },
  {
    id: 'group3',
    memberCount: '10.3K',
    name: 'Group 3',
    mediaUrl: 'https://picsum.photos/id/158/400/200',
    owner: 'Louis Hopkins',
    type: 'private',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et elementum lacus. Duis justo nisl, mattis in tincidunt et, ullamcorper a massa.',
    price: '100',
    currency: '$',
    periodically: 'mo',
    requirements: {
      minimumAccountAge: '18',
      minimumFollowers: '1000',
      minimumUSFollowers: '10',
    },
  },
  {
    id: 'group4',
    memberCount: '1.2M',
    name: 'Group 4',
    mediaUrl: 'https://picsum.photos/id/128/400/200',
    owner: 'Shelia Edwards',
    type: 'public',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: '200',
    currency: '$',
    periodically: 'mo',
    requirements: {
      minimumAccountAge: '18',
      minimumFollowers: '1000',
      minimumUSFollowers: '10',
    },
  },
  {
    id: 'group5',
    memberCount: '1.2M',
    name: 'Group 5',
    owner: 'Shelia Edwards',
    type: 'public',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: '300',
    currency: '$',
    periodically: 'mo',
    requirements: {
      minimumAccountAge: '18',
      minimumFollowers: '1000',
      minimumUSFollowers: '10',
    },
  },
]
