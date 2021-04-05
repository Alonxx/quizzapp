import React, {useState, useEffect} from 'react';
import axios from 'axios';
import QuestionCard from './QuestionCard';
import './App.css';
import Loading from './Loading';
import styled from 'styled-components';



const url =
	'https://opentdb.com/api.php?amount=20&difficulty=easy&type=multiple';

const App = () => {
	const [Level, setLevel] = useState(0);
	const [Response, setResponse] = useState('start');
	const [Score, setScore] = useState(0);
	const [Answers, setAnswers] = useState([]);

	const GetAnswers = async () => {
		const res = await axios.get(url);
		setAnswers(Answers.concat(res.data.results));
	};

	useEffect(() => {
		GetAnswers();
	}, []);

	let totalAnswers;
	if (Answers.length) {
		totalAnswers = Answers[Level].incorrect_answers
			.concat(Answers[Level].correct_answer)
			.sort(() => Math.random() - 0.5);
	}
	const fixchars = (str) => {
		if (typeof str == 'string') {
			str = str.replace(/&gt;/gi, '>');
			str = str.replace(/&lt;/gi, '<');
			str = str.replace(/&#039;/g, "'");
			str = str.replace(/&quot;/gi, '"');
			str = str.replace(/&amp;/gi, '&');
		}
		return str;
	};

	return (
		<div>
			{Answers.length ? (
				<QuestionCard
					category={Answers[Level].category.toUpperCase()}
					question={fixchars(Answers[Level].question)}
					correctAnswer={Answers[Level].correct_answer}
					Level={Level}
					answersButtons={totalAnswers}
					setLevel={setLevel}
					Response={Response}
					setResponse={setResponse}
					Score={Score}
					setScore={setScore}
				/>
			) : (
				<Loading />
			)}
		</div>
	);
};

export default App;
