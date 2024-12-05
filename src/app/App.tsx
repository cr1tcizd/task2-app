import { Navigate, Route, Routes } from 'react-router'
import './styles/index.css'
import ProductsPage from 'pages/products/ui/ProductsPage'
import CreateProduct from 'pages/create-product/ui/CreateProduct'
import ProductPage from 'pages/product-id/ui/ProductPage'

function App() {
	return (
		<>
			<div className='container'>
				<Routes>
					<Route path='/*' element={<Navigate to={'/products'} />} />
					<Route path='/products' element={<ProductsPage />} />
					<Route path='/products/:id' element={<ProductPage />} />
					<Route path='/create-product' element={<CreateProduct />} />
				</Routes>
			</div>
		</>
	)
}

export default App
