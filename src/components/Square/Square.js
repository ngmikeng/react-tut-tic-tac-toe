import React, { Component } from 'react';

class Square extends Component {
	render() {
		let squareClassName = 'square';
		if (this.props.opts.highlight) {
			squareClassName = 'square highlight'
		}

		return (
			<button className={squareClassName} onClick={this.props.onClick}>
				{this.props.value}
			</button>
		);
	}
}

export default Square;