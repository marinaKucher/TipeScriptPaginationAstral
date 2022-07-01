import './Card.css';
import React from 'react';
import styled from '@emotion/styled'
import { ICardProps,IProps } from "../../types/data"

const Card : React.FC<ICardProps> = (props ) => {
    const [heartLiked, setHeartLiked] = React.useState<boolean>(false);

    const I = styled.i<IProps>
        `color: ${props => ( props.liked === true ? 'red' : 'black')};
         margin-bottom: 2%
        `
    function changeLiked (){
        setHeartLiked(!heartLiked)
    }

    return (
        <div className="card" >
            <div className="cardContentContainer">
                <img className="cardImg" src={props.imageUrl} alt="здесь ожидалась картинка" />
                <span className="cardText">Дата добавления: <br/> {props.dateOfCreation}</span>
                <I liked={heartLiked} className="fa fa-heart"  aria-hidden="true" onClick={changeLiked} />
            </div>
        </div>
    )
}

export default Card