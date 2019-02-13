import React, { Component } from 'react'

class News extends Component {

	render(){

		const newsComposed = this.props.news.map((item, index)=>{
			return (
				<li key={index}>
					 <h3>{item.source.name}</h3>
					 <h5>{item.author}</h5>
					 <h5>{item.title}</h5>
					 <h5>{item.description}</h5>
					 <a href='{item.url}'></a>
					 <a>{item.urlToImage}</a>
					 <h5>{item.publishedAt}</h5>
					 <h5>{item.content}</h5>
				</li>
				)
		})

		return(
		<ul>
			{newsComposed}
		</ul>
		)
	}
}

export default News;