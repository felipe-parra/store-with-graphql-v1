import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router';

const initialState = {
	title: '',
	content: '',
	author: ''
};

const CREATE_MESSAGE = gql`
	mutation CreateMessage($title: String!, $content: String!, $author: String!) {
		createMessage(title: $title, content: $content, author: $author) {
			_id
		}
	}
`;

const MessageForm = () => {
	const [ messageForm, setMessageForm ] = useState(initialState);

	const [ createMessage ] = useMutation(CREATE_MESSAGE);

	const { title, content, author } = messageForm;

	const history = useHistory();
	const handleChange = (e) => {
		const { name, value } = e.target;
		setMessageForm((prevState) => ({
			...prevState,
			[name]: value
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		await createMessage({
			variables: { ...messageForm }
		});

		history.push('/');
	};
	return (
		<div className="container">
			<h5 className="text-center">Message Form</h5>
			<form onSubmit={handleSubmit} className="card-body">
				<div className="form-group">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						name="title"
						id="title"
						className="form-control"
						value={title}
						onChange={handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="content">Content</label>
					<textarea
						className="form-control"
						name="content"
						id="content"
						rows="5"
						value={content}
						onChange={handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="author">Author</label>
					<input
						className="form-control"
						type="text"
						name="author"
						id="author"
						value={author}
						onChange={handleChange}
					/>
				</div>
				<button type="submit" className="btn btn-primary btn-block">
					Save
				</button>
			</form>
		</div>
	);
};

export default MessageForm;
