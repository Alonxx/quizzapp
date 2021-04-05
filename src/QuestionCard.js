import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Question from './Question';
import Correct from './Correct';
import Incorrect from './Incorrect';
import Start from './Start';

const TestDiv = styled.div`
	display: flex;
	justify-content: center;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
`;

const FirtsDiv = styled.div`
	border-style: solid;
	border-color: black;
	border-width: 0px;
	width: 300px;
	height: 300px;
	padding: 20px;
	border-radius: 7px;
`;

const MadeDiv = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
	top: 740px;
	color: white;
`;

const QuestionCard = (prop) => {
	const {
		category,
		question,
		answersButtons,
		correctAnswer,
		setLevel,
		Level,
		Response,
		setResponse,
		Score,
		setScore,
	} = prop;

	const handleOnClick = (el) => {
		if (el === correctAnswer) {
			setLevel(Level + 1);
			setScore(Score + 100);
			window.confetti();
			return setResponse('correct');
		}
		return setResponse('incorrect');
	};

	return (
		<div>
			<TestDiv>
				<FirtsDiv>
					<Title />
					{Response === 'wait' ? (
						<Question
							question={question}
							answersButtons={answersButtons}
							handleOnClick={handleOnClick}
							Response={Response}
							setResponse={setResponse}
							Score={Score}
							category={category}
						/>
					) : Response === 'correct' ? (
						<Correct Response={Response} setResponse={setResponse} />
					) : Response === 'start' ? (
						<Start
							Response={Response}
							setResponse={setResponse}
							setScore={setScore}
							setLevel={setLevel}
						/>
					) : (
						<Incorrect
							Score={Score}
							Level={Level}
							setResponse={setResponse}
							Response={Response}
						/>
					)}
				</FirtsDiv>
			</TestDiv>
			<MadeDiv>Made whit 💪 from Alonso Diaz</MadeDiv>
		</div>
	);
};

export default QuestionCard;