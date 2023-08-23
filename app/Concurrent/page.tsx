'use client'
import React, { useState, useTransition } from 'react';

function ResourceComponent({ resource }) {
    return (
      <div>
        <h2>Resource Loaded</h2>
        <p>{resource}</p>
      </div>
    );
  }
  

function App() {
  const [resource, setResource] = useState(null);
  const [isPending, startTransition] = useTransition();
  // Delay before showing the loading indicator
  return (
    <React.StrictMode>
      <button
        onClick={() => {
          startTransition(() => {
            // Start loading the resource here
            // setResource(result);
          });
        }}
        disabled={isPending}
      >
        {isPending ? 'Loading...' : 'Load Resource'}
      </button>
      {resource && <ResourceComponent resource={resource} />}
    </React.StrictMode>
  );
}

export default App;
