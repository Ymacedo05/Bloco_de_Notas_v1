Link do Pages: https://ymacedo05.github.io/Bloco_de_Notas_v1/

Dificuldades identificadas:
- P1 : Como manter os dados salvos após o recarregamento da página sem um banco de dados.
- P2: Organização dos dados/funções contidas no script
- P3: Quando o usuário clica no botão de nova nota ativa o modal e quando ele clica em editar abre o mesmo modal, o qual tem/tinha o mesmo botão de salvar, porém, deveria haver funções diferentes designadas ao mesmo, pois quando fosse acionado pelo nova nota deveria salvar os dados e criar uma nota nova, já quando acionado pelo editar, deveria sobrescrever os dados na mesma posição da nota aberta e não criar uma nova nota. Porém, a remoção ou alteração do evento associado ao mesmo botão não deu certo.
-
-

Soluções:
- P1 : Utilização do LocalStorage no navegador +  comandos em JSON. O localStorage salva os dados internamente no navegador e é possível acessá-los e recuperá-los. Como foi necessário a utilização de um vetor, acabou sendo necessário a conversão dos dados em uma string JSON, pois o navegador não sabe interpretar tal informação e com essa conversão é possível desfazê-la posteriormente retornando as informações ao seu tipo original. 

- P3 : Criei dois botões iguais esteticamente, mas cada um com o seu direcionamento correto e quando o usuário acessa o modal pelo "nova nota" a função atribuída já oculta o botão de editar e disponibiliza o de salvar, já quando acessado pelo "editar nota" a função oculta o botão de salvar e disponibiliza o de editar.

Adicional:
 Funções desenvolvidas: