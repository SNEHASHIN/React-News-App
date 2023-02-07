import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Home.css";
import Theme from "./Theme";
import Like from "./Like"




function Home(props) {
 
  
  const [data, setData] = useState([]);

  
  const getapi = async () => {
    const apiData = await axios.get(
      // "https://newsapi.org/v2/everything?q=india&apiKey=a8b7244c76de44a48674b035cb6cad1c"
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=a8b7244c76de44a48674b035cb6cad1c"
    );
    setData(apiData.data.articles);
    console.log(apiData.data.articles);
  };

  useEffect(() => {
    getapi();
  }, []);

  return (
    <>
      <Theme />
      {data
        ?.filter((val) => {
          if (props.part === "") {
            return val;
          } else if (
            val.title.toLowerCase().startsWith(props.part.toLowerCase())
          ) {
            return val;
          }
        })

        .map((item) => (
          <div className="newsbox" key={item.url}>
            <div className="box1">
              <div className="box2">
                <div className="img1">
                  <h3 className="title">{item.title}</h3>
                  {/* <h3 className="description">{item.description}</h3> */}
                  <img src={item.urlToImage} alt="" />
                </div>

                <button className="url">
                  <a href={item.url}>Read More</a>
                </button>
                <p className="pub">
                  <h5>Publishing Time ::</h5> {item.publishedAt}
                </p>

                <Like />
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default Home;