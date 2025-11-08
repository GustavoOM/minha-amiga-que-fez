import React, { useState } from "react";
import styles from './Card.module.css'
import semImagem from '../assets/semImagem.svg'
import coracaoCheio from '../assets/coracaoCheio.svg'
import coracaoVazio from '../assets/coracaoVazio.svg'
import coracaoCheioContraste from '../assets/coracaoCheioContraste.svg'
import coracaoVazioContraste from '../assets/coracaoVazioContraste.svg'
import { useAuthContext } from "../contexts/auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";
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
    return(
      <div className={styles.fundo} id={contraste && styles.contraste}>
        <a href="#" onClick={navigateToProduto}>

          {props.imagemPrincipal &&
              <img className={styles.imagem} src={props.imagemPrincipal} alt={props.descricaoImg ? props.descricaoImg : "Descrição indisponível para a imagem"}/>
          }
          {!props.imagemPrincipal &&
              <img className={styles.imagem} src={semImagem} alt="Produto sem imagem"/>
          }
        </a>
        <div className={styles.conteudoCard}>
          {props.categoria &&
              <p className={styles.categoria} id={contraste && styles.contraste}>{props.categoria}</p>
          }
          {!props.categoria &&
              <p className={styles.categoria} id={contraste && styles.contraste}>Outros</p>
          }
          <h1 className={styles.titulo}>{props.titulo}</h1>
          <h2 className={styles.valor} id={contraste && styles.contraste}>R${props.valor.toFixed(2)}</h2>
          <div className={styles.funcoes}>
    
          

          <a href="#" className={styles.button} 
            onClick={navigateToProduto} id={contraste && styles.contraste}
          >
            VER DETALHES
          </a>
          <div className={styles.coracao}>
            
            {isClick && contraste &&
              <BsHeartFill color="var(--green-c)" size={24} aria-label="Remover produto dos favoritos" isClick={isClick} onClick={() => setClick(!isClick)}/>
            }
            {!isClick && contraste &&
              <BsHeart size={24} color="var(--green-c)" aria-label="Adicionar produto aos favoritos" isClick={isClick} onClick={() => setClick(!isClick)}/>
            }
            {isClick && !contraste &&
              <BsHeartFill size={24} color="var(--green-800)" aria-label="Remover produto dos favoritos" isClick={isClick} onClick={() => setClick(!isClick)}/>
            }
            {!isClick && !contraste &&
              <BsHeart size={24} color="var(--green-800)" aria-label="Adicionar produto aos favoritos" isClick={isClick} onClick={() => setClick(!isClick)}/>
            }  
          </div>
        </div>
      </div>
    </div>
  )
}