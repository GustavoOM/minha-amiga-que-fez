import styles from './Footer.module.css'

import footerLogo from '../assets/new_logo.png'
import footerTwitter from '../assets/logoTwitter.svg'
import footerInstagram from '../assets/logoInstagram.svg'
import footerFacebook from '../assets/logoFacebook.svg'
import { useAuthContext } from '../contexts/auth/AuthContext'


export function Footer(){
    const { contraste } = useAuthContext();
    return(
        <>
            <div className={styles.espaco} id={contraste && styles.contraste}></div>
            <footer className={styles.footer}  id={contraste && styles.contraste}>
                
                <div className={styles.container} id={contraste && styles.contraste}>
                    
                    <section className={styles.marca}>
                        <img className={styles.logo} src={footerLogo} alt="Logo da Minha Amiga que Fez" />
                        <p className={styles.info} id={contraste && styles.contraste} >A Minha Amiga que Fez é um site de venda de produtos artesanais desenvolvido em 2025.</p>
                    </section>
                    <section className={styles.informacoes} id={contraste && styles.contraste}>
                        <h1>Informações</h1>
                        <ul>
                            <li>
                                <a className={styles.links} id={contraste && styles.contraste} href="#">Dúvidas Frequentes</a>
                            </li>
                            <li>
                                <a className={styles.links} id={contraste && styles.contraste} href="#">Política de Privacidade</a>
                            </li>
                            <li>
                                <a className={styles.links} id={contraste && styles.contraste} href="#">Fale Conosco</a>
                            </li>
                        </ul>    
                    </section>
                </div>
                {/* <div className={styles.redes}>
                    <a href="#">
                        <img className={styles.twitterImg} src={footerTwitter} alt="Ir para o Twiiter de Esotera" />
                    </a>
                    <a href="#">
                        <img className={styles.instagramImg} src={footerInstagram} alt="Ir para o Instagram de Esotera" />
                    </a>
                    <a href="#">
                        <img className={styles.facebookImg} src={footerFacebook} alt="Ir para o Facebook de Esotera" />
                    </a>
                </div> */}
            </footer>
        </> 
    )
}