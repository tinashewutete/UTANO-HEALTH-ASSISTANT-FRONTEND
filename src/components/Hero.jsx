import React, { useState } from 'react';
import axios from 'axios';
import './Hero.css';
import { FaPaperPlane } from 'react-icons/fa';
import stetho from '../assets/stetho.png';
import heart from '../assets/heart.png';
import brain from '../assets/brain.png';

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');
  setAnswer('');

  try {
    const response = await axios.post('https://utano-health-assistant-backend.onrender.com/api/answer', {
      question: question,
    });
    setAnswer(response.data.answer);
  } catch (err) {
    console.error(err);
    setError('Error getting answer. Please try again.');
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="app-container">
      <div className='hero-text'>
        <h1>Welcome to <span>Utano</span></h1>
        <p>Providing compassionate AI powered health guidance</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          rows="1"
          placeholder="Ask Utano your question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? (
            'Generating answer...'
          ) : (
            <>
              <FaPaperPlane style={{ marginRight: '8px' }} />
              Submit
            </>
          )}
        </button>
      </form>

      {error && (
        <p className="error-message">{error}</p>
      )}

      {answer && (
        <div className="answer-container">
          <h2>Answer:</h2>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default App;

