
import { QuestionDTO } from "./QuestionDTO"

export const questArr:QuestionDTO[] = [
  {
    question: "What is the capital of France?",
    level: "easy",
    answers: [
      { description: "Paris", isRight: true },
      { description: "Berlin", isRight: false },
      { description: "Madrid", isRight: false },
      { description: "Lisbon", isRight: false },
      { description: "Rome", isRight: false }
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    level: "easy",
    answers: [
      { description: "Mars", isRight: true },
      { description: "Venus", isRight: false },
      { description: "Jupiter", isRight: false },
      { description: "Saturn", isRight: false },
      { description: "Mercury", isRight: false }
    ]
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    level: "medium",
    answers: [
      { description: "William Shakespeare", isRight: true },
      { description: "Charles Dickens", isRight: false },
      { description: "Jane Austen", isRight: false },
      { description: "Mark Twain", isRight: false },
      { description: "Leo Tolstoy", isRight: false }
    ]
  },
  {
    question: "What is the square root of 144?",
    level: "easy",
    answers: [
      { description: "12", isRight: true },
      { description: "10", isRight: false },
      { description: "11", isRight: false },
      { description: "14", isRight: false },
      { description: "13", isRight: false }
    ]
  },
  {
    question: "What is the chemical symbol for gold?",
    level: "medium",
    answers: [
      { description: "Au", isRight: true },
      { description: "Ag", isRight: false },
      { description: "Pb", isRight: false },
      { description: "Fe", isRight: false },
      { description: "Gd", isRight: false }
    ]
  },
  {
    question: "In what year did World War II end?",
    level: "medium",
    answers: [
      { description: "1945", isRight: true },
      { description: "1939", isRight: false },
      { description: "1942", isRight: false },
      { description: "1950", isRight: false },
      { description: "1944", isRight: false }
    ]
  },
  {
    question: "Which of the following is NOT a programming language?",
    level: "easy",
    answers: [
      { description: "Banana", isRight: true },
      { description: "Python", isRight: false },
      { description: "Java", isRight: false },
      { description: "C++", isRight: false },
      { description: "Ruby", isRight: false }
    ]
  },
  {
    question: "What is the result of 9 + 10?",
    level: "easy",
    answers: [
      { description: "19", isRight: true },
      { description: "20", isRight: false },
      { description: "21", isRight: false },
      { description: "18", isRight: false },
      { description: "22", isRight: false }
    ]
  },
  {
    question: "Which country hosted the 2016 Summer Olympics?",
    level: "medium",
    answers: [
      { description: "Brazil", isRight: true },
      { description: "China", isRight: false },
      { description: "Russia", isRight: false },
      { description: "UK", isRight: false },
      { description: "Japan", isRight: false }
    ]
  },
  {
    question: "What is the derivative of sin(x)?",
    level: "hard",
    answers: [
      { description: "cos(x)", isRight: true },
      { description: "-sin(x)", isRight: false },
      { description: "-cos(x)", isRight: false },
      { description: "tan(x)", isRight: false },
      { description: "sec(x)", isRight: false }
    ]
  }
]