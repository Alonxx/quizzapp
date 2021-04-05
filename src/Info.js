import React from 'react';
import styled from 'styled-components';

const Styledhr = styled.hr`
	border: 1px dashed white;
`;
const DivInfo = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	color: #ffffff;
	font-size: 14px;
	word-spacing: 3px;
`;

const Info = (prop) => {
	const {Score, category} = prop;

	return (
		<div>
			<DivInfo>
				<div>SCORE: {Score}</div>
				<div>CATEGORY: {category}</div>
			</DivInfo>
			<Styledhr></Styledhr>
		</div>
	);
};

export default Info;
