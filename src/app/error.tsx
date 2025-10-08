"use client";

import ErrorMessage from "@/components/ErrorMessage";
import { useEffect } from "react";

type RootErrorPageProps = {
  error: Error; // Objeto de erro recebido
  reset: () => void; // Função para resetar/recuperar aplicação
};

export default function RootErrorPage({ error }: RootErrorPageProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <ErrorMessage
      pageTitle="Internal Server Error"
      contentTitle="501"
      content="Ocorreu um erro do qual nossa aplicação não conseguiu ser recuperar. Tente novamente mais tarde."
    />
  );
}
