import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import headerLogo from "../assets/new_logo.png";
import headerCarrinho from "../assets/carrinho.svg";
import headerPerfil from "../assets/perfil.svg";
import headerCoracao from "../assets/coracao.svg";
import NavButtons from "./NavButtons";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/auth/AuthContext";
import MenuLogout from "./MenuLogout";
import { CgMenu, CgClose } from "react-icons/cg";
import { ModalPrecisaLogar } from "../components/ModalPrecisaLogar";
import { BsSearch } from "react-icons/bs";

export function Header(props) {
  const isPrincipal = props.isPrincipal;
  const [showModal, setShowModal] = useState(false);
  const [nome, setNome] = useState("");

  const { modalLogout, setModalLogout, qtdItensCarrinho, setQtdItensCarrinho } =
    useAuthContext();

  const openModalLogin = () => {
    setShowModal((prev) => !prev);
  };

  const [showModalPrecisaLogar, setShowModalPrecisaLogar] = useState(false);

  const precisaLogar = () => {
    setShowModalPrecisaLogar((prev) => !prev);
  };

  const changeStateModalLogout = () => {
    setModalLogout((modalLogout) => !modalLogout);
  };

  const { contraste, setFiltro, setBusca } = useAuthContext();

  const navigate = useNavigate();

  const navigateToPrincipal = () => {
    navigate("/");
  };

  const navigateToCarrinho = () => {
    setModalLogout(false);
    navigate("/carrinho");
  };

  const [open, setOpen] = useState(false);
  const [buscaLocal, setBuscaLocal] = useState("");

  useEffect(() => {
    setNome(localStorage.getItem("username")?.split(" ")[0]);
    const qtd = JSON.parse(localStorage.getItem("carrinho"))?.length;
    if (qtd == null) {
      setQtdItensCarrinho(0);
    } else {
      setQtdItensCarrinho(qtd);
    }
  });

  function buscar() {
    setBusca(buscaLocal);
    setFiltro("");
    navigate("/");
  }

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos >= currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-140px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <>
      <header className={styles.header} id={"header"}>
        <div className={styles.topHeader} id={contraste && styles.contraste}>
          <div className={styles.burgerContainer}>
            <button
              type="button"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className={styles.burgerButton}
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <CgClose className={styles.burgerIcon} size="26px" color="white" />
              ) : (
                <CgMenu className={styles.burgerIcon} size="26px" color="white" />
              )}
            </button>
          </div>
          {open && (
            <div className={styles.dropMenu} id={contraste && styles.contraste}>
              <button
                className={styles.botaoRegular}
                onClick={() => {
                  setFiltro("Promoções");
                  setOpen(false);
                }}
              >
                Promoções
              </button>
              <button
                className={styles.botaoRegular}
                onClick={() => {
                  setFiltro("");
                  setOpen(false);
                }}
              >
                Página Inicial
              </button>
              <button
                className={styles.botaoRegular}
                onClick={() => {
                  setFiltro("Bolsas");
                  setOpen(false);
                }}
              >
                Bolsas
              </button>
              <button
                className={styles.botaoRegular}
                onClick={() => {
                  setFiltro("Porta cartão");
                  setOpen(false);
                }}
              >
                Porta cartão
              </button>
              <button
                className={styles.botaoRegular}
                onClick={() => {
                  setFiltro("Chaveiros");
                  setOpen(false);
                }}
              >
                Chaveiros
              </button>
              <button
                className={styles.botaoRegular}
                onClick={() => {
                  setFiltro("Brincos");
                  setOpen(false);
                }}
              >
                Brincos
              </button>
            </div>
          )}
          <button type="button" onClick={navigateToPrincipal} className={styles.logoButton} aria-label="Ir para a página inicial">
            <img className={styles.logo} src={headerLogo} alt="Logo" />
          </button>
          <div className={styles.funcoes}>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                buscar();
              }}
              className={styles.pesquisa}
              id={contraste && styles.contraste}
            >
              <input
                className={styles.input}
                type="text"
                placeholder="Pesquisar"
                id={contraste && styles.contraste}
                onChange={(e) => {
                  setBuscaLocal(e.target.value);
                  buscar();
                }}
              />

              {contraste && (
                <BsSearch
                  className={styles.iconeBusca}
                  color="var(--green-c)"
                  aria-label="Buscar item"
                  onClick={() => buscar()}
                />
              )}
              {!contraste && (
                <BsSearch
                  className={styles.iconeBusca}
                  color="var(--green-c)"
                  aria-label="Buscar item"
                  onClick={() => buscar()}
                />
              )}
            </form>

            <div className={styles.icones}>
              <button
                type="button"
                className={styles.carrinho}
                onClick={nome ? navigateToCarrinho : precisaLogar}
                aria-label="Ir para o carrinho"
              >
                <img className={styles.carrinhoImg} src={headerCarrinho} alt="" />
                <div className={styles.quantidade} id={contraste && styles.contraste}>
                  {qtdItensCarrinho}
                </div>
              </button>
              <button
                type="button"
                className={styles.perfilButton}
                onClick={nome ? changeStateModalLogout : openModalLogin}
                aria-label={modalLogout ? "Você está autenticado em sua conta" : "Entrar no Perfil"}
              >
                <img className={styles.perfilImg} src={headerPerfil} alt="" />
              </button>
              {modalLogout && <MenuLogout />}
              {nome && <div className={styles.nomeUsuario}>{nome}</div>}
              <a href="#">
                <img
                  className={styles.coracaoImg}
                  src={headerCoracao}
                  alt="Ir para os favoritos"
                />
              </a>
            </div>
          </div>
        </div>
        {isPrincipal && (
          <div className={styles.navButtons}>
            <NavButtons />
          </div>
        )}
        <Login showModal={showModal} setShowModal={setShowModal} />
        <ModalPrecisaLogar
          showModal={showModalPrecisaLogar}
          setShowModal={setShowModalPrecisaLogar}
        />
      </header>
    </>
  );
}
