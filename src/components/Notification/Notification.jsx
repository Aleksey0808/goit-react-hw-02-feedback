import React from 'react';
import { Title } from 'components/Notification/Notification.styled';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return <Title>{message}</Title>;
}

Notification.prototype = {
  message: PropTypes.string.isRequired,
};

export default Notification;
