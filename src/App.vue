<template>
	<div class="app">
		<app-header></app-header>
		<div class="content">
			<app-menu></app-menu>
			<section class="main">
				<app-filter></app-filter>
				<app-content></app-content>
			</section>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import lodash from 'lodash';    
// Object.defineProperty(Vue.prototype, '$lodash', { value: lodash });

	import AppHeader from './components/Header';
	import AppMenu from './components/Menu';
	import AppFilter from './components/Filter';
	import AppContent from './components/Content';
	import AppPublication from './components/Publication';
	import AppSelection from './components/Selection';

	export default {
		components: {
			AppHeader,
			AppMenu,
			AppFilter,
			AppContent,
			AppPublication,
			AppSelection
		},
		data() {
			return {
				contents: [], //хотя отладчик vue его показывает, консоль утверждает что он пуст, lodash не сортирует его в итоге
				pulications: [],
				artists: [],
				providers: [],
				//просто тестовый массив объектов для проверки groupBy
				cars: [{name:"Ford",speed:"120"},{name:"Kia",speed:"120"},{name:"Toyota",speed:"150"}],
				errors: []
			}
		},
		created() {
			axios.get('http://localhost:3000/contents')
			.then(repsonse => {
				this.contents = repsonse.data //отладчик vue его видит, всё как надо, но в консоли он является пустым массивом :'-(
			})
			.catch(e => {
				this.errors.push(e)
			});
			console.log("====================================");
			//вывод на экран тестового массива машин (до группировки)
			console.log("this.cars = ",this.cars);
			//делаю группировку массива машин по скорости, всё ок
			var result = lodash.groupBy(this.cars, function(car){
				return car.speed;
			});
			//вывод массива машин на экран, всё сортируется как надо
			console.log("sorted cars = ",result);
			console.log("====================================");
			//вывод нашего массива contents, полученного axios (почему он пустой???)
			console.log("this.contents = ",this.contents);
			//делаю группировку в точности по образу и подобию как с cars
			var result1 = lodash.groupBy(this.contents, function(content){
				return content.artist;
			});
			//и естественно результат тоже пустой массив
			console.log("sorted content = ",result1);
			console.log("====================================");
			//Что я делаю не так?
		}
	}
</script>

<style lang="sass">
	@import './sass/variables'
	@import './sass/fonts'
	@import './sass/mixins'
	@import './sass/reset'
	.btn
	 height: 32px
	 border-radius: 4px
	 white-space: nowrap
	 padding: 6px 12px 7px 12px
	 margin: 0 0 0 8px
		font-family: Lato
		@include btn-color($text-color, $bck-light)
		border: solid 1px $border-color
	.hello
		background-color: red
	.content
		display: flex
		flex-direction: row
	.main
		flex: 1
</style>