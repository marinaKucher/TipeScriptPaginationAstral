import React from 'react';
import Card from "../Card/Card"
import { ICard } from "../../types/data"
import {css} from "@emotion/css";


interface ICardListProps{
   items : ICard[]
}

const CardList : React.FC<ICardListProps> = (props ) => {
   return <div className={css`
    width: 100%;
    height: 90%;
    border-width: 1px;
    border-style: dashed;
    border-color: white;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    `}>
       {
           props.items.map( item =>
               <Card key={item.id}  dateOfCreation={item.title} imageUrl={item.thumbnailUrl} />
           )
       }
   </div>
}

export default CardList