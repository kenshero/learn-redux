var store = Redux.createStore(combineReducers, Redux.applyMiddleware(logger, crashReporter, thunk))

valueEl = document.getElementById('value');
sumEl = document.getElementById('sumtxt');
loadingStatus = document.getElementById('status');
loadingIMG = document.getElementById('StatusImg');
imagesList = document.getElementById('imagesList');

function render() {
  var state = store.getState();
  valueEl.innerHTML = state.count.result;
  sumEl.innerHTML = state.sum;
  loadingIMG.innerHTML = state.images.loading;

  if(state.images.loading == "loading..."){
    imagesList.innerHTML = "";
  }else if(state.images.loading == "loaded"){
    for(var i = 0 ; i < state.images.payload.length; i++ ){
      imagesList.innerHTML += "<img src=\"" + state.images.payload[i].link + "\">";
      console.log(state.images.payload[i].link);
    }
  }

  if(state.count.loading){
  	loadingStatus.innerHTML = "is loading...";
  } else {
  	loadingStatus.innerHTML = "loaded";
  }


}

store.subscribe(render)

$('#increment').click(function () {
  store.dispatch(increment())
});

$('#decrement').click(function () {
  store.dispatch(decrement())
});

$('#incrementAsync').click(function () {
  store.dispatch(asyncIncrease)
});

$('#sum').click(function () {
  console.log("sum");
  store.dispatch(getSum(5, 3))
});

$('#genIMG').click(function () {
  console.log("genIMG");
  store.dispatch(getImg)
});
