import React, { useEffect } from "react";
import { Principal } from "./pages/Principal";
import { Produto } from "./pages/Produto";
import { Carrinho } from "./pages/Carrinho"
import { carrosseis, produto, filtro } from "./data.json"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {


    useEffect(() => {
        // Função que força a acessibilidade no botão
        const forceAlly = () => {
            const botaoVlibras = document.querySelector('[vw-access-button]') as HTMLElement;

            if (botaoVlibras) {
                // Só reaplica se estiver faltando o tabindex
                if (botaoVlibras.getAttribute('tabindex') !== '0') {
                    botaoVlibras.setAttribute('tabindex', '0');
                    botaoVlibras.setAttribute('role', 'button');
                    botaoVlibras.setAttribute('aria-label', 'Ativar tradutor de Libras');

                    // Garante o evento de teclado
                    botaoVlibras.onkeydown = (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            // Tenta clicar na imagem interna (se houver) ou no próprio botão
                            const img = botaoVlibras.querySelector('img');
                            if (img) img.click();
                            else botaoVlibras.click();
                        }
                    };
                }
            }
        };

        // 1. Tenta rodar imediatamente
        forceAlly();

        // 2. Cria um observador para vigiar mudanças no DOM (caso o VLibras recarregue)
        const observer = new MutationObserver(() => {
            forceAlly();
        });

        // Começa a vigiar o corpo da página por mudanças nos elementos filhos
        observer.observe(document.body, { childList: true, subtree: true });

        // Limpeza ao desmontar
        return () => observer.disconnect();
    }, []);
   

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Principal carrosseis={carrosseis} produto={produto} filtro={filtro} />} />
                <Route path="/produto/:id" element={<Produto />} />
                <Route path="/carrinho" element={<Carrinho produto={produto} />} />
            </Routes>
        </Router>
    );
}

export default App;