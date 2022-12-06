// import React, { Component } from "react";
// import Loading from "./Loading";
// import NewsItems from "./NewsItems";
// // import PropTypes from 'prop-types'


// export default class News extends Component {
// //   articles=
// //     [
// //         {
// //           "source": {
// //             "id": "espn-cric-info",
// //             "name": "ESPN Cric Info"
// //           },
// //           "author": null,
// //           "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
// //           "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
// //           "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
// //           "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
// //           "publishedAt": "2020-04-27T11:41:47Z",
// //           "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
// //         },
// //         {
// //           "source": {
// //             "id": "espn-cric-info",
// //             "name": "ESPN Cric Info"
// //           },
// //           "author": null,
// //           "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
// //           "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
// //           "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
// //           "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
// //           "publishedAt": "2020-03-30T15:26:05Z",
// //           "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
// //         }
// //       ]
// capitalizeFirstLetter=(string)=>{
// return string.charAt(0).toUpperCase()+string.slice(1);
// }
//     constructor(props){
//         super(props);
//         this.state={

//             // articles:this.articles,
//             articles:[],
//             loading:true,
//             page:1
//         }
//         document.title=`NewsApp-${this.capitalizeFirstLetter(this.props.category)}`;
        
//     }

//    regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
    

//     async updateNews(){
//       let url=`https://newsapi.org/v2/top-headlines?&category=${this.props.category}&country=${this.props.country}&apiKey=ec2be89ad1244d2fb253da682ffa66a9&page=${this.state.page}&pageSize=${this.props.pageSize}`
//        this.setState({laoding:true})
//        let data= await fetch(url);
//        let parsedData=await data.json()
//        this.setState({
//         articles:parsedData.articles,
//         totalResults:parsedData.totalResults,
//         loading:false})
//     }

//     async componentDidMount(){
//        let url=`https://newsapi.org/v2/top-headlines?&category=${this.props.category}&country=${this.props.country}&apiKey=ec2be89ad1244d2fb253da682ffa66a9&page=1&pageSize=${this.props.pageSize}`
//        this.setState({laoding:true})
//        let data= await fetch(url);
//        let parsedData=await data.json()
//        this.setState({
//         articles:parsedData.articles,
//         totalResults:parsedData.totalResults,
//         loading:false})

//     }
//      handleBack=async()=>{

//   //     let url=`https://newsapi.org/v2/top-headlines?&category=${this.props.category}&country=${this.props.country}&apiKey=ec2be89ad1244d2fb253da682ffa66a9&page=${this.state.page-1
//   //    }&pageSize=${this.props.pageSize}`;
//   //    this.setState({loading:true})
//   //   let data= await fetch(url);
//   //   let parsedData=await data.json()
   
//   //     this.setState({
//   //       page:this.state.page-1,
//   //       articles:parsedData.articles,
//   //       loading:false
     
//   //  })
//   this.setState({page:this.state.page-1})
//   this.updateNews();
    

//     }
//    handleNext=async()=>{

//   //   if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

//   //   }
//   //   else{
//   //     let url=`https://newsapi.org/v2/top-headlines?&category=${this.props.category}&country=${this.props.country}&apiKey=ec2be89ad1244d2fb253da682ffa66a9&page=${this.state.page+1
//   //    }&pageSize=${this.props.pageSize}`;
//   //    this.setState({loading:true})
//   //   let data= await fetch(url);
//   //   let parsedData=await data.json()
   
//   //     this.setState({
//   //       page:this.state.page+1,
//   //       articles:parsedData.articles
//   //    ,loading:false
//   //  })
//   //  }
//     this.setState({page:this.state.page+1})
//     this.updateNews();
    
//     }
  
//   render() {
//     return (
//       <div className="container my-3">
//         <h2>{this.regionNames.of(this.props.country)}{this.capitalizeFirstLetter(this.props.category)}-Headlines</h2>
//         {this.state.loading && <Loading/>}
//         <div className="row" >
//             {!this.state.loading && this.state.articles.map((element)=>{
//                return <div className="col-md-4" key={element.url}>
//                <NewsItems title={element.title.slice(0,35)} description={element.description.slice(0,90)} imageUrl={element.urlToImage} url={element.url} className="card-img-top" alt="img" author={element.author} time={element.publishedAt} source={element.source.name}/>
//              </div> 
//             })}
//           </div>
//           <div className="container d-flex justify-content-between">
//           <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handleBack}>&larr; Back</button>
//           <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark " onClick={this.handleNext}>Next &rarr;</button>
//           </div>
//       </div>
//     );
//   }
// }

//****************Function Based****************//

import React ,{useState}from "react";
import Loading from "./Loading";
import NewsItems from "./NewsItems";
import { useEffect } from "react";
// import PropTypes from 'prop-types'


const News =(props)=> {


  


   
        //document.title=`NewsApp-${this.capitalizeFirstLetter(this.props.category)}`;
        
    


         
          const [articles,setArticles]=useState([]);
          const [loading,setLoading]=useState(true);
          const [page,setPage]=useState(1);
          const [totalResults,setTotalResults]=useState();
          
          
const capitalizeFirstLetter=(string)=>{
  return string.charAt(0).toUpperCase()+string.slice(1);
}
const updateNews= async()=>{
            let url=`https://newsapi.org/v2/top-headlines?&category=${props.category}&country=${props.search}&apiKey=145e3653fbb64b43895dcf9768e58222&page=${page}&pageSize=${props.pageSize}`
             setLoading(true);
             let data= await fetch(url);
             let parsedData=await data.json()
             setArticles(parsedData.articles);
             setTotalResults(parsedData.totalResults);
             setLoading(false);
            //  const N={
            //   url:url,
            //   articles:parsedData.articles,
            //   totalResults:parsedData.totalResults,
            //   loading:false
            //  }
             
            //   props.onSave(N);
          }
        
          useEffect(()=>{
          
            updateNews();
            
             //  eslint-disable-next-line
        
        },[])
        
        const handleNext=async()=>{
        
          //   if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){
        
          //   }
          //   else{
          //     let url=`https://newsapi.org/v2/top-headlines?&category=${this.props.category}&country=${this.props.country}&apiKey=ec2be89ad1244d2fb253da682ffa66a9&page=${this.state.page+1
          //    }&pageSize=${this.props.pageSize}`;
          //    this.setState({loading:true})
          //   let data= await fetch(url);
          //   let parsedData=await data.json()
           
          //     this.setState({
          //       page:this.state.page+1,
          //       articles:parsedData.articles
          //    ,loading:false
          //  })
          //  }
         updateNews();
        setPage(page+1);
           
            
            
            }
        
        const handleBack=async()=>{
        
        //     let url=`https://newsapi.org/v2/top-headlines?&category=${this.props.category}&country=${this.props.country}&apiKey=ec2be89ad1244d2fb253da682ffa66a9&page=${this.state.page-1
        //    }&pageSize=${this.props.pageSize}`;
        //    this.setState({loading:true})
        //   let data= await fetch(url);
        //   let parsedData=await data.json()
        
        //     this.setState({
        //       page:this.state.page-1,
        //       articles:parsedData.articles,
        //       loading:false
        
        //  })
        updateNews();
        setPage(page-1)
        }
        
 
  

  const handelSubmit = (e) => {
    
    updateNews();
    e.preventDefault()
    
  
    
  };
        
         

return (
      
      <div className="container my-3">
         <div style={{marginLeft:"31rem"}}>
         <form className="d-flex " role="search" onSubmit={handelSubmit} style={{width:"18rem"}}>
        <input className="form-control me-2 my-5 " type="search" placeholder="Search" aria-label="Search" onChange={(e) => props.handelChange(e)}
          value={props.search}/>
        <button className="btn btn-outline-success my-5" type="submit" >Search</button>
      </form>
        
         </div>
        <h2 >{props.search} {capitalizeFirstLetter(props.category)}-Headlines</h2>
        {loading && <Loading/>}

        {/* {articles.length>0? ( */}
          <div className="row" >
            {!loading && articles?.map((element)=>{
               return <div className="col-md-4" key={element.url}>
               <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} className="card-img-top" alt="img" author={element.author} time={element.publishedAt} source={element.source.name} />
             </div> 
            })}
          </div>
            {/* ):(<h1>No News Found</h1>)}  */}
          <div className="container d-flex justify-content-between">
          <button disabled={page<=1} type="button" className="btn btn-dark " onClick={handleBack} >&larr; Back</button>
          <button disabled={page+1>Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark " onClick={handleNext} >Next &rarr;</button>
          </div>
        
      </div>
    );
  
}

export default News;

//////////////////////////////////////////////////////////////////////////////////////

