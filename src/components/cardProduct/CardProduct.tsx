import styles from './CardProduct.module.css'

interface CardProps {
    img: string
    id: number
    title: string
}
const CardProduct = ({ img, id, title }: CardProps) => {
    return (
        <div className={styles.container}>
            <div key={id} className={styles.card} style={{ backgroundImage: `url(${img})` }}>
            </div>
            <span>{title}</span>
        </div>

    )
}

export default CardProduct
