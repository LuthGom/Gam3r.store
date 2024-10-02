import Especificacoes from "./Especificacoes";
import Precificavel from "./Precificavael";

export default interface Produto  extends Precificavel{
  id: number;
  nome: string;
  descricao: string;
  marca: string;
  modelo: string;
  imagem: string;
  nota: number;
  videoReview: string;
  tags: string[];
  Especificacoes: Especificacoes
}
