import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('Projects');

  function renderPage() {
    switch (currentPage) {
      case 'Projects':
          return <Projects/>;
      case 'Contact':
          return <Contact/>;
      case 'Resume': 
          return <Resume/>;
      default:
        return <About/>;
    }
  };

  return (
    <div>
      <header className="header">
        <h1>Ali Rueter</h1>
        <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </header>
      <main className="content-wrapper">
        {renderPage(currentPage)}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;