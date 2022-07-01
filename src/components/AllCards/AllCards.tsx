import React from 'react';
import Card from "../Card/Card"
import { ICard,ICardListProps } from "../../types/data"
import {css} from "@emotion/css";
import getCurrentDate from "../../getCurrentDate";

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
               <Card key={ props.items.indexOf(item)}  dateOfCreation={getCurrentDate(item.id)} imageUrl={item.thumbnailUrl} />
           )
       }
   </div>
}

export default CardList