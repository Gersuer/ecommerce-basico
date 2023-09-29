import styles from './CardItems.module.css';
import { BsPlus } from 'react-icons/bs';
import { AiOutlineMinus } from 'react-icons/ai';
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

interface ItemsProps {
    name: string
    id: number
    price: string
    plataform: string
    img: string
    param: string
    amount: number
}

const CardItems = ({ name, id, price, plataform, img, param, amount }: ItemsProps) => {
    const navigate = useNavigate();
    function handleNavigate(parametro: string, id: number) {
        navigate(`/products/${parametro}/${id}`);
    }

    return (
        <div key={id} className={styles.item_container}>
            {/* <Link to={`/products/${param}/${id}`}>
                <img src={img} alt={name} />
            </Link> */}
            <button className={styles.img_btn} onClick={() => handleNavigate(param, id)}>
                <img src={img} alt={name} />
            </button>
            <div className={styles.game_info}>
                <span>Plataforma: {plataform}</span>
                <span>{name}</span>
                <span>Preço: {price}</span>
            </div>
            <div className={styles.buy_container}>
                <span>Quantidade:</span>
                <div className={styles.buttons_container}>
                    <button className={styles.buy_button_change}>
                        <AiOutlineMinus size={24} />
                    </button>
                    <span>{amount}</span>
                    <button
                        className={styles.buy_button_change}
                    >
                        <BsPlus size={24} />
                    </button>
                </div>
            </div>
            <button className={styles.buy_btn}>Adicionar ao carrinho</button>
        </div>
    )
}

export default CardItems
