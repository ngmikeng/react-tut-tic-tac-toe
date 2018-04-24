const initialState = [
	{
		stepNumber: 0,
		xIsNext: true
	}
];

export default function game(state = initialState, action) {
	switch (action.type) {
		case 'CLICK_ON_SQUARE':
			return [
				...state,
				{
					stepNumber: action.stepNumber,
					xIsNext: action.xIsNext
				}
			]
	}
}