import { useState } from 'react';
import classes from './App.module.scss';

/* Pages -------------------------------------------------------------------- */

import SignUp from '@/pages/SignUp/SignUp';
import SignIn from '@/pages/SignIn/SignIn';
import { useToggle } from '@/hooks/useToggle';

/* Component ---------------------------------------------------------------- */

function App() {
  const { toggle, onToggle, offToggle } = useToggle(true);

  return (
    <div className={classes.App}>
      <button onClick={toggle ? offToggle : onToggle}>Toggle</button>
      {toggle ? <SignUp /> : <SignIn />}
    </div>
  );
}

export default App;
