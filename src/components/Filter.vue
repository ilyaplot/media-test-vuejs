<template>
	<div class="filter">
		<div class="filter-wrapper">
			<div class="filter-buttons">
				<button class="btn filter-block">
					<span class="filter-block__name">Исполнители</span>
					<span class="filter-block__arrow"></span>
				</button>
				<!-- /.btn filter-block -->
				<button class="btn filter-block">
					<span class="filter-block__name">Жанры</span>
					<span class="filter-block__arrow"></span>
				</button>
				<!-- /.btn filter-block -->
				<button class="btn filter-block">
					<span class="filter-block__name">Цены</span>
					<span class="filter-block__arrow"></span>
				</button>
				<!-- /.btn filter-block -->
				<button class="btn filter-block">
					<span class="filter-block__name">Витрины</span>
					<span class="filter-block__arrow"></span>
				</button>
				<!-- /.btn filter-block -->
				<button class="btn filter-block">
					<span class="filter-block__name">Провайдеры</span>
					<span class="filter-block__arrow"></span>
				</button>
				<!-- /.btn filter-block -->
			</div>
			<!-- /.filter-buttons -->
			<div class="filter-options">
				<button class="filter-options__history">
					<img src="../assets/img/history.svg" alt="history">
				</button>
				<!-- /.filter-options__history -->
				<button class="filter-options__menu">
					<img src="../assets/img/menu.svg" alt="menu">
				</button>
				<!-- /.filter-options__context -->
			</div>
			<!-- /.filter-options -->
		</div>
		<!-- /.filter-wrapper -->
	</div>
	<!-- /.filter -->
</template>

<script>
	// import {mapGetters} from 'vuex';

	export default {
		// computed: {
		// 	...mapGetters([
		// 		'cnt',
		// 		'total'
		// 	])
		// }
	}
</script>

<style lang="sass" scoped>
.filter
 margin: auto
	min-height: 32px
	max-width: 896px
	display: flex
	flex-direction: row
	justify-content: center
	align-items: center
	&-wrapper
		flex: 1
		display: flex
		justify-content: space-between
	&-buttons
		flex-grow: 1
	&-block
		margin-top: 16px
		margin-bottom: 16px
		&:first-child
		 margin-left: 0px
	&-options
		display: flex
		align-items: center
		&__history, &__menu
			display: flex
			align-items: center
			width: 24px
			height: 24px
			padding: 0
			border: none
   background: transparent
</style>