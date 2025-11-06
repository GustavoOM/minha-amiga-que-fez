import styles from './NavButtons.module.css'
import { useAuthContext } from '../contexts/auth/AuthContext';
import { useState } from 'react';

export function NavButtons(){

    const { setFiltro, contraste } = useAuthContext();
    const [selecionado,setSelecionado] = useState(1);

    function setButton(label, value){
        setFiltro(label)
        setSelecionado(value)
    }

    return(
        <div id={contraste && styles.contraste} className={styles.botoes}>
            {
                (selecionado == 0) &&
                <button id={contraste && styles.contraste} className={styles.botaoPromoSelecionado} onClick={()=>setButton("Promoções",0)}>Promoções</button>
            }
            {
                (selecionado != 0) &&
                <button id={contraste && styles.contraste} className={styles.botaoPromo} onClick={()=>setButton("Promoções",0)}>Promoções</button>
            }
            {
                (selecionado == 1) &&
                <button id={contraste && styles.contraste} className={styles.selecionado} onClick={()=>setButton("",1)}>Página Inicial</button>
            }
            {
                (selecionado != 1) &&
                <button id={contraste && styles.contraste} className={styles.botaoRegular} onClick={()=>setButton("",1)}>Página Inicial</button>
            }
            {
                (selecionado == 2) &&
                <button id={contraste && styles.contraste} className={styles.selecionado} onClick={()=>setButton("Bolsas",2)}>Bolsas</button>
            }
            {
                (selecionado != 2) &&
                <button id={contraste && styles.contraste} className={styles.botaoRegular} onClick={()=>setButton("Bolsas",2)}>Bolsas</button>
            }
            {
                (selecionado == 3) &&
                <button id={contraste && styles.contraste} className={styles.selecionado} onClick={()=>setButton("Porta cartão",3)}>Porta cartão</button>
            }
            {
                (selecionado != 3) &&
                <button id={contraste && styles.contraste} className={styles.botaoRegular} onClick={()=>setButton("Porta cartão",3)}>Porta cartão</button>
            }
            {
                (selecionado == 4) &&
                <button id={contraste && styles.contraste} className={styles.selecionado} onClick={()=>setButton("Chaveiros",4)}>Chaveiros</button>
            }
            {
                (selecionado != 4) &&
                <button id={contraste && styles.contraste} className={styles.botaoRegular} onClick={()=>setButton("Chaveiros",4)}>Chaveiros</button>
            }
            {
                (selecionado == 5) &&
                <button id={contraste && styles.contraste} className={styles.selecionado} onClick={()=>setButton("Brincos",5)}>Brincos</button>
            }
            {
                (selecionado != 5) &&
                <button id={contraste && styles.contraste} className={styles.botaoRegular} onClick={()=>setButton("Brincos",5)}>Brincos</button>
            }
        </div>
    )
}
export default NavButtons