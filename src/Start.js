import React from 'react';
import styled from 'styled-components';


const DivStart = styled.div`
	text-align: center;
	color: white;
	font-size: 20px;
	.p {
		font-size: 25px;
		color: #dd2c2f;
	}
`;

const Button = styled.button`
	margin: 0px 0px 0px 75px;
	border-style: solid;
	border-color: black;
	border-width: 1px;
	border-radius: 5px;
	width: 150px;
	height: 35px;
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

const Start = (prop) => {
	const {Response, setResponse, setScore, setLevel} = prop;
	const handleOnClick = (e) => {
		if (Response === 'start') {
			setLevel(0);
			setScore(0);
			setResponse('wait');
		}
	};
	return (
		<div>
			<DivStart>
				<h3>Welcome👋</h3> <p>How do you play?</p>
				<p>
					You’ll have to answer 20 questions in a row to become THE QUIZZ MASTER
				</p>
				<p>If one of your responses is incorrect you will lose everything 😭</p>
			</DivStart>
			<Button
				onClick={() => {
					handleOnClick();
				}}
			>
				PLAY
			</Button>
		</div>
	);
};

export default Start;
