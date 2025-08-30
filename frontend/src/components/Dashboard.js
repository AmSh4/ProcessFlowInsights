import React from 'react';
import { useSelector } from 'react-redux';
import ProcessGraph from './ProcessGraph';

const Dashboard = () => {
  const analysis = useSelector(state => state.analysis);

  return (
    <div className="dashboard">
      <h1>Process Flow Dashboard</h1>
      {analysis.data ? (
        <>
          <ProcessGraph data={analysis.data} />
          <h2>Automation Suggestions</h2>
          <ul>
            {analysis.suggestions.map((sug, idx) => <li key={idx}>{sug}</li>)}
          </ul>
        </>
      ) : (
        <p>Upload an event log to start analysis.</p>
      )}
    </div>
  );
};

export default Dashboard;