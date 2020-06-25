import * as React from 'react';

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {books: []};
	}

	async componentDidMount() {
		try {
			let r = await fetch('/api/books');
			let books = await r.json();
			this.setState({ books });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<main className="container my-5">
				<h1 className="text-primary text-center">My Books</h1>\
				<ul classname="list-group">
					{this.state.books.map(book => {
						return <li className="list-group-item">{book.title}</li>
					})}
				</ul>
			</main>
		);
	}
}

export interface IAppProps {}

export interface IAppState {
	books: Array<{title: string, author: string}>;
}

export default App;
