import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setAnalysis } from '../redux/actions';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    try {
      const res = await axios.post('/api/analyze', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      dispatch(setAnalysis(res.data));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleUpload}>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit">Analyze</button>
    </form>
  );
};

export default UploadForm;