import expect from 'expect';
import React from 'react';
import { render } from 'react-dom';
import TodosBoard from './TodosBoard.js';
import TestUtils from 'react-addons-test-utils';

describe('when <TodosBoard/> is rendered', () => {
	let node;
	beforeEach(	() => {
		node = document.createElement('div');
	});
	it('renders loading message', () => {
		class App extends React.Component {
			render() {
				const todos = [
					{content: 'do testing'},
					{content: 'learn karma'}
				];

				return <TodosBoard todos={todos} isLoading={true} />;
			}
		}

		render(<App />, node, () => {
			expect(node.innerHTML).toContain('Loading data...');
			expect(node.innerHTML).toNotContain('do testing');
		})
	});

	it('renders error message', () => {
		class App extends React.Component {
			render() {
				const todos = [
					{content: 'do testing'},
					{content: 'learn karma'}
				];

				return <TodosBoard todos={todos} error={'IAmTheError'} />;
			}
		}

		render(<App />, node, () => {
			expect(node.innerHTML).toMatch(/IAmTheError/);
			expect(node.innerHTML).toContain('learn karma');
		})
	});
});