$(document).ready(function(){
	new Vue({
		el: '#app',
		data: {
			today: '',
			sell: [],
			activeName: 'first',

			buy: [],
		},
		mounted: function(){
			const self = this
			let today = new Date();
			let year = today.getFullYear()
			let month = today.getMonth()+1
			if (month<10) {
				month = '0'+month
			}
			let day = today.getDate()
			if (day<10) {
				day = '0'+day
			}
			let filename = ''+year+month+day
			self.today = filename
			$.ajax({
				url: './data/'+filename+'.json',
				type: 'get',
				data: {},
				success: function(data){
					// console.log(data);
					for (var i = 0; i < data.length; i++) {
						let difference = data[i].trade-data[i].open
						if (difference<0) {//绿十字星
							let rate = Math.abs(difference)/(data[i].high-data[i].low)
							if (rate < 0.1) {
								if (data[i].code[0] !== '3') {
									var item = {
										code: data[i].code,
										name: data[i].name,
										changepercent: data[i].changepercent+'%'
									}
									self.sell.push(item)
								}
							}
						}
						else if(difference>0){//红十字星
							let rate = Math.abs(difference)/(data[i].high-data[i].low)
							if (rate < 0.1) {
								if (data[i].code[0] !== '3') {
									var item = {
										code: data[i].code,
										name: data[i].name,
										changepercent: data[i].changepercent+'%'
									}
									self.buy.push(item)
								}
							}
						}
					}
				},
				error: function(jqXHR, textStatus, errorThrown){
					console.log(textStatus, errorThrown);
					alert('暂未上传数据，请联系管理员上传数据');
				}
			});
		},
		methods: {
			handleClick () {
				console.log('handleClick');
			}
		}
	});
})