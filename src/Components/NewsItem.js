import React, { Component } from 'react'
import DummyImage from '../Assets/DummyImage.png'
import {
    Link
} from "react-router-dom";

export default class NewsItem extends Component {
    render() {

        let { title, description, imageUrl, newsUrl, author, date } = this.props;

        return (
            <div>
                <div className="card" >
                    <img src={imageUrl ? imageUrl : DummyImage} className="card-img-top" alt="..." style={{ height: "187px" }} />
                    <div className="card-body px-2 py-3">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toDateString()}</small></p>
                        <Link to={newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</Link>
                    </div>
                </div>
            </div>
        )
    }
}
