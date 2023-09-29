import styles from './Header.module.css';
import { GrCart } from 'react-icons/gr';
import { RiLoginBoxLine } from 'react-icons/ri';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase/firebaseConfig';


const Header = () => {
  const { signout, signed } = useContext(AuthContext);
  const [logado, setLogado] = useState(false)
  function logout() {
    signout()
  }
  //useEffect para verificar se o usuário está logado ou não, assim os elementos do header aparecem de acordo com essa condição.
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogado(true)
      } else {
        setLogado(false);
      }
    })
    return () => {
      unsub();
    }
  }, [signed])

  return (
    <header className={styles.header}>
      {logado === true ? (
        <div className={styles.header_container}>
          <button className={styles.cart_btn}>
            <GrCart size={26} />
          </button>
          <button
            onClick={logout}
            className={styles.logout_btn}>
            <RiLoginBoxLine className={styles.icon} size={26} />
          </button>
        </div>
      ) : ('')}
    </header>
  )
}

export default Header