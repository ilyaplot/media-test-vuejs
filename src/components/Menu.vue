<template>
	<aside class="menu">
		<ul class="menu-list">
			<li class="menu-list__el">
				<span class="menu-list__icon">
					<img src="../assets/img/ico-01.png">
				</span>История переходов
			</li>
			<li class="menu-list__el">
				<span class="menu-list__icon">
					<img src="../assets/img/ico-02.png">
				</span>Статистика
			</li>
			<li class="menu-list__el menu-list__el_selected">
				<span class="menu-list__icon">
					<img src="../assets/img/ico-03.png">
			 </span>Каталог
			</li>
			<li class="menu-list__el">
				<span class="menu-list__icon">
					<img src="../assets/img/ico-04.png">
				</span>Витрины
			</li>
			<li class="menu-list__el">
				<span class="menu-list__icon">
					<img src="../assets/img/ico-05.png">
				</span>Справочники
			</li>
		</ul>
		<ul class="menu-list menu-list_settings">
			<li class="menu-list__el">
				<span class="menu-list__icon">
					<img src="../assets/img/ico-06.png">
				</span>Настройки
			</li>
			<li class="menu-list__el">
				<span class="menu-list__icon">
					<span class="user-avatar">АС</span>
				</span>А. С. Пушкин
			</li>
		</ul>
	</aside>
</template>

<script>

	export default {
	}
</script>

<style lang="sass" scoped>
@import '../sass/variables'
$menu-bck-light: #393534
$menu-bck-selected: #2c2c2c
$menu-bck-avatar: #5b5655
.user-avatar
	width: 24px
 height: 24px
 background-color: $menu-bck-avatar
 display: flex
 justify-content: center
 align-items: center
 border-radius: 100px
 font-size: 11px
.menu
	display: flex
	flex-direction: column
	justify-content: space-between
	width: 192px
 height: calc(100vh - 56px)
 background-color: $menu-bck-light
 &-list
 	list-style-type: none
 	padding: 0
 	&_settings
 		margin: 0
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
 		color: $light-color
 		font-weight: bold
 		letter-spacing: -0.3px
 		font-size: 13px
 		position: relative
 		cursor: pointer
 		&:hover
 			color: $light-color
 			background-color: lighten($menu-bck-light, 10)
	 	&_selected
	 		background-color: $menu-bck-selected
	 		color: $bck-light
	 		&:before
	 			position: absolute
	 			content: ''
	 			left: 0
	 			top: 0
	 			height: 48px
		 		border-left: 4px solid $main-color 		
</style>