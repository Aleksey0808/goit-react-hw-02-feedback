import React from 'react';
import { Title } from 'components/Notification/Notification.styled';

function Notification({ message }) {
  return <Title>{message}</Title>;
}

export default Notification;
