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
		let rows = [[0,1,2],[3,4,5],[6,7,8]];
		
		return (
			<div>
				{
					rows.map((item, index) => (
						<div key={index} className="board-row">
							{
								item.map(i => this.renderSquare(i))
							}
						</div>
					))
				}
			</div>
		);
	}
}

export default Board;