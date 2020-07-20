import React from 'react';
import { FaUserFriends, FaFighterJet, FaTrophy } from 'react-icons/fa';

import { ThemeConsumer } from '../contexts/theme';

export default function Instructions() {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className="instructions-container">
          <h1 className="center-text header-lg">Instructions</h1>
          <ol className="container-sm grid center-text battle-instructions">
            <li>
              <h3 className="header-sm">Enter two GitHub users</h3>
              <FaUserFriends className={`bg-${theme}`} color="rgb(255, 191, 116)" size={140} />
            </li>
            <li>
              <h3 className="header-sm">Battle</h3>
              <FaFighterJet className={`bg-${theme}`} color="#727272" size={140} />
            </li>
            <li>
              <h3 className="header-sm">See the winners</h3>
              <FaTrophy className={`bg-${theme}`} color="rgb(255, 215, 0)" size={140} />
            </li>
          </ol>
        </div>
      )}
    </ThemeConsumer>
  );
}
