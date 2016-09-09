var increment = () =>  {
	return {type: 'INCREMENT'};
}

var decrement = () => {
	return {type: 'DECREMENT'};
}

var getSum = (a, b) => {
	return {type: 'SUM' ,a: 5, b: 3};
}

var asyncIncrease = (dispatch, state) => {
	dispatch({type: 'LOADING'})
	_fakeServerApi.increaseCount(state.count.result,  (data) => {
		dispatch({type: 'INCREMENT'})
	});
}

var getImg = (dispatch, state) => {
	dispatch({type: 'IMG_LOADING'})
	var imgUrl = "https://api.imgur.com/3/gallery/random/random/1";
	$.getJSON(imgUrl).done( (data) => {
		dispatch({type:'IMAGES', payload: data.data})
	});
}