var _fakeServerApi = {

	increaseCount : (currentCount, cb) => {
		setTimeout( () => { cb(currentCount + 1) }, 2000) }
}

// var _fakeServerApi = {

// 	increaseCount : function (currentCount, cb){
// 		setTimeout(function(){
// 			cb(currentCount + 1);
// 		}, 2000)
// 	}

// }