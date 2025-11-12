import styles from './Accessibility.module.css'

import accessFonteAumentar from '../assets/iconeFonte.svg'
import accessContraste from '../assets/iconeContraste.svg'
import accessFonteDiminuir from '../assets/iconeFonteDiminuir.svg'
import { useAuthContext } from '../contexts/auth/AuthContext';


export function Accessibility(){
    const { contraste, setContraste } = useAuthContext();
    
    const aumentarFonte = () => {
        var tamanho = document.querySelector(':root').style.fontSize; 
        document.querySelector(':root').style.fontSize = 
            (tamanho < "18px") ?  "18px" : "22px";
    }

    const diminuirFonte = () => {
        var tamanho = document.querySelector(':root').style.fontSize; 
        document.querySelector(':root').style.fontSize = 
            (tamanho <= "18px") ?  "16px" : "18px";  
    }

    return(
        <div className={styles.containerAccessibility}>
            <div className={styles.accessibility} id={contraste && styles.contraste}>
                <button type="button" aria-label="Aumentar o tamanho da fonte" className={styles.tamFonte} onClick={aumentarFonte}>
                    <img src={accessFonteAumentar} alt="" />
                </button>
                <hr className={styles.linha}/>
                <button type="button" aria-label="Diminuir o tamanho da fonte" className={styles.tamFonte} onClick={diminuirFonte}>
                    <img src={accessFonteDiminuir} alt="" />
                </button>
                <hr className={styles.linha}/>
                <button type="button" aria-label="Mudar o modo de contraste" className={styles.contraste} onClick={()=>setContraste(!contraste)}>
                    <img src={accessContraste} alt="" />
                </button>
            </div>
        </div>
    )
}