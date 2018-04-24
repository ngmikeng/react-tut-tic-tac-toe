import React, { Component } from 'react';
import Board from '../Board/Board';

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			history: [
				{
					squares: Array(9).fill(null)
				}
			],
			stepNumber: 0,
			xIsNext: true,
			sortMovesAscending: true
		};
	}

	handleClick(i) {
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[history.length - 1];
		const squares = current.squares.slice();
		const winnerInfo = this.calculateWinner(squares);
		const winner = winnerInfo.winner;
		if (winner || squares[i]) {
			return;
		}
		squares[i] = this.state.xIsNext ? "X" : "O";
		this.setState({
			history: history.concat([
				{
					squares: squares
				}
			]),
			stepNumber: history.length,
			xIsNext: !this.state.xIsNext
		});
	}

	calculateWinner(squares) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];
		const result = {
			winner: null,
			lineWin: []
		};
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				result.winner = squares[a];
				result.lineWin = lines[i];
				break;
			}
		}
		return result;
	}

	jumpTo(step) {
		this.setState({
			stepNumber: step,
			xIsNext: (step % 2) === 0
		});
	}

	toggleSortMoves() {
		this.setState({
			sortMovesAscending: !this.state.sortMovesAscending
		});
	}

	restart() {
		this.setState({
			history: [
				{
					squares: Array(9).fill(null)
				}
			],
			stepNumber: 0,
			xIsNext: true,
			sortMovesAscending: true
		});
	}

	render() {
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const winnerInfo = this.calculateWinner(current.squares);
		const winner = winnerInfo.winner;
		const lineWin = winnerInfo.lineWin;

		let steps = history.map((step, index) => {
			return index;
		});
		if (this.state.sortMovesAscending) {
			steps.sort((a, b) => a - b);
		} else {
			steps.sort((a, b) => b - a);
		}
		let moves = steps.map((move) => {
			const desc = move ?
				'Go to move #' + move :
				'Go to game start';
			const activeStep = this.state.stepNumber === move ? 'active-step' : '';

			return (
				<li key={move}>
					<button onClick={() => this.jumpTo(move)} className={activeStep}>{desc}</button>
				</li>
			);
		});

		let status;
		if (winner) {
			status = "Winner: " + winner;
		} else {
			status = "Next player: " + (this.state.xIsNext ? "X" : "O");
		}

		let isShowRestart = this.state.stepNumber > 0;

		return (
			<div className="game">
				<div className="game-board">
					<Board
						lineWin={lineWin}
						squares={current.squares}
						onClick={i => this.handleClick(i)}
					/>
				</div>
				<div className="game-info">
					<div>{status}</div>
					<ol>{moves}</ol>
				</div>
				<div>
					<button onClick={() => this.toggleSortMoves()}>Toggle Sort Moves</button>
				</div>
				<div>
					{isShowRestart ? <button onClick={() => this.restart()}>Restart</button> : ''}
				</div>
			</div>
		);
	}
}

export default Game;