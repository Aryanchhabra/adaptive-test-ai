import React, { useState } from 'react';
import { Typography, Button, Grid, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  testContainer: {
    backgroundColor: '#1c1c1e',
    padding: '40px',
    borderRadius: '10px',
    textAlign: 'center',
    maxWidth: '700px',
    margin: '50px auto',
    color: '#e0e0e0',
  },
  question: {
    color: '#4db6e2',
    fontSize: '1.5rem',
    marginBottom: '30px',
  },
  optionButton: {
    backgroundColor: '#4db6e2',
    color: '#1c1c1e',
    margin: '10px',
    padding: '10px 20px',
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: '#357cae',
    },
  },
  score: {
    color: '#4db6e2',
    fontSize: '1.5rem',
    marginTop: '20px',
  },
});

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

function Test() {
  const classes = useStyles();
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
    <Box className={classes.testContainer}>
      {showScore ? (
        <Typography variant="h4" className={classes.score}>
          Your Score: {score} / {questions.length}
        </Typography>
      ) : (
        <>
          <Typography variant="h5" className={classes.question}>
            {questions[currentQuestion].question}
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {questions[currentQuestion].options.map((option, index) => (
              <Grid item key={index}>
                <Button
                  className={classes.optionButton}
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </Button>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
}

export default Test;
