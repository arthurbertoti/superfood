import { useNavigate } from "react-router-dom"
export default function NotFound() {
    const navigate = useNavigate();
    return (
        <>
            <h1>404 - Página não encontrada</h1>
            <button onClick={() => navigate("/")}>Voltar para a página inicial</button>
        </>
    )
}