import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_MESSAGES = gql`
	{
		messages {
			_id
			author
			title
			content
		}
	}
`;
export default function MessageList() {
	const { loading, error, data } = useQuery(GET_MESSAGES);
	
	if (loading) return <p>Loading Messages...</p>;
	if (error) {
		console.log(error)
		return <p>Error</p>;
	}

	return (
		<div className="container">
			<div className="row">
				{data.messages.map(({ _id, title, content, author }) => (
					<div key={_id} className="card col-md-6 col-4">
						<div className="card-body">
							<h4>{title}</h4>
							<p>{content}</p>
							<p>{author}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
