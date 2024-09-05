import { PartnerType } from "src/partner/PartnerType"

export interface SaleType {
  id?: number
  dateSale: string

  partnerId: number  
  
  typeSale: string //Orçamento - Pedido
  status: string //Aberto - Fechado
  typePayment: number //1 - À Vista / 2 - A Prazo / 3 - Duplicata
  statusPayment: number //1 - À Vencer / 2 - Inadiplente / 3 - Quitado
  
}