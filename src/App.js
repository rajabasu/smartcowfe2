import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

function App() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Navbar handleDrawerOpen={handleDrawerOpen} open={open} />
      <Main handleDrawerClose={handleDrawerClose} open={open} />
    </div>
  );
}

export default App;
