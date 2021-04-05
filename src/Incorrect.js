import React from 'react';
import styled from 'styled-components';

const DivIncorrect = styled.div`
	text-align: center;
	color: white;
	font-size: 20px;
	.p {
		font-size: 25px;
		color: #dd2c2f;
	}
`;
const Button = styled.button`
	margin: 0px 0px 0px 100px;
	border-style: solid;
	border-color: black;
	border-width: 1px;
	border-radius: 5px;
	height: 40px;
	color: white;
	font-size: 20px;
	background-color: #0ead69;
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

const Incorrect = (prop) => {
	const {Score, Level, setResponse, Response} = prop;

	const handleOnClick = (e) => {
		if (Response === 'incorrect') {
			setResponse('start');
		}
	};

	return (
		<div>
			<DivIncorrect>
				<h1>You lose 😭</h1>
				<p>Your total score: {Score}</p>
				<p>Total questions answered correctly: {Level}</p>
			</DivIncorrect>
			<Button
				onClick={() => {
					handleOnClick();
				}}
			>
				PLAY AGAIN
			</Button>
		</div>
	);
};

export default Incorrect;
