import axios from 'axios'
import $ from 'jquery'



var baseUrl = 'http://localhost:88/';
// var filterUrl = function (url){
// 	if(url.startsWith('http')){
// 		return url;
// 	}
// 	return baseUrl + url;
// }
export default {
	get: (opts) => new Promise((resolve, reject) => {
		$(".spinnerParent").show()
		axios.get(baseUrl+opts.url, opts.params).then(function(response){
			$(".spinnerParent").hide()
			resolve(response);
		}).catch(function(error){
			$(".spinnerParent").hide()		
			reject(error);
		})
	}),
	post: (opts) => new Promise((resolve, reject) => {
		$(".spinnerParent").show()
		axios.post(baseUrl+opts.url, opts.params).then(function(response){
			$(".spinnerParent").hide()
			resolve(response);
		}).catch(function(error){
			$(".spinnerParent").hide()		
			reject(error);
		})
	})
}