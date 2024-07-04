import React from 'react';
import { Card, Typography, Avatar, CardContent, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  margin: theme.spacing(2),
}));

const users = [
  {
    id: 1,
    name: 'Lee from Tennessee',
    email: 'lee@example.com',
    phone: '123-456-7890',
    dp: '/path/to/image.png',
  },
  {
    id: 2,
    name: 'Jane from New York',
    email: 'jane@example.com',
    phone: '234-567-8901',
    dp: '/path/to/image.png',
  },
  {
    id: 3,
    name: 'John from California',
    email: 'john@example.com',
    phone: '345-678-9012',
    dp: '/path/to/image.png',
  },
  {
    id: 4,
    name: 'Sara from Texas',
    email: 'sara@example.com',
    phone: '456-789-0123',
    dp: '/path/to/image.png',
  },
  {
    id: 5,
    name: 'Mike from Florida',
    email: 'mike@example.com',
    phone: '567-890-1234',
    dp: '/path/to/image.png',
  },
  {
    id: 6,
    name: 'Anna from Nevada',
    email: 'anna@example.com',
    phone: '678-901-2345',
    dp: '/path/to/image.png',
  },
  {
    id: 7,
    name: 'Chris from Ohio',
    email: 'chris@example.com',
    phone: '789-012-3456',
    dp: '/path/to/image.png',
  },
  {
    id: 8,
    name: 'Laura from Colorado',
    email: 'laura@example.com',
    phone: '890-123-4567',
    dp: '/path/to/image.png',
  },
  {
    id: 9,
    name: 'Robert from Illinois',
    email: 'robert@example.com',
    phone: '901-234-5678',
    dp: '/path/to/image.png',
  },
  {
    id: 10,
    name: 'Emily from Arizona',
    email: 'emily@example.com',
    phone: '012-345-6789',
    dp: '/path/to/image.png',
  },
  {
    id: 11,
    name: 'David from Washington',
    email: 'david@example.com',
    phone: '123-456-7890',
    dp: '/path/to/image.png',
  },
  {
    id: 12,
    name: 'Sophia from Oregon',
    email: 'sophia@example.com',
    phone: '234-567-8901',
    dp: '/path/to/image.png',
  },
];

const UserList = () => {
  return (
    <>
    <h1>Hello</h1>
    </>
  );
};

export default UserList;
