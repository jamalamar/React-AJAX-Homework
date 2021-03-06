import React, { Component } from 'react'
import { Container, Divider } from 'semantic-ui-react'

class News extends Component {

	render(){

		const newsComposed = this.props.news.map((item, index)=>{
			return (
				<a href={item.url}>
						<li key={index}>  
						<img src={item.urlToImage} />
						<Container className='newsTittle'textAlign='center'><h2>{item.title}</h2></Container>
						<Container textAlign='left'>{item.source.name}</Container>
						<Container textAlign='right'>{item.publishedAt}</Container>
						<Container textAlign='justified'>
							<b>{item.author}</b>
						<Divider />
							<h3>{item.title}</h3>
							<p>{item.description}</p>
							<p>{item.content}</p>
						</Container>
					</li>
				</a>

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