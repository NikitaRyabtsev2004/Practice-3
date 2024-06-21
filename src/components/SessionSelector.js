import React from 'react';
import { Button } from 'react-bootstrap';

const sessions = ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'];

const SessionSelector = ({ selectedSession, onSelectSession }) => (
  <div className="session-selector">
    {sessions.map((session) => (
      <Button
        key={session}
        variant={session === selectedSession ? 'primary' : 'secondary'}
        onClick={() => onSelectSession(session)}
        className="m-1"
      >
        {session}
      </Button>
    ))}
  </div>
);

export default SessionSelector;
