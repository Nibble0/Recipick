import React from 'react';

export function AuthLayout({ children }) {
  return (
    // --- ALTERAÇÃO: O layout agora permite rolagem em telas pequenas se o conteúdo for grande ---
    <div className="flex flex-col lg:flex-row h-screen min-h-dvh w-screen bg-bg">
      {/* Painel Laranja (Logo) */}
      {/* --- ALTERAÇÃO: Altura fixa no mobile (ex: 200px), altura total no desktop --- */}
      <div className="flex w-full h-48 lg:h-full flex-col items-center justify-center bg-primary p-8 lg:w-1/2 flex-shrink-0">
        <h1 className="text-5xl font-bold text-light">ReciPick</h1>
        <p className="mt-2 text-lg text-light">Seu melhor amigo na cozinha</p>
      </div>
      
      {/* Painel Direito (Conteúdo) */}
      {/* --- ALTERAÇÃO: Ocupa o espaço restante e permite rolagem interna se necessário --- */}
      <div className="flex w-full flex-grow flex-col items-center justify-center p-8 lg:w-1/2 overflow-y-auto">
        <div className="w-full max-w-sm">
          {children}
        </div>
      </div>
    </div>
  );
}