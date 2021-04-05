import React from 'react';
import styled from 'styled-components';

const DivTitle = styled.div`
	.title {
		margin-top: 15px;
		margin-bottom: 40px;
		text-align: center;
		color: #ffffff;
		font-size: 50px;
	}
	.div_img {
		text-align: center;
	}
	.user_img {
		width: 100px;
		height: 100px;
		text-align: center;
		border-style: solid;
		border-color: #7ae582;
		border-width: 2px;
		border-radius: 50px;
	}
	.user_name {
		font-size: 18px;
		color: #ffffff;
		text-align: center;
		margin-bottom: 60px;
	}
`;

const Title = () => {
	return (
		<DivTitle>
			<div className='title'>The Quizz app</div>
			<div className='div_img'>
				<img
					className='user_img'
					src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
					alt='perfil'
				></img>
			</div>
			<div className='user_name'>Visitant</div>
		</DivTitle>
	);
};

export default Title;
