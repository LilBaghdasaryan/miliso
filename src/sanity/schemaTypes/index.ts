import { type SchemaTypeDefinition } from 'sanity'
import { productCategory } from './schemas/product-category'
import { promotionCampaign } from './schemas/promotion-campaign'
import { promotionCode } from './schemas/promotion-codes'
import { product } from './schemas/product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productCategory, promotionCampaign, promotionCode, product],
}
