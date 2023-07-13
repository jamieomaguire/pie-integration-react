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
  const decrement = () => { 
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Just Eat Chicken Strips</h1>
        <p>Buy all the chicken strips here</p>
        <PieButton onClick={toggleModal}>Menu</PieButton>
        <p>Basket: {count} Chicken strip{count === 1 ? '' : 's'} {count > 10 ? ' - nice!' : '' }</p>
        <PieModal
          isOpen={isModalOpen}
          isDismissible
          heading="It's all chicken strips"
          headingLevel="h2"
          size="medium"
          isFullWidthBelowMid
          onPieModalClose={handleModalClose}>
            <div className="modal-inner">
              <h3>Chicken Strips</h3>
              <p>£4.50</p>
              <p>5 pieces</p>
              <p>410 kcal</p>
              <div className="modal-controls">
                <PieButton disabled={count <= 0}size="small-expressive" onClick={decrement}>Remove</PieButton>
                <span>{ count }</span>
                <PieButton size="small-expressive" onClick={increment}>Add</PieButton>
              </div>
            </div>
        </PieModal>
      </header>
    </div>
  );
}

export default App;
