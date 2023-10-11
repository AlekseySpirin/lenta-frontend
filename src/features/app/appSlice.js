import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
	name: 'app',
	initialState: {
		selectedProducts: [],
		productOptions: [],
		combinedData: [],
		isModalVisible: false,
		productName: "",
		checkedBoxes: [],
		chartData: [],
		selectedProduct: null
	},
	reducers: {
		setSelectedProducts: (state, action) => {
			state.selectedProducts = action.payload;
		},
		setProductOptions: (state, action) => {
			state.productOptions = action.payload;
		},
		setCombinedData: (state, action) => {
			state.combinedData = action.payload;
		},
		toggleModalVisibility: (state) => {
			state.isModalVisible = !state.isModalVisible;
		},
		setProductName: (state, action) => {
			state.productName = action.payload;
		},
		setCheckedBoxes: (state, action) => {
			state.checkedBoxes = action.payload;
		},
		setChartData: (state, action) => {
			state.chartData = action.payload;
		},
		setSelectedProduct: (state, action) => {
			state.selectedProduct = action.payload;
		},
	},
})

export const { setSelectedProducts, setProductOptions, setCombinedData, toggleModalVisibility, setProductName, setCheckedBoxes, setChartData, setSelectedProduct } = appSlice.actions

export default appSlice.reducer
