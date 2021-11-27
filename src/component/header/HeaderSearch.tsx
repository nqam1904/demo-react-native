import { colors, images, sizes, Style } from '@assets'
import React, { useRef, useState } from 'react'
import { Image, StatusBar, StyleSheet, TextInput, View } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
const HeaderSearch: React.FC = () => {
	const [txtSearch, setTxtSearch] = useState<string>('')
	const searchRef = useRef<any>()
	const onChange = (text: string) => {
		setTxtSearch(text)
	}

	const searchView = () => (
		<View style={styles.row}>
			<Image source={images.search} style={Style.icon32} />
			<TextInput
				style={styles.input}
				placeholder="Search"
				placeholderTextColor={colors.gray}
				returnKeyType="search"
			/>
		</View>
	)
	return (
		<View style={styles.container}>
			<StatusBar
				barStyle={'dark-content'}
				backgroundColor={'transparent'}
				hidden={false}
				translucent={true}
			/>
			<View style={Style.row_between}>
				<View style={styles.header}>{searchView()}</View>
				<Image source={images.filter} style={styles.filter} />
			</View>
		</View>
	)
}

export default HeaderSearch

const styles = StyleSheet.create({
	container: {
		height: sizes.s56,
		marginTop: getStatusBarHeight(true),
		// ...Style.row_center,
	},
	header: {
		height: sizes.s56,
		...Style.row_between,
		backgroundColor: colors.gray2,
		borderRadius: sizes.s16,
		paddingHorizontal: sizes.s16,
		marginHorizontal: sizes.s16,
	},
	row: {
		...Style.row,
	},
	input: {
		paddingVertical: sizes.s8,
		paddingHorizontal: sizes.s20,
		borderRadius: sizes.s16,
		width: '70%',
		textAlignVertical: 'center',
		// marginRight: sizes.s20,
	},
	filter: {
		...Style.icon32,
		marginRight: sizes.s20,
	},
})
