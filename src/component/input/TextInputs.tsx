import React, { useEffect, useRef, useState } from 'react'
import { Animated, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const BASE_SIZE = 16
const VIEW_HEIGHT = BASE_SIZE * 3.5

const TextInputAnimated: React.FC = (props: any) => {
	const textInput: any = useRef()
	const animationValue = new Animated.Value(0)
	const [isFocused, setIsFocused] = useState<boolean>(false)
	const [labelHeight, setLabelHeight] = useState<number>(0)
	const [values, setValues] = useState<string>(props.value || '')
	const prevValues = usePrevious(values)
	const prevIsFocused = usePrevious(isFocused)

	useEffect(() => {
		if (isFocused !== prevIsFocused || values !== prevValues) {
			Animated.timing(animationValue, {
				toValue: isFocused || values !== '' ? 1 : 0,
				duration: 200,
				useNativeDriver: false,
			}).start()
		}
	}, [isFocused])

	const handleFocus = () => {
		setIsFocused(true)
		props.onFocus()
	}
	const handleBlur = () => {
		setIsFocused(false)
		props.onBlur()
	}
	const onChangeText = (test: string) => {
		setValues(test)
	}
	const onClear = () => {
		setValues('')
	}
	const textInputs = () => (
		<TextInput
			{...props}
			ref={textInput}
			autoCorrect={false}
			autoCompleteType="off"
			style={styles.textInput}
			value={values}
			onChangeText={onChangeText}
			onFocus={handleFocus}
			onBlur={handleBlur}
			blurOnSubmit
		/>
	)

	return (
		<TouchableOpacity
			style={[styles.container, isFocused && styles.focusStyle, props.style]}
			onPress={() => {
				textInput.current.focus(), props.onPress()
			}}>
			<Animated.Text
				onLayout={(event) => {
					labelHeight === 0 && setLabelHeight(event.nativeEvent.layout.height)
				}}
				style={[
					styles.labelStyle,
					{
						color: isFocused ? '#9933CC' : '#BFBFBF',
						top: animationValue.interpolate({
							inputRange: [0, 1],
							outputRange: [(VIEW_HEIGHT - labelHeight - 2) / 2, BASE_SIZE / 3],
						}),
						fontSize: animationValue.interpolate({
							inputRange: [0, 1],
							outputRange: [BASE_SIZE, BASE_SIZE * 0.75],
						}),
					},
				]}>
				{props.lable}
			</Animated.Text>
			{textInputs()}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		borderColor: '#EEEEEE',
		borderRadius: BASE_SIZE / 2,
		borderWidth: 1,
		marginHorizontal: BASE_SIZE,
		paddingHorizontal: BASE_SIZE,
		paddingVertical: BASE_SIZE,
		height: BASE_SIZE * 3.5,
		justifyContent: 'center',
		backgroundColor: '#FFFFFF',
	},
	labelStyle: {
		padding: 0,
		textAlignVertical: 'top',
		position: 'absolute',
		left: BASE_SIZE,
	},
	textInput: {
		width: '90%',
		position: 'absolute',
		left: BASE_SIZE,
		bottom: 0,
		paddingBottom: BASE_SIZE / 2 - 5,
		padding: 0,
		borderWidth: 0,
		color: '#000000',
	},
	focusStyle: {
		borderColor: '#9933CC',
		elevation: 2,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		backgroundColor: '#FFFFFF',
	},
	icon: {
		position: 'absolute',
		right: 10,
	},
	iconClear: {
		width: 32,
		height: 32,
	},
})
TextInputAnimated.defaultProps = {
	onPress: () => {},
	onFocus: () => {},
	onBlur: () => {},
	onChangeText: () => {},
}
function usePrevious(value: any) {
	const ref = useRef()
	useEffect(() => {
		ref.current = value
	}, [value])
	return ref.current
}
export default React.memo(TextInputAnimated)
