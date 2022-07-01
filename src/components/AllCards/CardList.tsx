import React from 'react';
import Card from "../Card/Card"
import { ICardListProps } from "../../types/types"
import { css } from "@emotion/css";
import calcDate from "../../calcDate";

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
               <Card key={ props.items.indexOf(item)} dateOfCreation={calcDate(item.id)} imageUrl={item.thumbnailUrl} />
           )
       }
   </div>
}

export default CardList