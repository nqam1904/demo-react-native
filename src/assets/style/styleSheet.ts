import { StyleSheet } from 'react-native'
import { colors, sizes } from '@assets'

export const Style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
	},
	containerGray: {
		flex: 1,
		backgroundColor: colors.white,
	},
	scrollStyle: {
		flexGrow: 1,
		paddingHorizontal: sizes.s16,
	},
	padding: {
		padding: sizes.s16,
	},
	paddingHorizontal: {
		paddingHorizontal: sizes.s16,
	},
	paddingVertical: {
		paddingVertical: sizes.s16,
	},

	borderBottom: {
		borderBottomWidth: 1,
		borderBottomColor: colors.border,
		paddingBottom: sizes.s16,
		marginBottom: sizes.s16,
	},
	column_center: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	row_center: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	row_between: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	row_around: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	row_evenly: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	row_wrap: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		overflow: 'hidden',
	},
	box_shadow: {
		borderRadius: sizes.s16,
		marginHorizontal: sizes.s16,
		padding: sizes.s16,
		marginTop: sizes.s16,
		shadowColor: colors.gray,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 2,
		backgroundColor: colors.white,
	},

	icon16: { width: sizes.s16, height: sizes.s16 },
	icon20: { width: sizes.s20, height: sizes.s20 },
	icon24: { width: sizes.s24, height: sizes.s24 },
	icon32: { width: sizes.s32, height: sizes.s32 },
	icon40: { width: sizes.s40, height: sizes.s40 },
	icon48: { width: sizes.s48, height: sizes.s48 },
	icon56: { width: sizes.s56, height: sizes.s56 },
	icon64: { width: sizes.s64, height: sizes.s64 },
	icon80: { width: sizes.s80, height: sizes.s80 },
	icon88: { width: sizes.s88, height: sizes.s88 },
	icon96: { width: sizes.s96, height: sizes.s96 },
	icon120: { width: sizes.s120, height: sizes.s120 },
	icon160: { width: sizes.s160, height: sizes.s160 },
})
