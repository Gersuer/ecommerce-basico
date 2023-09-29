import styles from './Home.module.css'
import smartphone from '../../assets/phone.jpg'
import games from '../../assets/god.jpg'
import computer from '../../assets/pc.jpg'
import CardProduct from '../../components/cardProduct/CardProduct'

import { Link } from 'react-router-dom'

const Home = () => {
  const list = [
    {
      img: games,
      id: 1,
      title: 'Games',
      param: 'games'
    },
    {
      img: computer,
      id: 2,
      title: 'Computer',
      param: 'computer'
    },
    {
      img: smartphone,
      id: 3,
      title: 'Smartphone',
      param: 'smartphone'
    }

  ]

  return (
    <div className={styles.home_container}>
      {
        list && list.map(item => (
          <Link key={item.id} to={`/products/${item.param}`}>
            <CardProduct
              img={item.img}
              id={item.id}
              title={item.title} />
          </Link>
        ))
      }
    </div>
  )
}

export default Home