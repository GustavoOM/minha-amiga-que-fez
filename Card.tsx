import React, { useState } from "react";
import styles from './Card.module.css'
import semImagem from '../assets/semImagem.svg'
import { useAuthContext } from "../contexts/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { BsHeartFill, BsHeart } from "react-icons/bs";

interface Card {
  imagemPrincipal?: string;
  categoria?: string;
  titulo: string;
  valor:number;
  idProduto:number;
  descricaoImg?: string;
}

export function Card(props:Card){
    const [isClick, setClick] = useState(false);
    const { contraste, setModalLogout } = useAuthContext();
    const newUrl = "/produto/"+props.idProduto

    const navigate = useNavigate();

    const navigateToProduto = () => {
      setModalLogout(false);
      navigate(newUrl);
    };

    // Função para alternar o favorito
    const toggleFavorito = () => {
        setClick(!isClick);
    }

    return(
      <div className={styles.fundo} id={contraste ? styles.contraste : undefined}>
        <a href="#" onClick={navigateToProduto}>
          {props.imagemPrincipal ? (
              <img className={styles.imagem} src={props.imagemPrincipal} alt={props.descricaoImg ? props.descricaoImg : "Descrição indisponível para a imagem"}/>
          ) : (
              <img className={styles.imagem} src={semImagem} alt="Produto sem imagem"/>
          )}
        </a>
        
        <div className={styles.conteudoCard}>
          <p className={styles.categoria} id={contraste ? styles.contraste : undefined}>
              {props.categoria ? props.categoria : "Outros"}
          </p>
          
          <h1 className={styles.titulo}>{props.titulo}</h1>
          <h2 className={styles.valor} id={contraste ? styles.contraste : undefined}>R${props.valor.toFixed(2)}</h2>
          
          <div className={styles.funcoes}>
            <a href="#" className={styles.button} 
                onClick={navigateToProduto} id={contraste ? styles.contraste : undefined}
            >
                VER DETALHES
            </a>

            {/* AQUI ESTÁ A CORREÇÃO: Transformamos a div.coracao em um button */}
            <button 
                type="button"
                className={styles.coracao} 
                onClick={toggleFavorito}
                aria-label={isClick ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                style={{ background: 'transparent', border: 'none', padding: '0 0 0 10px', cursor: 'pointer' }}
            >
                {isClick && contraste && <BsHeartFill color="var(--green-c)" size={24} />}
                {!isClick && contraste && <BsHeart size={24} color="var(--green-c)" />}
                {isClick && !contraste && <BsHeartFill size={24} color="var(--green-800)" />}
                {!isClick && !contraste && <BsHeart size={24} color="var(--green-800)" />}  
            </button>
          </div>
        </div>
      </div>
  )
}