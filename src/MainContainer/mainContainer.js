import React, { Component } from 'react';


class MainContainer extends Component {

	state= {
		news: []
	}

	getNews = async () => {
		try{
			const news = await fetch('https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=7e53927e0355469b847cbdd558c52cf3');
			const newsJson = await news.json();
			this.setState({
				news: newsJson
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
				<h1>Hola</h1>
			</div>
			)
	}
}

export default MainContainer;