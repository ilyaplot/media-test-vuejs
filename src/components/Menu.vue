<template>
	<aside class="menu">
		<ul class="menu-list">
			<li class="menu-list__el">
				<span class="menu-list__icon">
					<img src="../assets/img/ico-01.png">
				</span>История переходов</li>
			<li class="menu-list__el">
				<span class="menu-list__icon">
					<img src="../assets/img/ico-02.png">
				</span>Статистика</li>
			<li class="menu-list__el menu-list__el_selected">
				<span class="menu-list__icon">
					<img src="../assets/img/ico-03.png">
			 </span>Каталог</li>
			<li class="menu-list__el">
				<span class="menu-list__icon">
					<img src="../assets/img/ico-04.png">
				</span>Витрины</li>
			<li class="menu-list__el">
				<span class="menu-list__icon">
					<img src="../assets/img/ico-05.png">
				</span>Справочники</li>
		</ul>
	</aside>
</template>

<script>

	export default {
	}
</script>

<style lang="sass" scoped>
@import '../sass/variables'
$bck-light: #393534
$bck-dark: #2c2c2c
.menu
	display: flex
	width: 192px
 height: calc(100vh - 56px)
 background-color: $bck-light
 &-list
 	list-style-type: none
 	padding: 0
 	&__icon
 		display: flex
 		padding: 0px 8px 0px 16px
 		width: 24px
  	height: 24px
 	&__el
 		display: flex
 		align-items: center
 		box-sizing: border-box
 		height: 48px
 		width: 192px
 		padding-left: 8px
 		color: #b0b0b0
 		font-weight: bold
 		letter-spacing: -0.3px
 		font-size: 13px
 		position: relative
	 	&_selected
	 		background-color: $bck-dark
	 		color: #fff
	 		&:after
	 			position: absolute
	 			content: ''
	 			left: 0
	 			top: 0
	 			height: 48px
		 		border-left: 4px solid $main-color 		
</style>