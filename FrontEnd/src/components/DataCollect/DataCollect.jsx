import React, { useState } from 'react';

const YieldPredictionForm = () => {
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [season, setSeason] = useState('');
  const [crop, setCrop] = useState('');
  const [area, setArea] = useState('');
  const [yieldValue, setYieldValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        State:
        <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
      </label>
      <label>
        District:
        <input type="text" value={district} onChange={(e) => setDistrict(e.target.value)} />
      </label>
      <label>
        Season:
        <input type="text" value={season} onChange={(e) => setSeason(e.target.value)} />
        </label>
      <label>
        Crop:
        <input type="text" value={crop} onChange={(e) => setCrop(e.target.value)} />
      </label>
      <label>
        Area:
        <input type="number" value={area} onChange={(e) => setArea(e.target.value)} />
      </label>
      <label>
        Yield:
        <input type="number" value={yieldValue} onChange={(e) => setYieldValue(e.target.value)} />
      </label>
      <button type="submit">Predict Yield</button>
    </form>
  );
};

export default YieldPredictionForm;