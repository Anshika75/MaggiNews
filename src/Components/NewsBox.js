import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class NewsBox extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalizeFirstLetter = (e) => {
    return e.charAt(0).toUpperCase() + e.slice(1);
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b5ffc808531441859af2822fb502d15d&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  Prev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=b5ffc808531441859af2822fb502d15d&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  Next = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=b5ffc808531441859af2822fb502d15d&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };
  render() {
    return (
      <>
        <div className="flex flex-col items-center absolute top-[60px] pb-7">
          <div className="text-3xl text-black text-center mt-7 font-Exo font-semibold">
            {" "}
            {this.capitalizeFirstLetter(this.props.category)} News
          </div>
          {this.state.loading && <Spinner />}
          <div className="flex flex-row flex-wrap justify-evenly w-full mt-7 px-5">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <NewsItem
                    key={element.url}
                    title={
                      element.title
                        ? element.title.slice(0, 30)
                        : "Lorem ipsum dolor sit amet, co"
                    }
                    description={
                      element.description
                        ? element.description.slice(0, 70)
                        : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut hendr"
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                );
              })}
          </div>
          <div className="grid place-items-center w-full items-center px-10 mt-20">
            <div className="inline-flex">
              <button
                type="button"
                disabled={this.state.page <= 1}
                onClick={this.Prev}
                className="bg-transparent hover:bg-black text-black font-semibold transition-all hover:text-yellow mr-1 py-2 px-4 border border-black hover:border-transparent rounded"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                type="button"
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize)
                }
                onClick={this.Next}
                className="bg-transparent hover:bg-black text-black font-semibold transition-all hover:text-yellow ml-1 py-2 px-4 border border-black hover:border-transparent rounded"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
