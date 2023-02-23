import React from 'react';
import { Title } from 'components/Sections/Section.styled';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <section>
      <Title>{title}</Title>
      {children}
    </section>
  );
}

Section.proTotypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
