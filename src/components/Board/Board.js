import React, { Component } from 'react';
import Square from '../Square/Square'

class Board extends Component {
	renderSquare(index) {
		let lineWin = this.props.lineWin;
		let squareOpts = {};
		if (lineWin && lineWin.length > 0) {
			for (let i = 0; i < lineWin.length; i++) {
				if (lineWin[i] === index) {
					squareOpts.highlight = true;
				}
			}
		}

		return (
			<Square
				value={this.props.squares[index]}
				opts={squareOpts}
				onClick={() => this.props.onClick(index)}
			/>
		);
	}

	render() {
		return (
			<div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

export default Board;