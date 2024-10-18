// import React from 'react'
import { Link } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/Menu"


const Single = () => {
    return (
        <div className="single">
            <div className="content">
                <img src="https://i.pinimg.com/564x/c8/d2/31/c8d2319b69f618d7b8f476fe1792b25a.jpg" alt="" />
                <div className="user">
                    <img src="https://i.pinimg.com/564x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg" alt="" />
                    <div className="info">
                        <span>John</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?/edit=2`}>
                            <img src={Edit} alt="" />
                        </Link>
                        <img src={Delete} alt="" />
                    </div>
                </div>
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et alias cupiditate
                    temporibus atque at vel assumenda, inventore laborum! Eligendi est nobis itaque? \
                    Minus eveniet magni quia ipsam facilis sit, corporis deleniti quis eaque tempora eligendi, <br /><br />
                    consectetur esse aspernatur repellendus expedita nesciunt quo delectus numquam quae sint nihil. Sed, temporibus voluptates?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et alias cupiditate
                    temporibus atque at vel assumenda, inventore laborum! Eligendi est nobis itaque? \
                    Minus eveniet magni quia ipsam facilis sit, corporis deleniti quis eaque tempora eligendi, <br /><br />
                    consectetur esse aspernatur repellendus expedita nesciunt quo delectus numquam quae sint nihil. Sed, temporibus voluptates?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et alias cupiditate
                    temporibus atque at vel assumenda, inventore laborum! Eligendi est nobis itaque? \
                    Minus eveniet magni quia ipsam facilis sit, corporis deleniti quis eaque tempora eligendi, <br />
                    consectetur esse aspernatur repellendus expedita nesciunt quo delectus numquam quae sint nihil. Sed, temporibus voluptates?<br />br
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et alias cupiditate
                    temporibus atque at vel assumenda, inventore laborum! Eligendi est nobis itaque? \
                    Minus eveniet magni quia ipsam facilis sit, corporis deleniti quis eaque tempora eligendi, <br /><br />
                    consectetur esse aspernatur repellendus expedita nesciunt quo delectus numquam quae sint nihil. Sed, temporibus voluptates?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et alias cupiditate
                    temporibus atque at vel assumenda, inventore laborum! Eligendi est nobis itaque? \
                    Minus eveniet magni quia ipsam facilis sit, corporis deleniti quis eaque tempora eligendi,
                    consectetur esse aspernatur repellendus expedita nesciunt quo delectus numquam quae sint nihil. Sed, temporibus voluptates?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et alias cupiditate
                    temporibus atque at vel assumenda, inventore laborum! Eligendi est nobis itaque? \
                    Minus eveniet magni quia ipsam facilis sit, corporis deleniti quis eaque tempora eligendi,
                    consectetur esse aspernatur repellendus expedita nesciunt quo delectus numquam quae sint nihil. Sed, temporibus voluptates?
                </p>
            </div>
            
            <Menu />
        </div>
    )
}

export default Single
