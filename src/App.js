import './App.css';
import '@justeat/pie-design-tokens/dist/jet.css';
import '@justeat/pie-design-tokens/dist/jet-hsl-colors.css';
import { PieButton } from '@justeattakeaway/pie-button/dist/react';
import { PieModal } from '@justeattakeaway/pie-modal/dist/react';
import React, { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleModalClose = () => {
      console.log('modal closed');
      setIsModalOpen(false);
  }

  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="App">
      <header className="App-header">
        <PieButton onClick={toggleModal}>Hello, Clarice</PieButton>
        <PieModal
          isOpen={isModalOpen}
          isDismissible
          heading="Lit Modal"
          headingLevel="h3"
          size="large"
          isFullWidthBelowMid
          onpiemodalclose={handleModalClose}>
            <p>Use the controls to increment and decrement the counter :)</p>
            <p>Counter: { count }</p>
            <PieButton size="xsmall" onClick={increment}>Increment</PieButton>
            <PieButton size="xsmall" onClick={decrement}>Decrement</PieButton>
        </PieModal>
      </header>
    </div>
  );
}

export default App;
