import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <>

                <div className="w-[300px] relative h-auto pb-7 overflow-hidden bg-white rounded-lg border border-gray-200 shadow-md m-3 flex flex-col items-start">
                    <img src={!imageUrl ? "https://picsum.photos/200" : imageUrl} className='h-[200px] w-full' alt="" srcSet="" />
                    <div className="font-Palanquin text-xl text-black leading-6 font-semibold px-3 mt-3">{title}...</div>
                    <div className="font-Geo px-3 text-lg mt-2 leading-[20px] text-gray-500">{description}...</div>
                    <div className="font-Exo px-3 text-xs mt-2 leading-[20px] text-gray-500">By {!author ? "Maggi Agent" : author} on  {new Date(date).toGMTString()}</div>
                    <a href={newsUrl} className='no-underline'>
                    <button className='bg-black font-Palanquin rounded-md text-base text-white opacity-75 hover:opacity-100 transition-all cursor-pointer mt-3 mx-3 px-3 py-2'>Read More</button>
                    </a>
                    <div className="absolute bg-yellow rounded-l-md opacity-70 text-sm font-Exo font-semibold text-white bottom-5 right-0 px-2 py-1">{source}</div>
                </div>

            </>
        )
    }
}
