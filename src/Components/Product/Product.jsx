import { API_URL } from '../../features/const.js';
import { NavLink } from 'react-router-dom';
import { ColorList } from '../ColorList/ColorList.jsx';
import s from './Product.module.scss';
import { BtnLike } from '../BtnLike/BtnLike.jsx';

export const Product = ({id, pic, title, price, colors, description}) => {
                return (
    <article  className={s.product}>
       <NavLink to={`/product/${id}`} className={s.link} >
       <img className={s.image} src={`${API_URL}/${pic}`} alt={`${title} ${description}`} />
       <h3 className={s.title}>{title}</h3>
       </NavLink>

       <div className={s.row}>
           <p className={s.price}>{price} руб</p>
               <BtnLike id={id}/>
       </div>
       <ColorList colors={colors} />
    </article>
)
}