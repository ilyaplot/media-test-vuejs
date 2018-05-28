<template>
	<div class="app">
		<app-header></app-header>
		<div class="content">
			<app-menu></app-menu>
			<section class="main">
				<app-filter></app-filter>
				<app-content></app-content>


                <div v-for="(artist, artist_id) in artists" v-bind:key="artist_id">
                    {{ artist.name }}
                    <pre>{{artist.content}}</pre>
                </div>
			</section>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import lodash from 'lodash';
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
				errors: []
			}
		},
		created() {
			axios.get('/test.json')
			.then(response => {
                this.artists = lodash.map(lodash.groupBy(response.data, 'artist.artist_id'), function (items) {
                    return {
                        artist_id: items[0].artist.artist_id,
                        name: items[0].artist.name,
                        content: items
                    }
                })
			})
			.catch(e => {
			    console.log(e)
				this.errors.push(e)
			});

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