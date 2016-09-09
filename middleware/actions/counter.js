var increment = function() {
	return {type: 'INCREMENT'};
}

var decrement = function() {
	return {type: 'DECREMENT'};
}

var getSum = function(a, b) {
	return {type: 'SUM' ,a: 5, b: 3};
}

var asyncIncrease = function(dispatch, state){
	dispatch({type: 'LOADING'})
	_fakeServerApi.increaseCount(state.count.result, function(data){
		dispatch({type: 'INCREMENT'})
	});
}