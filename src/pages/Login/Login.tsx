import styles from './Login.module.css'
import { useState, FormEvent } from 'react'
//Redirecionar usuário quando ele logar
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'


const Login = () => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const navigate = useNavigate();

  const { register, login } = useContext(AuthContext);

  //Tela de criar usuário e de usuário criado
  const [criar, setCriar] = useState(true);


  async function handleRegister(e: FormEvent) {

    e.preventDefault();
    if (registerPassword !== confirmPassword || registerEmail === '') {
      alert('Todos os campos devem estar preenchidos e as senhas devem ser iguais');
      return
    }
    const user = {
      email: registerEmail,
      senha: registerPassword
    }
    register(user)
    setRegisterEmail('');
    setRegisterPassword('');
    setConfirmPassword('');
    setCriar(false);
  }

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    if (loginEmail === '' || loginPassword === '') {
      alert('Todos os campos devem estar preenchidos');
      return
    }
    const user = {
      email: loginEmail,
      senha: loginPassword
    }
    await login(user);
    navigate('/home')
  }

  function handleCreate() {
    setCriar(true);
  }

  return (
    <div className={styles.login_page}>
      <main className={styles.register_login}>
        {criar === true ? (
          <div className={styles.register_container}>
            <h2>É novo aqui? Crie sua conta!</h2>
            <div className={styles.register}>
              <form>
                <label>
                  <span>Usuário</span>
                  <input
                    type="email"
                    placeholder='Digite seu email'
                    onChange={(e) => setRegisterEmail(e.target.value)}
                  />
                </label>
                <label>
                  <span>Senha</span>
                  <input
                    type="password"
                    placeholder='Digite sua senha'
                    onChange={(e) => setRegisterPassword(e.target.value)}
                  />
                </label>
                <label>
                  <span>Confirmar senha</span>
                  <input
                    type="password"
                    placeholder='Confirme sua senha'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </label>
                <button
                  className={styles.register_btn}
                  onClick={handleRegister}
                >
                  Cadastrar
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className={styles.register_container}>
            <h2>Cadastro realizado com sucesso!</h2>
            <div className={styles.register_sucess}>
              <span>Obrigado por criar sua conta! Agora é só logar!</span>
              <button className={styles.created_btn} onClick={handleCreate} >Voltar</button>
            </div>
          </div>
        )}
        <div className={styles.login_container}>
          <h2>Já possui conta? Faça seu login!</h2>
          <div className={styles.login}>
            <form>
              <label>
                <span>Usuário</span>
                <input
                  type="email"
                  placeholder='Digite seu email'
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </label>
              <label>
                <span>Senha</span>
                <input
                  type="password"
                  placeholder='Digite sua senha'
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </label>
              <button
                className={styles.login_btn}
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Login