import React, { Component } from 'react'
import DummyImage from '../Assets/DummyImage.png'

export default class NewsItem extends Component {
    render() {

        let { title, description, imageUrl, newsUrl } = this.props;

        return (
            <div>
                <div className="card" >
                    <img src={imageUrl ? imageUrl : DummyImage} className="card-img-top" alt="..." style={{ height: "187px" }} />
                    <div className="card-body px-2 py-3">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
