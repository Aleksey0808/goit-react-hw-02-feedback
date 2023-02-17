import React from 'react';
import { Title } from 'components/Sections/Section.styled';

export default function Section({ title, children }) {
  return (
    <section>
      <Title>{title}</Title>
      {children}
    </section>
  );
}
