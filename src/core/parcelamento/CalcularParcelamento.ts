import { QTDE_MAX_PARCELAS, TAXAS_JUROS_MENSAL } from "../constants";

import Parcelamento from "./Parcelamento";

export default class CalcularParcelamento {
  executar(
    valor: number,
    qtdeParcelas: number = QTDE_MAX_PARCELAS,
    taxaJuros: number = TAXAS_JUROS_MENSAL
  ): Parcelamento {
    if (qtdeParcelas < 2 || qtdeParcelas > QTDE_MAX_PARCELAS) {
      throw new Error(`Quantidade de parcelas deve 2 e ${QTDE_MAX_PARCELAS}`);
    }
    const totalComJuros = this.calcularJurosCompostos(
      valor,
      taxaJuros,
      qtdeParcelas
    );

    return {
      valorParcela: this.comDuasCasasDecimais(totalComJuros / qtdeParcelas),
      valorTotal: this.comDuasCasasDecimais(totalComJuros),
      qtdeParcelas,
      taxaJuros,
    };
  }
  private calcularJurosCompostos(
    valorTotal: number,
    taxaJuros: number,
    qtdeParcelas: number
  ) {
    return valorTotal * Math.pow(1 + TAXAS_JUROS_MENSAL, qtdeParcelas);
  }

  private comDuasCasasDecimais(valor: number): number {
    return Math.round(valor * 100) / 100;
  }
}
