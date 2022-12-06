// import React, { Component } from "react";

// export default class NewsItems extends Component {
//   render() {
//     let { title, description,imageUrl,url,author,time,source} = this.props;
//     return (
//       <div >
//         <div className="card my-3" >
//           <img src={imageUrl} alt="img"/>
//           <div className="card-body">
//             <h5 className="card-title">{title}....<span className="badge bg-success">{source}</span></h5>
//             <p className="card-text">{description}....</p>
           
//             <p className="card-text"><small className="text-muted">Author:{author} and Time:{new Date(time).toUTCString()}</small></p>
//             <a href={url} target="_blank" rel="noreferrer"className="btn btn-sm btn-primary">
//            Read more
//             </a>
            
//           </div>
//         </div>
//       </div>
//     );
//   }
// }


//*********************************Function based***********************//


import React from "react";

const NewsItems =(props)=> {
 
    let { title, description,imageUrl,url,author,time,source} = props;
    return (
      <div >
        <div className="card my-3" >
          <img src={imageUrl} alt="img"/>
          <div className="card-body">
            <h5 className="card-title">{title}....<span className="badge bg-success">{source}</span></h5>
            <p className="card-text">{description}....</p>
           
            <p className="card-text"><small className="text-muted">Author:{author} and Time:{new Date(time).toUTCString()}</small></p>
            <a href={url} target="_blank" rel="noreferrer"className="btn btn-sm btn-primary">
           Read more
            </a>
            
          </div>
        </div>
      </div>
    );
  
}

export default NewsItems;
