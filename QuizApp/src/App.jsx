import { useState } from 'react';
import { data } from './assets/data';
function App() {
  const [ans, setAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (ans === data[0].Ans) {
      setIsCorrect("Your Answer is Correct");
    } else {
      setIsCorrect("Your Answer is Incorrect");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white rounded shadow">
        <h2 className="text-black text-center mb-4">{data[0].Question}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label>
            <input
              type="radio"
              name="answer"
              value={data[0].opt1}
              onChange={(e) => setAnswer(e.target.value)}
            />
            {data[0].opt1}
          </label>
          <label>
            <input
              type="radio"
              name="answer"
              value={data[0].opt2}
              onChange={(e) => setAnswer(e.target.value)}
            />
            {data[0].opt2}
          </label>
          <label>
            <input
              type="radio"
              name="answer"
              value={data[0].opt3}
              onChange={(e) => setAnswer(e.target.value)}
            />
            {data[0].opt3}
          </label>
          <label>
            <input
              type="radio"
              name="answer"
              value={data[0].opt4}
              onChange={(e) => setAnswer(e.target.value)}
            />
            {data[0].opt4}
          </label>
          <button
            type="submit"
            className="border-2 border-black bg-cyan-100 py-2 px-4 rounded hover:bg-cyan-200"
          >
            Submit
          </button>
        </form>
        {isCorrect && <h2 className="text-center mt-4">{isCorrect}</h2>}
      </div>
    </div>
  );
}

export default App;
