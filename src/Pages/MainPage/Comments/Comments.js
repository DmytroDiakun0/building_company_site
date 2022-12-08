import React from "react";

import './Comments.css'

import faceImage1 from '../../../Images/face-1.png';
import faceImage2 from '../../../Images/face-2.png';
import faceImage3 from '../../../Images/face-3.png';
import faceImage4 from '../../../Images/face-4.png';

function Comments() {

    const text = [
        "Дякую за хорошу роботу, все зроблено якісно і вчасно",
        "Висловлюю подяку хлопцям за якісну роботу, а керівнику за розуміння.",
        "Позитивні хлопці, приємно мати з вами справу, так тримати",
        "Все зроблено добре та вчасно, проведена дуже якісна робота"
    ]

    const comments = [
        {photo: faceImage1, name: "Рановський Владислав", text: text[0]},
        {photo: faceImage2, name: "Гаймір Сергій", text: text[1]},
        {photo: faceImage3, name: "Владний Андрій", text: text[2]},
        {photo: faceImage4, name: "Правий Віктор", text: text[3]}
    ]

    let elements = comments.map( (comment) => {
        return (
            <div className="comment">
                <div className="comment-photo">
                    <img src={comment.photo}/>
                </div>
                <div className="comment-content">
                    <div className="comment-name">{comment.name}</div>
                    <div className="comment-text"><p>{comment.text}</p></div>
                </div>
            </div>
        );
    })

    return (
        <div className="comments">
            <div className="comments-title">
                <h2>Відгуки</h2>
            </div>
            <div className="comments-content">
                {elements}
            </div>
        </div>
    );
}

export default Comments;