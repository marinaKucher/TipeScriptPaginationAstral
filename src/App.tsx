import React, {useState} from 'react';
import './App.css';
import AllCards from "../src/components/AllCards/AllCards"
import { ICard } from "./types/data"

let hk:ICard  = {
    albumId: 1,
    id: 1,
    thumbnailUrl: 'https://via.placeholder.com/600/24f355',
    title: 'string',
    url: 'string'
}

let hr:ICard  = {
    albumId: 1,
    id: 1,
    thumbnailUrl: 'https://via.placeholder.com/600/24f355',
    title: 'string',
    url: 'string'
}

let arrHK:Array<ICard>=[hk,hk,hk,hk,hk,hk]
let arrHR:Array<ICard>=[hr,hr,hr,hr,hr,hr]

function App() {
    const [images,setImages] = useState<Array<ICard>>([]);
    const [currentPage,setCurrentPage] = useState<number>(1);
    const [fetching,setFetching] = useState<boolean>(true);

    React.useEffect(() => {
        console.log("зашел сюда")

    }, [fetching]);


    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {

        event.preventDefault();
        arrHK=arrHK.concat(arrHR)
        setImages(arrHK)
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
