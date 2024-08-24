import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
	return (
		<div className='col-12 col-sm-12 col-md-6 col-lg-4 mb-5'>
			<div
				className='card p-2 h-100'
				style={{ border: '1px solid #A8DADC', borderRadius: '25px' }}
			>
				<div className='card-body'>
					<Link to={`/product/${product._id}`}>
						<img
							src={`${product && product.images[0] && process.env.REACT_APP_API_URL + product.images[0].path}`}
							alt='product'
							className='w-100 mb-4'
							style={{ borderRadius: '25px' }}
						/>
					</Link>

					<h5 className='font-widget-bold'>
						<Link to={`/product/${product._id}`} className='text-dark'>
							{product.name}
						</Link>
					</h5>

					<div className='ratings mt-auto text-nowrap mb-1'>
						<div className='rating-outer'>
							<div
								className='rating-inner'
								style={{ width: `${(product.ratings / 5) * 100}%` }}
							></div>
						</div>
						<small id='no_of_reviews'>&nbsp;({product.numOfReviews} Reviews)</small>
					</div>

					<div className='d-flex align-items-end'>
						<h5 className='mb-0'>${product.price && product.price.toFixed(2)}</h5>
						&nbsp;
						{product.oldPrice !== 0 && (
							<h6 className='mb-0 text-muted'>
								<del>${product.oldPrice && product.oldPrice.toFixed(2)}</del>
							</h6>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Product
