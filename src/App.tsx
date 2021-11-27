import { colors, images, sizes, Style } from '@assets'
import { HeaderSearch } from '@component'
import React, { useRef } from 'react'
import {
	FlatList,
	Image,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
} from 'react-native'
const data = [
	{
		id: 0,
		name: 'apple',
		image: images.iphone,
	},
	{
		id: 1,
		name: 'samsung',
		image: images.iphone,
	},
	{
		id: 2,
		name: 'xioami',
		image: images.iphone,
	},
	{
		id: 3,
		name: 'sony',
		image: images.iphone,
	},
	{
		id: 4,
		name: 'lenovo',
		image: images.iphone,
	},
]
const dataItem = [
	{
		id: 0,
		name: 'iphone 12',
		price: 300,
	},
	{
		id: 1,
		name: 'iphone 12',
		price: 300,
	},
	{
		id: 2,
		name: 'iphone 12',
		price: 300,
	},
	{
		id: 3,
		name: 'iphone 12',
		price: 300,
	},
]
const App = () => {
	const searchRef = useRef<any>()
	const itemCategory = ({ item, index }: any) => {
		return (
			<TouchableOpacity key={index} style={styles.itemCateg}>
				<Image source={item.image} style={Style.icon48} />
				<Text style={styles.nameCate}>{item.name}</Text>
			</TouchableOpacity>
		)
	}
	const itemCProduct = ({ item, index }: any) => {
		return (
			<TouchableOpacity key={index} style={Style.box_shadow}>
				<Image source={item.image} style={Style.icon120} />
				<Text style={styles.nameProd}>{item.name}</Text>
			</TouchableOpacity>
		)
	}
	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<HeaderSearch />
				<FlatList
					data={data}
					contentContainerStyle={{
						flexGrow: 1,
					}}
					style={styles.listCategory}
					horizontal
					showsHorizontalScrollIndicator={false}
					keyExtractor={(item, index) => String(index)}
					renderItem={itemCategory}
				/>
				<FlatList
					data={data}
					horizontal
					showsVerticalScrollIndicator={false}
					keyExtractor={(item, index) => String(index)}
					renderItem={itemCProduct}
				/>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

export default App

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.border,
	},
	listCategory: {
		marginTop: sizes.s20,
		paddingHorizontal: sizes.s16,
	},
	itemCateg: {
		marginHorizontal: sizes.s18,
	},
	nameCate: {
		fontSize: sizes.s14,
		color: colors.black,
		fontWeight: 'bold',
		marginTop: sizes.s2,
	},

	itemProd: {
		marginHorizontal: sizes.s12,
	},
	nameProd: {
		fontSize: sizes.s14,
		color: colors.black,
		fontWeight: 'bold',
		marginTop: sizes.s8,
	},
})
