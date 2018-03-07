import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { formatPrice } from "../helpers"

class Fish extends Component {
	static propTypes = {
		details: PropTypes.shape({
			image: PropTypes.string,
			name: PropTypes.string,
			desc: PropTypes.string,
			status: PropTypes.string,
			price: PropTypes.number
		}),
		addToOrder: PropTypes.func
	}
	render() {
		const { image, name, price, desc, status } = this.props.details
		const isAvailable = status === 'available'
		const projectPath = 'https://ferguske.github.io/React-For-Beginners-2018'
		const imageUrl = `${projectPath}/${image}`

		return (
			<li className="menu-fish">
				<img src={imageUrl} alt={name} />
				<h3 className="fish-name">
					{name}
					<span className="price">{formatPrice(price)}</span>
				</h3>
				<p>{desc}</p>
				<button
					disabled={!isAvailable}
					onClick={() => this.props.addToOrder(this.props.index)}
				>
					{isAvailable ? "Add To Order" : "Sold Out!"}
				</button>
			</li>
		)
	}
}

export default Fish