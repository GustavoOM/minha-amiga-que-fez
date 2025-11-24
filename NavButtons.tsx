import styles from './NavButtons.module.css'
import { useAuthContext } from '../contexts/auth/AuthContext';
import { useState } from 'react';

export function NavButtons(){

    const { setFiltro, contraste } = useAuthContext();
    const [selecionado, setSelecionado] = useState(1);

    function setButton(label, value){
        setFiltro(label)
        setSelecionado(value)
    }

    // Função auxiliar para decidir qual estilo usar sem remover o botão da tela
    function getEstiloBotao(index) {
        // Se for o botão de "Promoções" (índice 0)
        if (index === 0) {
            return selecionado === 0 ? styles.botaoPromoSelecionado : styles.botaoPromo;
        }
        // Para os outros botões
        return selecionado === index ? styles.selecionado : styles.botaoRegular;
    }

    return(
        <div id={contraste ? styles.contraste : undefined} className={styles.botoes}>
            <button 
                id={contraste ? styles.contraste : undefined} 
                className={getEstiloBotao(0)} 
                onClick={()=>setButton("Promoções",0)}
            >
                Promoções
            </button>

            <button 
                id={contraste ? styles.contraste : undefined} 
                className={getEstiloBotao(1)} 
                onClick={()=>setButton("",1)}
            >
                Página Inicial
            </button>

            <button 
                id={contraste ? styles.contraste : undefined} 
                className={getEstiloBotao(2)} 
                onClick={()=>setButton("Bolsas",2)}
            >
                Bolsas
            </button>

            <button 
                id={contraste ? styles.contraste : undefined} 
                className={getEstiloBotao(3)} 
                onClick={()=>setButton("Porta cartão",3)}
            >
                Porta cartão
            </button>

            <button 
                id={contraste ? styles.contraste : undefined} 
                className={getEstiloBotao(4)} 
                onClick={()=>setButton("Chaveiros",4)}
            >
                Chaveiros
            </button>

            <button 
                id={contraste ? styles.contraste : undefined} 
                className={getEstiloBotao(5)} 
                onClick={()=>setButton("Brincos",5)}
            >
                Brincos
            </button>
        </div>
    )
}
export default NavButtons