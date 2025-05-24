import React, { useState } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    setSucesso("");
    try {
      await signInWithEmailAndPassword(auth, email, senha);
    } catch (err: any) {
      setErro("E-mail ou senha inválidos.");
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    setErro("");
    setSucesso("");
    try {
      await signInWithPopup(auth, provider);
    } catch (err: any) {
      setErro("Erro ao fazer login com Google.");
    }
  };

  const handleRegister = async () => {
    setErro("");
    setSucesso("");
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      setSucesso("Cadastro realizado com sucesso! Agora você pode entrar.");
    } catch (err: any) {
      setErro("Erro ao cadastrar. Verifique o e-mail e a senha (mínimo 6 caracteres).");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #e0e7ff 0%, #bae6fd 100%)"
    }}>
      <div style={{
        background: "#fff",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        borderRadius: "12px",
        padding: "32px",
        width: "100%",
        maxWidth: "350px",
        boxSizing: "border-box"
      }}>
        <h2 style={{
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
          color: "#2563eb",
          marginBottom: "24px"
        }}>Bem-vindo!</h2>
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label htmlFor="email" style={{ display: "block", color: "#374151", marginBottom: "4px" }}>E-mail</label>
            <input
              id="email"
              style={{
                width: "100%",
                padding: "8px 12px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                outline: "none"
              }}
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="senha" style={{ display: "block", color: "#374151", marginBottom: "4px" }}>Senha</label>
            <input
              id="senha"
              style={{
                width: "100%",
                padding: "8px 12px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                outline: "none"
              }}
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              required
            />
          </div>
          {erro && <div style={{ color: "#dc2626", fontSize: "0.95rem", textAlign: "center" }}>{erro}</div>}
          {sucesso && <div style={{ color: "#16a34a", fontSize: "0.95rem", textAlign: "center" }}>{sucesso}</div>}
          <button
            type="submit"
            style={{
              width: "100%",
              background: "#2563eb",
              color: "#fff",
              fontWeight: "bold",
              padding: "10px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              marginTop: "8px"
            }}
          >
            Entrar
          </button>
        </form>
        <button
          onClick={handleRegister}
          style={{
            width: "100%",
            background: "#10b981",
            color: "#fff",
            fontWeight: "bold",
            padding: "10px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            marginTop: "10px"
          }}
        >
          Cadastrar novo usuário
        </button>
        <div style={{
          display: "flex",
          alignItems: "center",
          margin: "20px 0"
        }}>
          <div style={{ flex: 1, height: "1px", background: "#e5e7eb" }}></div>
          <span style={{ margin: "0 10px", color: "#9ca3af" }}>ou</span>
          <div style={{ flex: 1, height: "1px", background: "#e5e7eb" }}></div>
        </div>
        <button
          onClick={handleGoogleLogin}
          style={{
            width: "100%",
            background: "#f3f4f6",
            border: "1px solid #d1d5db",
            color: "#374151",
            fontWeight: "bold",
            padding: "10px",
            borderRadius: "6px",
            cursor: "pointer",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
          }}
        >
          Entrar com Google
        </button>
      </div>
    </div>
  );
};

export default Login;