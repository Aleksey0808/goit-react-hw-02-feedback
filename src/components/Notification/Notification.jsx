import React from 'react';
import { Title } from 'components/Notification/Notification.styled';

export default function Notification({ message }) {
  return <Title>{message}</Title>;
}
