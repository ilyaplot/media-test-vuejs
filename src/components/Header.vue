<template>
	<header class="header">
		<div class="header-logo">
			<img class="header-logo__img" src="../assets/img/logo.png" alt="MTS logo">
			<span class="header-logo__desc">RBT</span>
		</div>
		<div class="header-wrapper">
			<div class="header-search">
				<div class="header-search__group">
			  <input type="text" class="header-search__input" placeholder="Поиск мелодий и исполнителей" aria-label="Поиск мелодий и исполнителей" aria-describedby="basic-addon2">
		    <button class="btn header-search__btn-find" type="button">Найти</button>
				</div>
				<div class="header-actions">
					<button class="btn header-actions__btn-add">Добавить</button>
					<button class="btn header-actions__btn-excel">Выгрузить excel</button>
				</div>
			</div>
		</div>
	</header>
</template>

<script>

	export default {
	}
</script>

<style lang="sass" scoped>
	@import '../sass/mixins'
	@import '../sass/variables'
	.header
		height: 56px
		display: flex
		flex-direction: row
		align-items: center
		justify-content: flex-start
		&-logo
			width: 192px
			min-width: 192px
			height: 56px
			display: flex
			flex-direction: row
			justify-content: space-between
			align-items: center
			background-color: $main-color
			color: $bck-light
			&__img
				margin-left: 5px
			&__desc
				margin-right: 16px
		&-wrapper
			flex: 1
			box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3)
		&-search
			margin: auto
			display: flex
			justify-content: center
	  align-items: center
			height: 56px
			max-width: 896px
			&__group
				display: flex
				flex-grow: 1
				max-width: 618px
				min-width: 328px
		  height: 32px
		  margin-left: 8px
		  position: relative
				flex-wrap: nowrap
			&__input
				box-sizing: border-box
				flex-grow: 1
				// min-width: 509px
				margin-right: 4px
				height: 32px
				padding: 0 12px
				border-radius: 4px
				border: solid 1px #979797
				border-right: none
				border-top-right-radius: 0
		  border-bottom-right-radius: 0
		  color: $light-color
			&__btn
				&-find
					width: 109px
				 height: 32px
				 position: absolute
				 right: 0px
				 border: 0
				 border-radius: 4px
					border-top-left-radius: 0
		   border-bottom-left-radius: 0
		   @include btn-color($bck-light, $main-color)
		   border: 1px solid $main-color
		&-actions
			display: flex
			flex-wrap: nowrap
			margin-left: 24px
			&__btn
				&-add
					@include btn-color($main-color, $bck-light)
				&-excel
					@include btn-color(#1f7144, $bck-light)
					margin-right: 8px
</style>