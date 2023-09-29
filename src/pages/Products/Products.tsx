import { useParams } from 'react-router-dom'
import styles from './Products.module.css'
import { gameItems } from '../../items/items';
import CardItems from '../../components/cardItems/CardItems';
import { pcItems } from '../../items/items';

const Products = () => {
  //recupera o parametro url, para verificar o valor e fazer o redirecionamento de acordo com o parametro clicado.
  const params = useParams();
  if (params.type === 'games') {
    return (
      <div className={styles.products_container}>
        {gameItems && gameItems.map(game => (
          <div key={game.id}>
            <CardItems
              name={game.name}
              id={game.id}
              price={game.price}
              plataform={game.plataform}
              img={game.img}
              param={game.param}
              amount={game.amount}
            />
          </div>
        ))}
      </div>
    )
  }
  if (params.type === 'computer') {
    return (
      <div className={styles.products_container}>
        {pcItems && pcItems.map(item => (
          <div key={item.id}>
            <CardItems
              name={item.name}
              id={item.id}
              price={item.price}
              plataform={item.marca}
              img={item.img}
              param={item.param}
              amount={item.amount}
            />
          </div>
        ))}
      </div>
    )
  }
  if (params.type === 'smartphone') {
    return (
      <div className={styles.products_container}>
        {gameItems && gameItems.map(game => (
          <div>
            <CardItems
              name={game.name}
              id={game.id}
              price={game.price}
              plataform={game.plataform}
              img={game.img}
              param={game.param}
              amount={game.amount}
            />
          </div>
        ))}
      </div>
    )
  }

}

export default Products