import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Info from './Info';

const QuestionDiv = styled.div`
	.time_div {
		display: flex;
		position: absolute;
		font-size: 40px;
		color: white;
		margin: 0px 0px 0px 305px;
	}

	.answer_div {
		padding-top: 20px;
		padding-bottom: 20px;
		border-style: solid;
		border-color: black;
		border-width: 0px;
		border-radius: 2px;
		text-align: center;
		background-color: rgba(1, 2, 1, 0.2);
		color: white;
		padding-bottom: 20px;
		font-size: 20px;
	}
		.button_div {
		display: flex;
		flex-direction: column;
		padding-top: 15px;
	}

	.b_c {
		border-style: solid;
		border-color: black;
		border-width: 1px;
		border-radius: 5px;
		margin: 5px;
		height: 40px;
		color: #1c1c1c;
		font-size: 16px;
		background-color: #ffffff;
		outline-color: rgba(255, 255, 255, 0.5);
		outline-offset: 0px;
		cursor: pointer;

		&:hover {
			box-shadow: 0 0 5px 0 #ffffff;
		}
		&:active {
			outline: 0;
			transform: translateY(3px);
		}
`;

const Question = (prop) => {
	const {
		question,
		answersButtons,
		handleOnClick,
		Response,
		setResponse,
		category,
		Score,
	} = prop;

	const [time, setTime] = useState(30);

	useEffect(() => {
		let timer = null;
		if (time === 30 && Response === 'wait') {
			timer = setInterval(() => {
				setTime((time) => time - 1);
			}, 1000);
		}
		if (time === 0 && Response === 'wait') {
			setResponse('incorrect');
			setTime(30);
			clearInterval(timer);
		}
	}, [time, Response, setResponse]);

	return (
		<div>
			<Info Score={Score} category={category} />
			<QuestionDiv>
				<div className='time_div'>{time}'</div>
				<div className='answer_div'>
					<div> {question}</div>
				</div>
				<div className='button_div'>
					{answersButtons.map((el, i) => (
						<button
							key={i}
							className='b_c'
							onClick={() => {
								handleOnClick(el);
							}}
						>
							{el}
						</button>
					))}
				</div>
			</QuestionDiv>
		</div>
	);
};

export default Question;
