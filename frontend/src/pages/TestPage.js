import React, { useState } from 'react';
import { Typography, Button, Box } from '@mui/material';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
    answer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Mars',
  },
  {
    question: 'What is the largest ocean on Earth?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    answer: 'Pacific Ocean',
  },
];

function TestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', py: 4 }}>
      {showScore ? (
        <Typography variant="h4">
          Your Score: {score} / {questions.length}
        </Typography>
      ) : (
        <>
          <Typography variant="h5" gutterBottom>
            {questions[currentQuestion].question}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}>
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant="outlined"
                onClick={() => handleAnswer(option)}
                sx={{ justifyContent: 'flex-start', py: 1 }}
              >
                {option}
              </Button>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
}

export default TestPage;