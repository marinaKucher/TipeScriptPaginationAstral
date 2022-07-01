import React, {useState} from 'react';
import './App.css';
import AllCards from "../src/components/AllCards/AllCards"
import { ICard } from "./types/data"
import getNewImages from "./RequestMethods/getNewImages";



let arrRequest:Array<ICard>=[]

function App() {
    const [images,setImages] = useState<Array<ICard>>([]);
    const [currentPage,setCurrentPage] = useState<number>(1);
    const [fetching,setFetching] = useState<boolean>(true);

    React.useEffect(() => {

        getNewImages<ICard[]>('https://jsonplaceholder.typicode.com/photos?_limit=6&_page='+currentPage.toString()).then(
            (data) => {
                arrRequest=data
                setImages(images.concat(arrRequest))
            }
        )
    }, [fetching]);


    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setFetching(!fetching)
        setCurrentPage(currentPage+1)
    };

  return (
      <div className="intro">
          <div className="maincontant">
              <div className="cardcontainer">
                      <AllCards items={images} />
              </div>
          </div>
          <div className="footer">
              <button onClick={buttonHandler} className="footerbutton"  > Загрузить ещё</button>
          </div>
      </div>


  );
}

export default App;
