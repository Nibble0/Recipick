import React from 'react';

export function AuthLayout({ children }) {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen bg-bg">
      {/* Painel Laranja (Logo) */}
      {/* --- ALTERAÇÃO: Definir altura para 1/3 no mobile e resetar no desktop --- */}
      <div className="flex w-full h-1/3 lg:h-full flex-col items-center justify-center bg-primary p-8 lg:w-1/2">
        <h1 className="text-5xl font-bold text-light">ReciPick</h1>
        <p className="mt-2 text-lg text-light">Seu melhor amigo na cozinha</p>
      </div>
      
      {/* Painel Direito (Conteúdo) */}
      {/* --- ALTERAÇÃO: Usar flex-grow para ocupar o espaço restante no mobile --- */}
      <div className="flex w-full flex-grow lg:flex-grow-0 flex-col items-center justify-center p-8 lg:w-1/2">
        <div className="w-full max-w-sm">
          {children}
        </div>
      </div>
    </div>
  );
}