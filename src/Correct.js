import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const DivCorrect = styled.div`
	text-align: center;
	color: white;
	font-size: 20px;
	.p {
		font-size: 25px;
		color: #7ae582;
	}
`;

const Correct = (prop) => {
	const {Response, setResponse} = prop;
	const [time, setTime] = useState(5);

	useEffect(() => {
		let timer1 = null;
		if (time === 5 && Response === 'correct') {
			timer1 = setInterval(() => {
				setTime((time) => time - 1);
			}, 1000);
		}
		if (time === 0 && Response === 'correct') {
			clearInterval(timer1);
			setResponse('wait');
		}
	}, [time, Response, setResponse]);

	useEffect(() => {
		window.confetti();
	}, []);

	return (
		<div>
			<DivCorrect>
				Your answer is <div className='p'>CORRECT!</div> Be ready your next
				question comes in
				<h1>{time}'s</h1>
			</DivCorrect>
		</div>
	);
};

export default Correct;
