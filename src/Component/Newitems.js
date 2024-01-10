import React, { Component } from 'react'

export default class Newitems extends Component {
  render() {
    let { title, descripation, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-3' >
        <div className="card" >
          <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
          <span className="badge rounded-pill bg-danger" style={{left: '90%' , zIndex: 2}}>
            {source}
          </span>
          </div>
          <img className="card-img-top" src={!imageUrl ? 'https://image.cnbcfm.com/api/v1/image/107329818-1699310728695-gettyimages-1437209420-me1a4927.jpeg?v=1699310757&w=1920&h=1080' : imageUrl} alt=" " />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{descripation}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? 'Unknown' : author}on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark" rel="noreferrer">Read More </a>
          </div>
        </div>
      </div>
    )
  }
}

