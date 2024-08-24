import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loader from '../../components/Loader'

const Profile = () => {
	const { user, loading } = useSelector((state) => state.auth)

	return (
		<section className='container my-4'>
			{loading ? (
				<Loader />
			) : (
				<div className='card card-profile shadow-sm'>
					<div className='card-header text-center border-0'>
						<b>My Profile</b>
					</div>
					<div className='card-body'>
						<div className='text-center'>
							<img
								src={user && process.env.REACT_APP_API_URL + user.avatar}
								alt={user && user.name}
								style={{ borderRadius: '50px', width: '250px' }}
							/>
						</div>

						<div className='text-center mt-4'>
							<h5>{user && user.name}</h5>
							<div className='h6 font-weight-300'>{user && user.role}</div>
							<div className='h6 mt-4'>{user && user.email}</div>
							<div>Joined On - {String(user && user.createdAt).substring(0, 10)}</div>
						</div>

						<div className='text-center mt-4'>
							<Link to='/settings' className='btn btn-sm btn-info'>
								Update Profile
							</Link>
						</div>
						<div className='text-center mt-4'>
							<Link to='/password-update' className='btn btn-sm btn-warning'>
								Update Password
							</Link>
						</div>
					</div>
					{user && user.about && (
						<div className='card-footer text-center'>{user.about}</div>
					)}
				</div>
			)}
		</section>
	)
}

export default Profile
