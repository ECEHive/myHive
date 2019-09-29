/*
 {
            "id": 1,
            "createdAt": 1569554195,
            "updatedAt": 1569540297,
            "ItemName": "DemoItem0",
            "ItemLabel": "ItemLabel33333",
            "ItemLabelID": "ICLS0001",
            "ItemCountingType": 0,
            "ItemCount": 0,
            "ItemCountInStock": 0,
            "ItemDescription": "",
            "ItemDatasheet": "",
            "ItemCheckoutMode": 0,
            "ItemParameters": ""
        }
 */
export interface IHiveInventoryItemClass {
  id: number
  createdAt: number
  updatedAt: number
  ItemName: string
  ItemLabel: string
  ItemLabelID: string
  ItemCountingType: number
  ItemCount: number
  ItemCountInStock: number
  ItemDescription: string
  ItemDatasheet: string
  ItemCheckoutMode: number
  ItemParameters: string
  ItemTags: IHiveInventoryItemClassTag[]
}

export interface IHiveInventoryItemClassTag {
  id: number
  TagName: string
}