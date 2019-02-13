import React, { Component } from 'react';
import News from './news.js'


class MainContainer extends Component {

	state= {
		news: []
	}

	getNews = async () => {

		try {
			const news = await fetch('https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=7e53927e0355469b847cbdd558c52cf3');
			const newsJson = await news.json();
			this.setState({
				news: newsJson.articles
			});
			return newsJson;
		}	
		catch (err) {
          console.log(err, 'error in catch block')
          return err
		}
	}

	  componentDidMount(){
      this.getNews()
      .then((data) => console.log(data, ' from News API'));
    }

	render() {
		return (
			<div>
			<h1>Welcome {this.props.username} to Top News!</h1>
			<News news={this.state.news}/>
			</div>

			)
	}
}

export default MainContainer;