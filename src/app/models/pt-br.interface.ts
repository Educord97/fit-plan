export interface PtBRStrings {
  Navbar: {
    logo: string;
    sobre: string;
    treinos: string;
    tabelaIMC: string;
  };
  HomeResultados: {
    resultados: string;
    imc: string;
    objetivoLabel: string;
    intensidadeLabel: string;
    intensidadeLevels: {
      intensidadeLeve: string;
      intensidadeMedio: string;
      intensidadePesado: string;
    };
    avaliacaoLabel: string;
    avaliacaoLevels: {
      avaliacaoRuim: string;
      avaliacaoBom: string;
      avaliacaoOtimo: string;
    };
  };
  Treinos: {
    meusTreinos: string;
    treinosLista: {
      treino1: string;
      treino2: string;
      treino3: string;
    };
    diasDaSemana: {
      segunda: string;
      terca: string;
      quarta: string;
      quinta: string;
      sexta: string;
      sabado: string;
    };
    divisaoTreinos: {
      treinoPeitoA: string;
      treinoPeitoB: string;
      treinoTricepsA: string;
      treinoTricepsB: string;
      treinoPernasA: string;
      treinoPernasB: string;
      treinoOmbrosA: string;
      treinoOmbrosB: string;
      treinoBicepsA: string;
      treinoBicepsB: string;
      treinoCostasA: string;
    };
    novoTreino: {
      titulo: string;
      nome: string;
      objetivo: {
        ganharMassa: string;
        perderPeso: string;
      };
    };
  };
  Footer: {
    autor: string;
  };
  Sobre: {
    titulo: string;
    subtitulo: string;
    cardLeft: {
      titulo: string;
      subtitulo: string;
    };
    cardRight: {
      titulo: string;
      subtitulo: string;
    };
  };
  IMC: {
    imcLabel: string;
    titulo: string;
    peso: string;
    altura: string;
    resultadoLabel: string;
    imcParametros: {
      nivel1: string;
      nivel2: string;
      nivel3: string;
      nivel4: string;
      nivel5: string;
      nivel6: string;
    };
    imcClassificacao: {
      abaixoDoPeso: string;
      pesoIdeal: string;
      levementeAcima: string;
      obesidade1: string;
      obesidade2: string;
      obesidade3: string;
    };
    resultadoMensagens: {
      abaixoDoPeso: string;
      pesoIdeal: string;
      levementeAcima: string;
      obesidade1: string;
      obesidade2: string;
      obesidade3: string;
    };
  };
  DeleteDialog: {
    title: string
  },
  Buttons: {
    salvar: string;
    cancelar: string;
    excluir: string;
  };
}
