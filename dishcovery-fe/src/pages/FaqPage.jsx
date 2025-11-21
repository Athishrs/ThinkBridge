// src/pages/FaqPage.jsx
import React from 'react';
import { FaqAccordion } from '../components/faq/FaqAccordion';

const FAQ_ITEMS = [
  {
    id: 'search',
    question: 'How do I search for a specific recipe?',
    answer:
      'Use the search bar to type a recipe name, ingredient, or cuisine. You can also refine results using the filters for cuisine, dietary options, cooking level, and time.',
  },
  {
    id: 'account',
    question: 'Do I need an account to view recipes?',
    answer:
      'No, you can browse and view most recipes without an account. Creating an account lets you save favourites, track recently cooked dishes, and get personalized suggestions.',
  },
  {
    id: 'download',
    question: 'Can I print or download recipes?',
    answer:
      'Yes. On each recipe page you can print the recipe directly from your browser, or save it as a PDF using the print dialog.',
  },
  {
    id: 'dietary',
    question:
      'What if I have dietary restrictions (vegan, gluten-free, etc.)?',
    answer:
      'You can filter recipes by dietary options such as vegetarian, vegan, gluten-free, and more. Each recipe also lists key allergens and dietary notes.',
  },
  {
    id: 'doneness',
    question: 'How do I know when a dish is properly cooked?',
    answer:
      'Many recipes include visual cues, internal temperature guidelines, and timing suggestions. When in doubt, follow the doneness tips in the Cooking Steps section of each recipe.',
  },
];

export const FaqPage = () => {
  return (
    <div className="faq-page">
      <h1 className="faq-title">Frequently Asked Questions</h1>

      <section className="faq-section">
        <FaqAccordion items={FAQ_ITEMS} />
      </section>
    </div>
  );
};
