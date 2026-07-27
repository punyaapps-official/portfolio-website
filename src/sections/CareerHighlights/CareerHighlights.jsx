import React from 'react';
import Container from '../../components/Container/Container';
import StatCard from '../../components/StatCard/StatCard';

const highlights = [
  { value: '30+', label: 'International Websites' },
  { value: '10+', label: 'Websites Built' },
  { value: '4+', label: 'Years Experience' },
  { value: '1', label: 'Custom WP Plugin' },
  { value: '10-15', label: 'Support Tickets / Week' },
];

function CareerHighlights() {
  return (
    <section className="py-12">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {highlights.map((h) => (
            <StatCard key={h.label} value={h.value} label={h.label} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default CareerHighlights;
