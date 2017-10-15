import React, { Component } from 'react'
import { connect} from 'react-redux'
import { fetchCategories } from '../actions/categories'

class CategoriesList extends Component {
	componentDidMount() {
		this.props.fetchCategories();
	}

	render() {
		const { categories } = this.props
		console.log(categories)
		return (
			<div className='jumbotron'>
				<h1>Categories</h1>
				{ categories !== undefined && (
					<ul className="list-group">
					{categories.map( category => (
						<li key={category.path} className="list-group-item">{category.name}</li>
					))}
					</ul>
				)}
			</div>
		)
	}
}

const mapStateToProps = ({ categories }) => ({
	categories
})

export default connect(mapStateToProps, { fetchCategories }) (CategoriesList)