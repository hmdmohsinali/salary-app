// import React, { useState } from 'react';
// import { Box, List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography, Divider, TextField, Button } from '@mui/material';
// import { styled } from '@mui/material/styles';

// const Content = styled('div')(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   height: 'calc(100vh - 100px)', // Adjust based on your header height
// }));

// const Root = styled('div')(({ theme }) => ({
//   display: 'flex',
//   border: '1px solid black',
//   flexGrow: 1,
//   overflow: 'hidden',
// }));

// const Sidebar = styled(Box)(({ theme }) => ({
//   width: '300px',
//   borderRight: `1px solid ${theme.palette.divider}`,
//   overflowY: 'auto',
// }));

// const ChatArea = styled(Box)(({ theme }) => ({
//   flexGrow: 1,
//   display: 'flex',
//   flexDirection: 'column',
//   overflow: 'hidden',
// }));

// const ChatHeader = styled(Box)(({ theme }) => ({
//   padding: theme.spacing(2),
//   borderBottom: `1px solid ${theme.palette.divider}`,
//   backgroundColor: theme.palette.background.paper,
// }));

// const ChatMessages = styled(Box)(({ theme }) => ({
//   flexGrow: 1,
//   padding: theme.spacing(2),
//   overflowY: 'auto',
// }));

// const ChatInput = styled(Box)(({ theme }) => ({
//   padding: theme.spacing(2),
//   borderTop: `1px solid ${theme.palette.divider}`,
//   display: 'flex',
//   backgroundColor: theme.palette.background.paper,
// }));

// const users = [
//   { id: 1, name: 'Shah Rukh Khan', username: '@srk', dp: '/mnt/data/image.png' },
//   { id: 2, name: 'Robert Downey Jr.', username: '@rdj', dp: '/mnt/data/image.png' },
//   { id: 3, name: 'Tom Cruise', username: '@tomcruise', dp: '/mnt/data/image.png' },
//   { id: 4, name: 'ElezaBeth', username: '@elezabeth', dp: '/mnt/data/image.png' },
//   { id: 5, name: 'Kate Winslet', username: '@KateWinslet', dp: '/mnt/data/image.png' },
//   { id: 6, name: 'Saoirse Hopper', username: '@saoirsehop', dp: '/mnt/data/image.png' },
//   // Removed duplicate users
// ];

// const ChatInterface = () => {
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [message, setMessage] = useState('');
//   const [chatMessages, setChatMessages] = useState([]);

//   const handleUserClick = (user) => {
//     setSelectedUser(user);
//   };

//   const handleSendMessage = () => {
//     if (message.trim()) {
//       setChatMessages([...chatMessages, { sender: 'me', text: message }]);
//       setMessage('');
//     }
//   };

//   return (
//     <Content>
//       <Root>
//         <Sidebar>
//           <List>
//             {users.map((user) => (
//               <React.Fragment key={user.id}>
//                 <ListItem button onClick={() => handleUserClick(user)}>
//                   <ListItemAvatar>
//                     <Avatar alt={user.name} src={user.dp} />
//                   </ListItemAvatar>
//                   <ListItemText primary={user.name} secondary={user.username} />
//                 </ListItem>
//                 <Divider variant="inset" component="li" />
//               </React.Fragment>
//             ))}
//           </List>
//         </Sidebar>
//         <ChatArea>
//           {selectedUser ? (
//             <>
//               <ChatHeader>
//                 <Typography variant="h6">{selectedUser.name}</Typography>
//               </ChatHeader>
//               <ChatMessages>
//                 {chatMessages.map((msg, index) => (
//                   <Box key={index} display="flex" justifyContent={msg.sender === 'me' ? 'flex-end' : 'flex-start'} mb={1}>
//                     <Box
//                       bgcolor={msg.sender === 'me' ? 'primary.main' : 'grey.300'}
//                       color={msg.sender === 'me' ? 'primary.contrastText' : 'text.primary'}
//                       px={2}
//                       py={1}
//                       borderRadius={5}
//                       maxWidth="70%"
//                     >
//                       {msg.text}
//                     </Box>
//                   </Box>
//                 ))}
//                 {/* Dummy chat bubbles */}
//                 <Box display="flex" justifyContent="flex-start" mb={1}>
//                   <Box bgcolor="grey.300" color="text.primary" px={2} py={1} borderRadius={5} maxWidth="70%">
//                     Hey! How are you? It’s been a while. How is your travel to UK?
//                   </Box>
//                 </Box>
//                 <Box display="flex" justifyContent="flex-end" mb={1}>
//                   <Box bgcolor="primary.main" color="primary.contrastText" px={2} py={1} borderRadius={5} maxWidth="70%">
//                     Hey too! Its great, UK is awesome, especially London. New job is good so far! How about you?
//                   </Box>
//                 </Box>
//                 <Box display="flex" justifyContent="flex-start" mb={1}>
//                   <Box bgcolor="grey.300" color="text.primary" px={2} py={1} borderRadius={5} maxWidth="70%">
//                     I’m fine, I’m thinking about new project. I want to open an online store. But I don’t know what to sell. Maybe I will sell stones and water.
//                   </Box>
//                 </Box>
//                 <Box display="flex" justifyContent="flex-end" mb={1}>
//                   <Box bgcolor="primary.main" color="primary.contrastText" px={2} py={1} borderRadius={5} maxWidth="70%">
//                     Yeah it's great idea, you know - everyone needs water, I don't know about stones xD
//                   </Box>
//                 </Box>
//               </ChatMessages>
              
//             </>
//           ) : (
//             <Box display="flex" justifyContent="center" alignItems="center" flexGrow={1}>
//               <Typography variant="h4">Users Chat</Typography>
//             </Box>
//           )}
//         </ChatArea>
//       </Root>
//     </Content>
//   );
// };

// export default ChatInterface;
