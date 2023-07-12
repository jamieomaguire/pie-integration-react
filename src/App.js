import './App.css';
import '@justeat/pie-design-tokens/dist/jet.css';
import '@justeat/pie-design-tokens/dist/jet-hsl-colors.css';
import { PieButton } from '@justeattakeaway/pie-button/dist/react';
import { PieModal } from '@justeattakeaway/pie-modal/dist/react';

function App() {
  const handleModalClose = () => {
    console.log('Modal closed');
  };
  return (
    <div className="App">
      <header className="App-header">
        <PieButton>Hello, Clarice</PieButton>
        <PieModal
          isOpen
          isDismissible
          heading="Lit Modal"
          headingLevel="h3"
          size="large"
          isFullWidthBelowMid
          onpiemodalclose={handleModalClose}>
            Hello there
        </PieModal>
      </header>
    </div>
  );
}

export default App;
