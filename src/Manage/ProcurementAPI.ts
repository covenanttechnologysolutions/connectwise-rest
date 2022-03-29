/* This file was auto-generated, do not manually edit. */
import Manage from '../Manage'
import { components } from '../ManageTypes'
import { CommonParameters, CWMOptions } from '../ManageAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/** {@link AdjustmentDetail} */
export type AdjustmentDetail = schemas['AdjustmentDetail']
/** {@link AdjustmentType} */
export type AdjustmentType = schemas['AdjustmentType']
/** {@link AdjustmentTypeInfo} */
export type AdjustmentTypeInfo = schemas['AdjustmentTypeInfo']
/** {@link BulkResult} */
export type BulkResult = schemas['BulkResult']
/** {@link CatalogComponent} */
export type CatalogComponent = schemas['CatalogComponent']
/** {@link CatalogInventory} */
export type CatalogInventory = schemas['CatalogInventory']
/** {@link CatalogItem} */
export type CatalogItem = schemas['CatalogItem']
/** {@link CatalogItemInfo} */
export type CatalogItemInfo = schemas['CatalogItemInfo']
/** {@link CatalogPricing} */
export type CatalogPricing = schemas['CatalogPricing']
/** {@link Category} */
export type Category = schemas['Category']
/** {@link CategoryInfo} */
export type CategoryInfo = schemas['CategoryInfo']
/** {@link Conversion} */
export type Conversion = schemas['Conversion']
/** {@link Count} */
export type Count = schemas['Count']
/** {@link IdCollection} */
export type IdCollection = schemas['IdCollection']
/** {@link InventoryOnHand} */
export type InventoryOnHand = schemas['InventoryOnHand']
/** {@link LegacySubCategory} */
export type LegacySubCategory = schemas['LegacySubCategory']
/** {@link LegacySubCategoryInfo} */
export type LegacySubCategoryInfo = schemas['LegacySubCategoryInfo']
/** {@link Manufacturer} */
export type Manufacturer = schemas['Manufacturer']
/** {@link ManufacturerInfo} */
export type ManufacturerInfo = schemas['ManufacturerInfo']
/** {@link MinimumStockByWarehouse} */
export type MinimumStockByWarehouse = schemas['MinimumStockByWarehouse']
/** {@link OnHandSerialNumber} */
export type OnHandSerialNumber = schemas['OnHandSerialNumber']
/** {@link PatchOperation} */
export type PatchOperation = schemas['PatchOperation']
/** {@link PricingBreak} */
export type PricingBreak = schemas['PricingBreak']
/** {@link PricingDetail} */
export type PricingDetail = schemas['PricingDetail']
/** {@link PricingSchedule} */
export type PricingSchedule = schemas['PricingSchedule']
/** {@link ProcurementAdjustment} */
export type ProcurementAdjustment = schemas['ProcurementAdjustment']
/** {@link ProcurementSetting} */
export type ProcurementSetting = schemas['ProcurementSetting']
/** {@link ProductComponent} */
export type ProductComponent = schemas['ProductComponent']
/** {@link ProductDetach} */
export type ProductDetach = schemas['ProductDetach']
/** {@link ProductItem} */
export type ProductItem = schemas['ProductItem']
/** {@link ProductPickingShippingDetail} */
export type ProductPickingShippingDetail = schemas['ProductPickingShippingDetail']
/** {@link ProductType} */
export type ProductType = schemas['ProductType']
/** {@link ProductTypeInfo} */
export type ProductTypeInfo = schemas['ProductTypeInfo']
/** {@link PurchaseOrder} */
export type PurchaseOrder = schemas['PurchaseOrder']
/** {@link PurchaseOrderLineItem} */
export type PurchaseOrderLineItem = schemas['PurchaseOrderLineItem']
/** {@link PurchaseOrderStatus} */
export type PurchaseOrderStatus = schemas['PurchaseOrderStatus']
/** {@link PurchaseOrderStatusEmailTemplate} */
export type PurchaseOrderStatusEmailTemplate = schemas['PurchaseOrderStatusEmailTemplate']
/** {@link PurchaseOrderStatusNotification} */
export type PurchaseOrderStatusNotification = schemas['PurchaseOrderStatusNotification']
/** {@link PurchasingDemand} */
export type PurchasingDemand = schemas['PurchasingDemand']
/** {@link RmaAction} */
export type RmaAction = schemas['RmaAction']
/** {@link RmaActionInfo} */
export type RmaActionInfo = schemas['RmaActionInfo']
/** {@link RmaDisposition} */
export type RmaDisposition = schemas['RmaDisposition']
/** {@link RmaDispositionInfo} */
export type RmaDispositionInfo = schemas['RmaDispositionInfo']
/** {@link RmaStatus} */
export type RmaStatus = schemas['RmaStatus']
/** {@link RmaStatusEmailTemplate} */
export type RmaStatusEmailTemplate = schemas['RmaStatusEmailTemplate']
/** {@link RmaStatusInfo} */
export type RmaStatusInfo = schemas['RmaStatusInfo']
/** {@link RmaStatusNotification} */
export type RmaStatusNotification = schemas['RmaStatusNotification']
/** {@link RmaTag} */
export type RmaTag = schemas['RmaTag']
/** {@link ShipmentMethod} */
export type ShipmentMethod = schemas['ShipmentMethod']
/** {@link ShipmentMethodInfo} */
export type ShipmentMethodInfo = schemas['ShipmentMethodInfo']
/** {@link SubCategory} */
export type SubCategory = schemas['SubCategory']
/** {@link SubCategoryInfo} */
export type SubCategoryInfo = schemas['SubCategoryInfo']
/** {@link UnitOfMeasure} */
export type UnitOfMeasure = schemas['UnitOfMeasure']
/** {@link Usage} */
export type Usage = schemas['Usage']
/** {@link Warehouse} */
export type Warehouse = schemas['Warehouse']
/** {@link WarehouseBin} */
export type WarehouseBin = schemas['WarehouseBin']
/** {@link WarehouseBinInfo} */
export type WarehouseBinInfo = schemas['WarehouseBinInfo']
/** {@link WarehouseInfo} */
export type WarehouseInfo = schemas['WarehouseInfo']

/**
 * @module ProcurementAPI
 */

/**
 * Procurement module
 * @public
 */
export class ProcurementAPI extends Manage {
  constructor(props: CWMOptions) {
    super(props)
  }

  getProcurementAdjustments(params: CommonParameters = {}): Promise<Array<ProcurementAdjustment>> {
    return this.request({
      path: `/procurement/adjustments`,
      method: 'get',
      params,
    })
  }

  postProcurementAdjustments(adjustment: ProcurementAdjustment): Promise<ProcurementAdjustment> {
    return this.request({
      path: `/procurement/adjustments`,
      method: 'post',
      data: adjustment,
    })
  }

  getProcurementAdjustmentsById(
    id: number,
    params: CommonParameters = {},
  ): Promise<ProcurementAdjustment> {
    return this.request({
      path: `/procurement/adjustments/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementAdjustmentsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/adjustments/${id}`,
      method: 'delete',
    })
  }

  putProcurementAdjustmentsById(
    id: number,
    adjustment: ProcurementAdjustment,
  ): Promise<ProcurementAdjustment> {
    return this.request({
      path: `/procurement/adjustments/${id}`,
      method: 'put',
      data: adjustment,
    })
  }

  patchProcurementAdjustmentsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ProcurementAdjustment> {
    return this.request({
      path: `/procurement/adjustments/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementAdjustmentsByParentIdDetails(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<AdjustmentDetail>> {
    return this.request({
      path: `/procurement/adjustments/${parentId}/details`,
      method: 'get',
      params,
    })
  }

  postProcurementAdjustmentsByParentIdDetails(
    parentId: number,
    adjustmentDetail: AdjustmentDetail,
  ): Promise<AdjustmentDetail> {
    return this.request({
      path: `/procurement/adjustments/${parentId}/details`,
      method: 'post',
      data: adjustmentDetail,
    })
  }

  getProcurementAdjustmentsByParentIdDetailsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<AdjustmentDetail> {
    return this.request({
      path: `/procurement/adjustments/${parentId}/details/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementAdjustmentsByParentIdDetailsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/adjustments/${parentId}/details/${id}`,
      method: 'delete',
    })
  }

  getProcurementAdjustmentsByParentIdDetailsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/procurement/adjustments/${parentId}/details/count`,
      method: 'get',
      params,
    })
  }

  getProcurementAdjustmentsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/adjustments/count`,
      method: 'get',
      params,
    })
  }

  getProcurementAdjustmentsTypes(params: CommonParameters = {}): Promise<Array<AdjustmentType>> {
    return this.request({
      path: `/procurement/adjustments/types`,
      method: 'get',
      params,
    })
  }

  postProcurementAdjustmentsTypes(adjustmentTypes: AdjustmentType): Promise<AdjustmentType> {
    return this.request({
      path: `/procurement/adjustments/types`,
      method: 'post',
      data: adjustmentTypes,
    })
  }

  getProcurementAdjustmentsTypesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<AdjustmentType> {
    return this.request({
      path: `/procurement/adjustments/types/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementAdjustmentsTypesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/adjustments/types/${id}`,
      method: 'delete',
    })
  }

  putProcurementAdjustmentsTypesById(
    id: number,
    adjustmentTypes: AdjustmentType,
  ): Promise<AdjustmentType> {
    return this.request({
      path: `/procurement/adjustments/types/${id}`,
      method: 'put',
      data: adjustmentTypes,
    })
  }

  patchProcurementAdjustmentsTypesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<AdjustmentType> {
    return this.request({
      path: `/procurement/adjustments/types/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementAdjustmentsTypesByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<AdjustmentTypeInfo> {
    return this.request({
      path: `/procurement/adjustments/types/${id}/info`,
      method: 'get',
      params,
    })
  }

  getProcurementAdjustmentsTypesByIdUsages(
    id: number,
    params: CommonParameters = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/procurement/adjustments/types/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getProcurementAdjustmentsTypesByIdUsagesList(
    id: number,
    params: CommonParameters = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/procurement/adjustments/types/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getProcurementAdjustmentsTypesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/adjustments/types/count`,
      method: 'get',
      params,
    })
  }

  getProcurementAdjustmentsTypesInfo(
    params: CommonParameters = {},
  ): Promise<Array<AdjustmentTypeInfo>> {
    return this.request({
      path: `/procurement/adjustments/types/info`,
      method: 'get',
      params,
    })
  }

  getProcurementAdjustmentsTypesInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/adjustments/types/info/count`,
      method: 'get',
      params,
    })
  }

  getProcurementCatalog(params: CommonParameters = {}): Promise<Array<CatalogItem>> {
    return this.request({
      path: `/procurement/catalog`,
      method: 'get',
      params,
    })
  }

  postProcurementCatalog(catalogItem: CatalogItem): Promise<CatalogItem> {
    return this.request({
      path: `/procurement/catalog`,
      method: 'post',
      data: catalogItem,
    })
  }

  getProcurementCatalogByCatalogItemIdentifierQuantityOnHand(
    catalogItemIdentifier: string,
    warehouseBinId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/procurement/catalog/${catalogItemIdentifier}/quantityOnHand`,
      method: 'get',
      params,
    })
  }

  getProcurementCatalogById(id: number, params: CommonParameters = {}): Promise<CatalogItem> {
    return this.request({
      path: `/procurement/catalog/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementCatalogById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/catalog/${id}`,
      method: 'delete',
    })
  }

  putProcurementCatalogById(id: number, catalogItem: CatalogItem): Promise<CatalogItem> {
    return this.request({
      path: `/procurement/catalog/${id}`,
      method: 'put',
      data: catalogItem,
    })
  }

  patchProcurementCatalogById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<CatalogItem> {
    return this.request({
      path: `/procurement/catalog/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementCatalogByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<CatalogItemInfo> {
    return this.request({
      path: `/procurement/catalog/${id}/info`,
      method: 'get',
      params,
    })
  }

  postProcurementCatalogByIdPricing(
    id: number,
    catalogPricing: CatalogPricing,
  ): Promise<CatalogPricing> {
    return this.request({
      path: `/procurement/catalog/${id}/pricing`,
      method: 'post',
      data: catalogPricing,
    })
  }

  getProcurementCatalogByParentIdComponents(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<CatalogComponent>> {
    return this.request({
      path: `/procurement/catalog/${parentId}/components`,
      method: 'get',
      params,
    })
  }

  postProcurementCatalogByParentIdComponents(
    parentId: number,
    catalogComponent: CatalogComponent,
  ): Promise<CatalogComponent> {
    return this.request({
      path: `/procurement/catalog/${parentId}/components`,
      method: 'post',
      data: catalogComponent,
    })
  }

  getProcurementCatalogByParentIdComponentsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<CatalogComponent> {
    return this.request({
      path: `/procurement/catalog/${parentId}/components/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementCatalogByParentIdComponentsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/catalog/${parentId}/components/${id}`,
      method: 'delete',
    })
  }

  putProcurementCatalogByParentIdComponentsById(
    id: number,
    parentId: number,
    catalogComponent: CatalogComponent,
  ): Promise<CatalogComponent> {
    return this.request({
      path: `/procurement/catalog/${parentId}/components/${id}`,
      method: 'put',
      data: catalogComponent,
    })
  }

  patchProcurementCatalogByParentIdComponentsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<CatalogComponent> {
    return this.request({
      path: `/procurement/catalog/${parentId}/components/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementCatalogByParentIdComponentsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/procurement/catalog/${parentId}/components/count`,
      method: 'get',
      params,
    })
  }

  getProcurementCatalogByParentIdInventory(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<CatalogInventory>> {
    return this.request({
      path: `/procurement/catalog/${parentId}/inventory`,
      method: 'get',
      params,
    })
  }

  getProcurementCatalogByParentIdInventoryById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<CatalogInventory> {
    return this.request({
      path: `/procurement/catalog/${parentId}/inventory/${id}`,
      method: 'get',
      params,
    })
  }

  getProcurementCatalogByParentIdInventoryCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/procurement/catalog/${parentId}/inventory/count`,
      method: 'get',
      params,
    })
  }

  getProcurementCatalogByParentIdMinimumStockByWarehouse(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<MinimumStockByWarehouse>> {
    return this.request({
      path: `/procurement/catalog/${parentId}/minimumStockByWarehouse`,
      method: 'get',
      params,
    })
  }

  postProcurementCatalogByParentIdMinimumStockByWarehouse(
    parentId: number,
    minimumStockByWarehouse: MinimumStockByWarehouse,
  ): Promise<MinimumStockByWarehouse> {
    return this.request({
      path: `/procurement/catalog/${parentId}/minimumStockByWarehouse`,
      method: 'post',
      data: minimumStockByWarehouse,
    })
  }

  getProcurementCatalogByParentIdMinimumStockByWarehouseById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<MinimumStockByWarehouse> {
    return this.request({
      path: `/procurement/catalog/${parentId}/minimumStockByWarehouse/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementCatalogByParentIdMinimumStockByWarehouseById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/catalog/${parentId}/minimumStockByWarehouse/${id}`,
      method: 'delete',
    })
  }

  putProcurementCatalogByParentIdMinimumStockByWarehouseById(
    id: number,
    parentId: number,
    minimumStockByWarehouse: MinimumStockByWarehouse,
  ): Promise<MinimumStockByWarehouse> {
    return this.request({
      path: `/procurement/catalog/${parentId}/minimumStockByWarehouse/${id}`,
      method: 'put',
      data: minimumStockByWarehouse,
    })
  }

  patchProcurementCatalogByParentIdMinimumStockByWarehouseById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<MinimumStockByWarehouse> {
    return this.request({
      path: `/procurement/catalog/${parentId}/minimumStockByWarehouse/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementCatalogByParentIdMinimumStockByWarehouseCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/procurement/catalog/${parentId}/minimumStockByWarehouse/count`,
      method: 'get',
      params,
    })
  }

  getProcurementCatalogCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/catalog/count`,
      method: 'get',
      params,
    })
  }

  getProcurementCatalogInfo(params: CommonParameters = {}): Promise<Array<CatalogItemInfo>> {
    return this.request({
      path: `/procurement/catalog/info`,
      method: 'get',
      params,
    })
  }

  getProcurementCatalogInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/catalog/info/count`,
      method: 'get',
      params,
    })
  }

  getProcurementCategories(params: CommonParameters = {}): Promise<Array<Category>> {
    return this.request({
      path: `/procurement/categories`,
      method: 'get',
      params,
    })
  }

  postProcurementCategories(category: Category): Promise<Category> {
    return this.request({
      path: `/procurement/categories`,
      method: 'post',
      data: category,
    })
  }

  getProcurementCategoriesById(id: number, params: CommonParameters = {}): Promise<Category> {
    return this.request({
      path: `/procurement/categories/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementCategoriesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/categories/${id}`,
      method: 'delete',
    })
  }

  putProcurementCategoriesById(id: number, category: Category): Promise<Category> {
    return this.request({
      path: `/procurement/categories/${id}`,
      method: 'put',
      data: category,
    })
  }

  patchProcurementCategoriesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<Category> {
    return this.request({
      path: `/procurement/categories/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementCategoriesByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<CategoryInfo> {
    return this.request({
      path: `/procurement/categories/${id}/info`,
      method: 'get',
      params,
    })
  }

  getProcurementCategoriesByParentIdSubcategories(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<LegacySubCategory>> {
    return this.request({
      path: `/procurement/categories/${parentId}/subcategories/`,
      method: 'get',
      params,
    })
  }

  postProcurementCategoriesByParentIdSubcategories(
    parentId: number,
    subCategory: LegacySubCategory,
  ): Promise<LegacySubCategory> {
    return this.request({
      path: `/procurement/categories/${parentId}/subcategories/`,
      method: 'post',
      data: subCategory,
    })
  }

  getProcurementCategoriesByParentIdSubcategoriesById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<LegacySubCategory> {
    return this.request({
      path: `/procurement/categories/${parentId}/subcategories/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementCategoriesByParentIdSubcategoriesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/categories/${parentId}/subcategories/${id}`,
      method: 'delete',
    })
  }

  putProcurementCategoriesByParentIdSubcategoriesById(
    id: number,
    parentId: number,
    subCategory: LegacySubCategory,
  ): Promise<LegacySubCategory> {
    return this.request({
      path: `/procurement/categories/${parentId}/subcategories/${id}`,
      method: 'put',
      data: subCategory,
    })
  }

  patchProcurementCategoriesByParentIdSubcategoriesById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<LegacySubCategory> {
    return this.request({
      path: `/procurement/categories/${parentId}/subcategories/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementCategoriesByParentIdSubcategoriesByIdInfo(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<LegacySubCategoryInfo> {
    return this.request({
      path: `/procurement/categories/${parentId}/subcategories/${id}/info`,
      method: 'get',
      params,
    })
  }

  getProcurementCategoriesByParentIdSubcategoriesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/procurement/categories/${parentId}/subcategories/count`,
      method: 'get',
      params,
    })
  }

  getProcurementCategoriesByParentIdSubcategoriesInfo(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<LegacySubCategoryInfo>> {
    return this.request({
      path: `/procurement/categories/${parentId}/subcategories/info`,
      method: 'get',
      params,
    })
  }

  getProcurementCategoriesByParentIdSubcategoriesInfoCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/procurement/categories/${parentId}/subcategories/info/count`,
      method: 'get',
      params,
    })
  }

  getProcurementCategoriesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/categories/count`,
      method: 'get',
      params,
    })
  }

  getProcurementCategoriesInfo(params: CommonParameters = {}): Promise<Array<CategoryInfo>> {
    return this.request({
      path: `/procurement/categories/info`,
      method: 'get',
      params,
    })
  }

  getProcurementCategoriesInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/categories/info/count`,
      method: 'get',
      params,
    })
  }

  getProcurementManufacturers(params: CommonParameters = {}): Promise<Array<Manufacturer>> {
    return this.request({
      path: `/procurement/manufacturers`,
      method: 'get',
      params,
    })
  }

  postProcurementManufacturers(manufacturer: Manufacturer): Promise<Manufacturer> {
    return this.request({
      path: `/procurement/manufacturers`,
      method: 'post',
      data: manufacturer,
    })
  }

  getProcurementManufacturersById(
    id: number,
    params: CommonParameters = {},
  ): Promise<Manufacturer> {
    return this.request({
      path: `/procurement/manufacturers/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementManufacturersById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/manufacturers/${id}`,
      method: 'delete',
    })
  }

  putProcurementManufacturersById(id: number, manufacturer: Manufacturer): Promise<Manufacturer> {
    return this.request({
      path: `/procurement/manufacturers/${id}`,
      method: 'put',
      data: manufacturer,
    })
  }

  patchProcurementManufacturersById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<Manufacturer> {
    return this.request({
      path: `/procurement/manufacturers/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementManufacturersByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<ManufacturerInfo> {
    return this.request({
      path: `/procurement/manufacturers/${id}/info`,
      method: 'get',
      params,
    })
  }

  getProcurementManufacturersCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/manufacturers/count`,
      method: 'get',
      params,
    })
  }

  getProcurementManufacturersCountInfo(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/manufacturers/count/info`,
      method: 'get',
      params,
    })
  }

  getProcurementManufacturersInfo(params: CommonParameters = {}): Promise<Array<ManufacturerInfo>> {
    return this.request({
      path: `/procurement/manufacturers/info`,
      method: 'get',
      params,
    })
  }

  getProcurementOnhandserialnumbers(
    params: CommonParameters = {},
  ): Promise<Array<OnHandSerialNumber>> {
    return this.request({
      path: `/procurement/onhandserialnumbers`,
      method: 'get',
      params,
    })
  }

  getProcurementOnhandserialnumbersById(
    id: number,
    params: CommonParameters = {},
  ): Promise<OnHandSerialNumber> {
    return this.request({
      path: `/procurement/onhandserialnumbers/${id}`,
      method: 'get',
      params,
    })
  }

  getProcurementOnhandserialnumbersCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/onhandserialnumbers/count`,
      method: 'get',
      params,
    })
  }

  getProcurementPricingschedules(params: CommonParameters = {}): Promise<Array<PricingSchedule>> {
    return this.request({
      path: `/procurement/pricingschedules`,
      method: 'get',
      params,
    })
  }

  postProcurementPricingschedules(pricingSchedule: PricingSchedule): Promise<PricingSchedule> {
    return this.request({
      path: `/procurement/pricingschedules`,
      method: 'post',
      data: pricingSchedule,
    })
  }

  getProcurementPricingschedulesByGrandparentIdDetailsByParentIdBreaks(
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<Array<PricingBreak>> {
    return this.request({
      path: `/procurement/pricingschedules/${grandparentId}/details/${parentId}/breaks`,
      method: 'get',
      params,
    })
  }

  postProcurementPricingschedulesByGrandparentIdDetailsByParentIdBreaks(
    parentId: number,
    grandparentId: number,
    pricingBreak: PricingBreak,
  ): Promise<PricingBreak> {
    return this.request({
      path: `/procurement/pricingschedules/${grandparentId}/details/${parentId}/breaks`,
      method: 'post',
      data: pricingBreak,
    })
  }

  getProcurementPricingschedulesByGrandparentIdDetailsByParentIdBreaksById(
    id: number,
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<PricingBreak> {
    return this.request({
      path: `/procurement/pricingschedules/${grandparentId}/details/${parentId}/breaks/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementPricingschedulesByGrandparentIdDetailsByParentIdBreaksById(
    id: number,
    parentId: number,
    grandparentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/pricingschedules/${grandparentId}/details/${parentId}/breaks/${id}`,
      method: 'delete',
    })
  }

  putProcurementPricingschedulesByGrandparentIdDetailsByParentIdBreaksById(
    id: number,
    parentId: number,
    grandparentId: number,
    pricingBreak: PricingBreak,
  ): Promise<PricingBreak> {
    return this.request({
      path: `/procurement/pricingschedules/${grandparentId}/details/${parentId}/breaks/${id}`,
      method: 'put',
      data: pricingBreak,
    })
  }

  patchProcurementPricingschedulesByGrandparentIdDetailsByParentIdBreaksById(
    id: number,
    parentId: number,
    grandparentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<PricingBreak> {
    return this.request({
      path: `/procurement/pricingschedules/${grandparentId}/details/${parentId}/breaks/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementPricingschedulesByGrandparentIdDetailsByParentIdBreaksCount(
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/procurement/pricingschedules/${grandparentId}/details/${parentId}/breaks/count`,
      method: 'get',
      params,
    })
  }

  getProcurementPricingschedulesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<PricingSchedule> {
    return this.request({
      path: `/procurement/pricingschedules/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementPricingschedulesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/pricingschedules/${id}`,
      method: 'delete',
    })
  }

  putProcurementPricingschedulesById(
    id: number,
    pricingSchedule: PricingSchedule,
  ): Promise<PricingSchedule> {
    return this.request({
      path: `/procurement/pricingschedules/${id}`,
      method: 'put',
      data: pricingSchedule,
    })
  }

  patchProcurementPricingschedulesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<PricingSchedule> {
    return this.request({
      path: `/procurement/pricingschedules/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementPricingschedulesByParentIdDetails(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<PricingDetail>> {
    return this.request({
      path: `/procurement/pricingschedules/${parentId}/details`,
      method: 'get',
      params,
    })
  }

  postProcurementPricingschedulesByParentIdDetails(
    parentId: number,
    pricingDetail: PricingDetail,
  ): Promise<PricingDetail> {
    return this.request({
      path: `/procurement/pricingschedules/${parentId}/details`,
      method: 'post',
      data: pricingDetail,
    })
  }

  getProcurementPricingschedulesByParentIdDetailsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<PricingDetail> {
    return this.request({
      path: `/procurement/pricingschedules/${parentId}/details/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementPricingschedulesByParentIdDetailsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/pricingschedules/${parentId}/details/${id}`,
      method: 'delete',
    })
  }

  putProcurementPricingschedulesByParentIdDetailsById(
    id: number,
    parentId: number,
    pricingDetail: PricingDetail,
  ): Promise<PricingDetail> {
    return this.request({
      path: `/procurement/pricingschedules/${parentId}/details/${id}`,
      method: 'put',
      data: pricingDetail,
    })
  }

  patchProcurementPricingschedulesByParentIdDetailsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<PricingDetail> {
    return this.request({
      path: `/procurement/pricingschedules/${parentId}/details/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementPricingschedulesByParentIdDetailsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/procurement/pricingschedules/${parentId}/details/count`,
      method: 'get',
      params,
    })
  }

  getProcurementPricingschedulesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/pricingschedules/count`,
      method: 'get',
      params,
    })
  }

  getProcurementProducts(params: CommonParameters = {}): Promise<Array<ProductItem>> {
    return this.request({
      path: `/procurement/products`,
      method: 'get',
      params,
    })
  }

  postProcurementProducts(productItem: ProductItem): Promise<ProductItem> {
    return this.request({
      path: `/procurement/products`,
      method: 'post',
      data: productItem,
    })
  }

  getProcurementProductsById(id: number, params: CommonParameters = {}): Promise<ProductItem> {
    return this.request({
      path: `/procurement/products/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementProductsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/products/${id}`,
      method: 'delete',
    })
  }

  putProcurementProductsById(id: number, productItem: ProductItem): Promise<ProductItem> {
    return this.request({
      path: `/procurement/products/${id}`,
      method: 'put',
      data: productItem,
    })
  }

  patchProcurementProductsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ProductItem> {
    return this.request({
      path: `/procurement/products/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  postProcurementProductsByIdDetach(id: number, detach: ProductDetach): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/products/${id}/detach`,
      method: 'post',
      data: detach,
    })
  }

  getProcurementProductsByParentIdComponents(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<ProductComponent>> {
    return this.request({
      path: `/procurement/products/${parentId}/components`,
      method: 'get',
      params,
    })
  }

  postProcurementProductsByParentIdComponents(
    parentId: number,
    productComponent: ProductComponent,
  ): Promise<Array<ProductComponent>> {
    return this.request({
      path: `/procurement/products/${parentId}/components`,
      method: 'post',
      data: productComponent,
    })
  }

  getProcurementProductsByParentIdComponentsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<ProductComponent>> {
    return this.request({
      path: `/procurement/products/${parentId}/components/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementProductsByParentIdComponentsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/products/${parentId}/components/${id}`,
      method: 'delete',
    })
  }

  putProcurementProductsByParentIdComponentsById(
    id: number,
    parentId: number,
    productComponent: ProductComponent,
  ): Promise<Array<ProductComponent>> {
    return this.request({
      path: `/procurement/products/${parentId}/components/${id}`,
      method: 'put',
      data: productComponent,
    })
  }

  patchProcurementProductsByParentIdComponentsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<Array<ProductComponent>> {
    return this.request({
      path: `/procurement/products/${parentId}/components/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementProductsByParentIdComponentsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/procurement/products/${parentId}/components/count`,
      method: 'get',
      params,
    })
  }

  getProcurementProductsByParentIdPickingShippingDetails(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<ProductPickingShippingDetail>> {
    return this.request({
      path: `/procurement/products/${parentId}/pickingShippingDetails`,
      method: 'get',
      params,
    })
  }

  postProcurementProductsByParentIdPickingShippingDetails(
    parentId: number,
    productPickingShippingDetails: ProductPickingShippingDetail,
  ): Promise<Array<ProductPickingShippingDetail>> {
    return this.request({
      path: `/procurement/products/${parentId}/pickingShippingDetails`,
      method: 'post',
      data: productPickingShippingDetails,
    })
  }

  getProcurementProductsByParentIdPickingShippingDetailsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<ProductPickingShippingDetail>> {
    return this.request({
      path: `/procurement/products/${parentId}/pickingShippingDetails/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementProductsByParentIdPickingShippingDetailsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/products/${parentId}/pickingShippingDetails/${id}`,
      method: 'delete',
    })
  }

  putProcurementProductsByParentIdPickingShippingDetailsById(
    id: number,
    parentId: number,
    productPickingShippingDetails: ProductPickingShippingDetail,
  ): Promise<Array<ProductPickingShippingDetail>> {
    return this.request({
      path: `/procurement/products/${parentId}/pickingShippingDetails/${id}`,
      method: 'put',
      data: productPickingShippingDetails,
    })
  }

  patchProcurementProductsByParentIdPickingShippingDetailsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<Array<ProductPickingShippingDetail>> {
    return this.request({
      path: `/procurement/products/${parentId}/pickingShippingDetails/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementProductsByParentIdPickingShippingDetailsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/procurement/products/${parentId}/pickingShippingDetails/count`,
      method: 'get',
      params,
    })
  }

  getProcurementProductsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/products/count`,
      method: 'get',
      params,
    })
  }

  getProcurementPurchaseorders(params: CommonParameters = {}): Promise<Array<PurchaseOrder>> {
    return this.request({
      path: `/procurement/purchaseorders`,
      method: 'get',
      params,
    })
  }

  postProcurementPurchaseorders(purchaseOrder: PurchaseOrder): Promise<PurchaseOrder> {
    return this.request({
      path: `/procurement/purchaseorders`,
      method: 'post',
      data: purchaseOrder,
    })
  }

  getProcurementPurchaseordersById(
    id: number,
    params: CommonParameters = {},
  ): Promise<PurchaseOrder> {
    return this.request({
      path: `/procurement/purchaseorders/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementPurchaseordersById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/purchaseorders/${id}`,
      method: 'delete',
    })
  }

  putProcurementPurchaseordersById(
    id: number,
    purchaseOrder: PurchaseOrder,
  ): Promise<PurchaseOrder> {
    return this.request({
      path: `/procurement/purchaseorders/${id}`,
      method: 'put',
      data: purchaseOrder,
    })
  }

  patchProcurementPurchaseordersById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<PurchaseOrder> {
    return this.request({
      path: `/procurement/purchaseorders/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementPurchaseordersByParentIdLineitems(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<PurchaseOrderLineItem>> {
    return this.request({
      path: `/procurement/purchaseorders/${parentId}/lineitems`,
      method: 'get',
      params,
    })
  }

  postProcurementPurchaseordersByParentIdLineitems(
    parentId: number,
    purchaseOrderLineItem: PurchaseOrderLineItem,
  ): Promise<PurchaseOrderLineItem> {
    return this.request({
      path: `/procurement/purchaseorders/${parentId}/lineitems`,
      method: 'post',
      data: purchaseOrderLineItem,
    })
  }

  getProcurementPurchaseordersByParentIdLineitemsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<PurchaseOrderLineItem> {
    return this.request({
      path: `/procurement/purchaseorders/${parentId}/lineitems/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementPurchaseordersByParentIdLineitemsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/purchaseorders/${parentId}/lineitems/${id}`,
      method: 'delete',
    })
  }

  putProcurementPurchaseordersByParentIdLineitemsById(
    id: number,
    parentId: number,
    purchaseOrderLineItem: PurchaseOrderLineItem,
  ): Promise<PurchaseOrderLineItem> {
    return this.request({
      path: `/procurement/purchaseorders/${parentId}/lineitems/${id}`,
      method: 'put',
      data: purchaseOrderLineItem,
    })
  }

  patchProcurementPurchaseordersByParentIdLineitemsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<PurchaseOrderLineItem> {
    return this.request({
      path: `/procurement/purchaseorders/${parentId}/lineitems/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  postProcurementPurchaseordersByParentIdLineitemsBulk(
    parentId: number,
    purchaseOrderLineItems: Array<PurchaseOrderLineItem>,
  ): Promise<BulkResult> {
    return this.request({
      path: `/procurement/purchaseorders/${parentId}/lineitems/bulk`,
      method: 'post',
      data: purchaseOrderLineItems,
    })
  }

  deleteProcurementPurchaseordersByParentIdLineitemsBulk(
    parentId: number,
    purchaseOrderLineItems: IdCollection,
  ): Promise<BulkResult> {
    return this.request({
      path: `/procurement/purchaseorders/${parentId}/lineitems/bulk`,
      method: 'delete',
      data: purchaseOrderLineItems,
    })
  }

  putProcurementPurchaseordersByParentIdLineitemsBulk(
    parentId: number,
    purchaseOrderLineItems: Array<PurchaseOrderLineItem>,
  ): Promise<BulkResult> {
    return this.request({
      path: `/procurement/purchaseorders/${parentId}/lineitems/bulk`,
      method: 'put',
      data: purchaseOrderLineItems,
    })
  }

  getProcurementPurchaseordersByParentIdLineitemsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/procurement/purchaseorders/${parentId}/lineitems/count`,
      method: 'get',
      params,
    })
  }

  getProcurementPurchaseordersCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/purchaseorders/count`,
      method: 'get',
      params,
    })
  }

  getProcurementPurchaseorderstatuses(
    params: CommonParameters = {},
  ): Promise<Array<PurchaseOrderStatus>> {
    return this.request({
      path: `/procurement/purchaseorderstatuses`,
      method: 'get',
      params,
    })
  }

  postProcurementPurchaseorderstatuses(
    poStatus: PurchaseOrderStatus,
  ): Promise<PurchaseOrderStatus> {
    return this.request({
      path: `/procurement/purchaseorderstatuses`,
      method: 'post',
      data: poStatus,
    })
  }

  getProcurementPurchaseorderstatusesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<PurchaseOrderStatus> {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementPurchaseorderstatusesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${id}`,
      method: 'delete',
    })
  }

  patchProcurementPurchaseorderstatusesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<PurchaseOrderStatus> {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  putProcurementPurchaseorderstatusesById(
    id: number,
    purchaseOrderStatus: PurchaseOrderStatus,
  ): Promise<PurchaseOrderStatus> {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${id}`,
      method: 'put',
      data: purchaseOrderStatus,
    })
  }

  getProcurementPurchaseorderstatusesByIdUsages(
    id: number,
    params: CommonParameters = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getProcurementPurchaseorderstatusesByIdUsagesList(
    id: number,
    params: CommonParameters = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getProcurementPurchaseorderstatusesByParentIdEmailtemplates(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<PurchaseOrderStatusEmailTemplate>> {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${parentId}/emailtemplates/`,
      method: 'get',
      params,
    })
  }

  postProcurementPurchaseorderstatusesByParentIdEmailtemplates(
    parentId: number,
    purchaseOrderStatusEmailTemplate: PurchaseOrderStatusEmailTemplate,
  ): Promise<PurchaseOrderStatusEmailTemplate> {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${parentId}/emailtemplates/`,
      method: 'post',
      data: purchaseOrderStatusEmailTemplate,
    })
  }

  getProcurementPurchaseorderstatusesByParentIdEmailtemplatesById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<PurchaseOrderStatusEmailTemplate> {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${parentId}/emailtemplates/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementPurchaseorderstatusesByParentIdEmailtemplatesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${parentId}/emailtemplates/${id}`,
      method: 'delete',
    })
  }

  putProcurementPurchaseorderstatusesByParentIdEmailtemplatesById(
    id: number,
    parentId: number,
    purchaseOrderStatusEmailTemplate: PurchaseOrderStatusEmailTemplate,
  ): Promise<PurchaseOrderStatusEmailTemplate> {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${parentId}/emailtemplates/${id}`,
      method: 'put',
      data: purchaseOrderStatusEmailTemplate,
    })
  }

  patchProcurementPurchaseorderstatusesByParentIdEmailtemplatesById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<PurchaseOrderStatusEmailTemplate> {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${parentId}/emailtemplates/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementPurchaseorderstatusesByParentIdEmailtemplatesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${parentId}/emailtemplates/count`,
      method: 'get',
      params,
    })
  }

  getProcurementPurchaseorderstatusesByParentIdNotifications(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<PurchaseOrderStatusNotification>> {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${parentId}/notifications`,
      method: 'get',
      params,
    })
  }

  postProcurementPurchaseorderstatusesByParentIdNotifications(
    parentId: number,
    purchaseOrderStatusNotification: PurchaseOrderStatusNotification,
  ): Promise<PurchaseOrderStatusNotification> {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${parentId}/notifications`,
      method: 'post',
      data: purchaseOrderStatusNotification,
    })
  }

  getProcurementPurchaseorderstatusesByParentIdNotificationsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<PurchaseOrderStatusNotification> {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${parentId}/notifications/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementPurchaseorderstatusesByParentIdNotificationsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${parentId}/notifications/${id}`,
      method: 'delete',
    })
  }

  putProcurementPurchaseorderstatusesByParentIdNotificationsById(
    id: number,
    parentId: number,
    purchaseOrderStatusNotification: PurchaseOrderStatusNotification,
  ): Promise<PurchaseOrderStatusNotification> {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${parentId}/notifications/${id}`,
      method: 'put',
      data: purchaseOrderStatusNotification,
    })
  }

  patchProcurementPurchaseorderstatusesByParentIdNotificationsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<PurchaseOrderStatusNotification> {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${parentId}/notifications/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementPurchaseorderstatusesByParentIdNotificationsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${parentId}/notifications/count`,
      method: 'get',
      params,
    })
  }

  getProcurementPurchaseorderstatusesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/purchaseorderstatuses/count`,
      method: 'get',
      params,
    })
  }

  postProcurementPurchasingDemands(purchasingDemand: PurchasingDemand): Promise<PurchasingDemand> {
    return this.request({
      path: `/procurement/purchasingDemands`,
      method: 'post',
      data: purchasingDemand,
    })
  }

  getProcurementRmaActions(params: CommonParameters = {}): Promise<Array<RmaAction>> {
    return this.request({
      path: `/procurement/rmaActions`,
      method: 'get',
      params,
    })
  }

  postProcurementRmaActions(rmaAction: RmaAction): Promise<RmaAction> {
    return this.request({
      path: `/procurement/rmaActions`,
      method: 'post',
      data: rmaAction,
    })
  }

  getProcurementRmaActionsById(id: number, params: CommonParameters = {}): Promise<RmaAction> {
    return this.request({
      path: `/procurement/rmaActions/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementRmaActionsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/rmaActions/${id}`,
      method: 'delete',
    })
  }

  putProcurementRmaActionsById(id: number, rmaAction: RmaAction): Promise<RmaAction> {
    return this.request({
      path: `/procurement/rmaActions/${id}`,
      method: 'put',
      data: rmaAction,
    })
  }

  patchProcurementRmaActionsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<RmaAction> {
    return this.request({
      path: `/procurement/rmaActions/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementRmaActionsByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<RmaActionInfo> {
    return this.request({
      path: `/procurement/rmaActions/${id}/info`,
      method: 'get',
      params,
    })
  }

  getProcurementRmaActionsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/rmaActions/count`,
      method: 'get',
      params,
    })
  }

  getProcurementRmaActionsInfo(params: CommonParameters = {}): Promise<Array<RmaActionInfo>> {
    return this.request({
      path: `/procurement/rmaActions/info`,
      method: 'get',
      params,
    })
  }

  getProcurementRmaActionsInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/rmaActions/info/count`,
      method: 'get',
      params,
    })
  }

  getProcurementRMADispositions(params: CommonParameters = {}): Promise<Array<RmaDisposition>> {
    return this.request({
      path: `/procurement/RMADispositions`,
      method: 'get',
      params,
    })
  }

  postProcurementRMADispositions(rmaDisposition: RmaDisposition): Promise<RmaDisposition> {
    return this.request({
      path: `/procurement/RMADispositions`,
      method: 'post',
      data: rmaDisposition,
    })
  }

  getProcurementRMADispositionsById(
    id: number,
    params: CommonParameters = {},
  ): Promise<RmaDisposition> {
    return this.request({
      path: `/procurement/RMADispositions/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementRMADispositionsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/RMADispositions/${id}`,
      method: 'delete',
    })
  }

  putProcurementRMADispositionsById(
    id: number,
    rmaDisposition: RmaDisposition,
  ): Promise<RmaDisposition> {
    return this.request({
      path: `/procurement/RMADispositions/${id}`,
      method: 'put',
      data: rmaDisposition,
    })
  }

  patchProcurementRMADispositionsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<RmaDisposition> {
    return this.request({
      path: `/procurement/RMADispositions/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementRMADispositionsByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<RmaDispositionInfo> {
    return this.request({
      path: `/procurement/RMADispositions/${id}/info`,
      method: 'get',
      params,
    })
  }

  getProcurementRMADispositionsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/RMADispositions/count`,
      method: 'get',
      params,
    })
  }

  getProcurementRMADispositionsInfo(
    params: CommonParameters = {},
  ): Promise<Array<RmaDispositionInfo>> {
    return this.request({
      path: `/procurement/RMADispositions/info`,
      method: 'get',
      params,
    })
  }

  getProcurementRMADispositionsInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/RMADispositions/info/count`,
      method: 'get',
      params,
    })
  }

  getProcurementRmaStatuses(params: CommonParameters = {}): Promise<Array<RmaStatus>> {
    return this.request({
      path: `/procurement/rmaStatuses`,
      method: 'get',
      params,
    })
  }

  postProcurementRmaStatuses(rmaStatus: RmaStatus): Promise<RmaStatus> {
    return this.request({
      path: `/procurement/rmaStatuses`,
      method: 'post',
      data: rmaStatus,
    })
  }

  getProcurementRmaStatusesById(id: number, params: CommonParameters = {}): Promise<RmaStatus> {
    return this.request({
      path: `/procurement/rmaStatuses/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementRmaStatusesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/rmaStatuses/${id}`,
      method: 'delete',
    })
  }

  putProcurementRmaStatusesById(id: number, rmaStatus: RmaStatus): Promise<RmaStatus> {
    return this.request({
      path: `/procurement/rmaStatuses/${id}`,
      method: 'put',
      data: rmaStatus,
    })
  }

  patchProcurementRmaStatusesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<RmaStatus> {
    return this.request({
      path: `/procurement/rmaStatuses/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementRmaStatusesByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<RmaStatusInfo> {
    return this.request({
      path: `/procurement/rmaStatuses/${id}/info`,
      method: 'get',
      params,
    })
  }

  getProcurementRmaStatusesByIdUsages(
    id: number,
    params: CommonParameters = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/procurement/rmaStatuses/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getProcurementRmaStatusesByIdUsagesList(
    id: number,
    params: CommonParameters = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/procurement/rmaStatuses/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  postProcurementRmaStatusesByParentIdEmailtemplates(
    parentId: number,
    rmaStatusEmailTemplate: RmaStatusEmailTemplate,
  ): Promise<RmaStatusEmailTemplate> {
    return this.request({
      path: `/procurement/rmaStatuses/${parentId}/emailtemplates/`,
      method: 'post',
      data: rmaStatusEmailTemplate,
    })
  }

  getProcurementRmaStatusesByParentIdEmailTemplates(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<RmaStatusEmailTemplate>> {
    return this.request({
      path: `/procurement/rmaStatuses/${parentId}/emailTemplates/`,
      method: 'get',
      params,
    })
  }

  getProcurementRmaStatusesByParentIdEmailtemplatesById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<RmaStatusEmailTemplate> {
    return this.request({
      path: `/procurement/rmaStatuses/${parentId}/emailtemplates/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementRmaStatusesByParentIdEmailtemplatesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/rmaStatuses/${parentId}/emailtemplates/${id}`,
      method: 'delete',
    })
  }

  putProcurementRmaStatusesByParentIdEmailtemplatesById(
    id: number,
    parentId: number,
    rmaStatusEmailTemplate: RmaStatusEmailTemplate,
  ): Promise<RmaStatusEmailTemplate> {
    return this.request({
      path: `/procurement/rmaStatuses/${parentId}/emailtemplates/${id}`,
      method: 'put',
      data: rmaStatusEmailTemplate,
    })
  }

  patchProcurementRmaStatusesByParentIdEmailtemplatesById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<RmaStatusEmailTemplate> {
    return this.request({
      path: `/procurement/rmaStatuses/${parentId}/emailtemplates/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementRmaStatusesByParentIdEmailtemplatesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/procurement/rmaStatuses/${parentId}/emailtemplates/count`,
      method: 'get',
      params,
    })
  }

  getProcurementRmaStatusesByParentIdNotifications(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<RmaStatusNotification>> {
    return this.request({
      path: `/procurement/rmaStatuses/${parentId}/notifications`,
      method: 'get',
      params,
    })
  }

  postProcurementRmaStatusesByParentIdNotifications(
    parentId: number,
    rmaStatusNotification: RmaStatusNotification,
  ): Promise<RmaStatusNotification> {
    return this.request({
      path: `/procurement/rmaStatuses/${parentId}/notifications`,
      method: 'post',
      data: rmaStatusNotification,
    })
  }

  getProcurementRmaStatusesByParentIdNotificationsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<RmaStatusNotification> {
    return this.request({
      path: `/procurement/rmaStatuses/${parentId}/notifications/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementRmaStatusesByParentIdNotificationsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/rmaStatuses/${parentId}/notifications/${id}`,
      method: 'delete',
    })
  }

  putProcurementRmaStatusesByParentIdNotificationsById(
    id: number,
    parentId: number,
    rmaStatusNotification: RmaStatusNotification,
  ): Promise<RmaStatusNotification> {
    return this.request({
      path: `/procurement/rmaStatuses/${parentId}/notifications/${id}`,
      method: 'put',
      data: rmaStatusNotification,
    })
  }

  patchProcurementRmaStatusesByParentIdNotificationsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<RmaStatusNotification> {
    return this.request({
      path: `/procurement/rmaStatuses/${parentId}/notifications/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementRmaStatusesByParentIdNotificationsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/procurement/rmaStatuses/${parentId}/notifications/count`,
      method: 'get',
      params,
    })
  }

  getProcurementRmaStatusesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/rmaStatuses/count`,
      method: 'get',
      params,
    })
  }

  getProcurementRmaStatusesInfo(params: CommonParameters = {}): Promise<Array<RmaStatusInfo>> {
    return this.request({
      path: `/procurement/rmaStatuses/info`,
      method: 'get',
      params,
    })
  }

  getProcurementRmaStatusesInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/rmaStatuses/info/count`,
      method: 'get',
      params,
    })
  }

  getProcurementRmaTags(params: CommonParameters = {}): Promise<Array<RmaTag>> {
    return this.request({
      path: `/procurement/rmaTags`,
      method: 'get',
      params,
    })
  }

  postProcurementRmaTags(rmaTag: RmaTag): Promise<RmaTag> {
    return this.request({
      path: `/procurement/rmaTags`,
      method: 'post',
      data: rmaTag,
    })
  }

  getProcurementRmaTagsById(id: number, params: CommonParameters = {}): Promise<RmaTag> {
    return this.request({
      path: `/procurement/rmaTags/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementRmaTagsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/rmaTags/${id}`,
      method: 'delete',
    })
  }

  putProcurementRmaTagsById(id: number, rmaTag: RmaTag): Promise<RmaTag> {
    return this.request({
      path: `/procurement/rmaTags/${id}`,
      method: 'put',
      data: rmaTag,
    })
  }

  patchProcurementRmaTagsById(id: number, patchOperations: Array<PatchOperation>): Promise<RmaTag> {
    return this.request({
      path: `/procurement/rmaTags/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementRmaTagsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/rmaTags/count`,
      method: 'get',
      params,
    })
  }

  getProcurementRmaTagsDefault(
    productId: number,
    billingLogId: number,
    ticketId: number,
    projectId: number,
    salesOrderId: number,
    companyId: number,
    params: CommonParameters = {},
  ): Promise<RmaTag> {
    return this.request({
      path: `/procurement/rmaTags/default`,
      method: 'get',
      params,
    })
  }

  getProcurementSettings(params: CommonParameters = {}): Promise<Array<ProcurementSetting>> {
    return this.request({
      path: `/procurement/settings`,
      method: 'get',
      params,
    })
  }

  getProcurementSettingsById(
    id: number,
    params: CommonParameters = {},
  ): Promise<ProcurementSetting> {
    return this.request({
      path: `/procurement/settings/${id}`,
      method: 'get',
      params,
    })
  }

  putProcurementSettingsById(
    id: number,
    procurementSetting: ProcurementSetting,
  ): Promise<ProcurementSetting> {
    return this.request({
      path: `/procurement/settings/${id}`,
      method: 'put',
      data: procurementSetting,
    })
  }

  patchProcurementSettingsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ProcurementSetting> {
    return this.request({
      path: `/procurement/settings/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementSettingsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/settings/count`,
      method: 'get',
      params,
    })
  }

  getProcurementShipmentmethods(params: CommonParameters = {}): Promise<Array<ShipmentMethod>> {
    return this.request({
      path: `/procurement/shipmentmethods`,
      method: 'get',
      params,
    })
  }

  postProcurementShipmentmethods(shipmentMethod: ShipmentMethod): Promise<ShipmentMethod> {
    return this.request({
      path: `/procurement/shipmentmethods`,
      method: 'post',
      data: shipmentMethod,
    })
  }

  getProcurementShipmentmethodsById(
    id: number,
    params: CommonParameters = {},
  ): Promise<ShipmentMethod> {
    return this.request({
      path: `/procurement/shipmentmethods/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementShipmentmethodsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/shipmentmethods/${id}`,
      method: 'delete',
    })
  }

  putProcurementShipmentmethodsById(
    id: number,
    shipmentMethod: ShipmentMethod,
  ): Promise<ShipmentMethod> {
    return this.request({
      path: `/procurement/shipmentmethods/${id}`,
      method: 'put',
      data: shipmentMethod,
    })
  }

  patchProcurementShipmentmethodsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ShipmentMethod> {
    return this.request({
      path: `/procurement/shipmentmethods/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementShipmentmethodsByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<ShipmentMethodInfo> {
    return this.request({
      path: `/procurement/shipmentmethods/${id}/info`,
      method: 'get',
      params,
    })
  }

  getProcurementShipmentmethodsByIdUsages(
    id: number,
    params: CommonParameters = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/procurement/shipmentmethods/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getProcurementShipmentmethodsByIdUsagesList(
    id: number,
    params: CommonParameters = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/procurement/shipmentmethods/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getProcurementShipmentmethodsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/shipmentmethods/count`,
      method: 'get',
      params,
    })
  }

  getProcurementShipmentmethodsInfo(
    params: CommonParameters = {},
  ): Promise<Array<ShipmentMethodInfo>> {
    return this.request({
      path: `/procurement/shipmentmethods/info`,
      method: 'get',
      params,
    })
  }

  getProcurementShipmentmethodsInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/shipmentmethods/info/count`,
      method: 'get',
      params,
    })
  }

  getProcurementSubcategories(params: CommonParameters = {}): Promise<Array<SubCategory>> {
    return this.request({
      path: `/procurement/subcategories/`,
      method: 'get',
      params,
    })
  }

  postProcurementSubcategories(subCategory: SubCategory): Promise<SubCategory> {
    return this.request({
      path: `/procurement/subcategories/`,
      method: 'post',
      data: subCategory,
    })
  }

  getProcurementSubcategoriesById(id: number, params: CommonParameters = {}): Promise<SubCategory> {
    return this.request({
      path: `/procurement/subcategories/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementSubcategoriesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/subcategories/${id}`,
      method: 'delete',
    })
  }

  putProcurementSubcategoriesById(id: number, subCategory: SubCategory): Promise<SubCategory> {
    return this.request({
      path: `/procurement/subcategories/${id}`,
      method: 'put',
      data: subCategory,
    })
  }

  patchProcurementSubcategoriesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<SubCategory> {
    return this.request({
      path: `/procurement/subcategories/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementSubcategoriesByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<SubCategoryInfo> {
    return this.request({
      path: `/procurement/subcategories/${id}/info`,
      method: 'get',
      params,
    })
  }

  getProcurementSubcategoriesByIdUsages(
    id: number,
    params: CommonParameters = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/procurement/subcategories/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getProcurementSubcategoriesByIdUsagesList(
    id: number,
    params: CommonParameters = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/procurement/subcategories/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getProcurementSubcategoriesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/subcategories/count`,
      method: 'get',
      params,
    })
  }

  getProcurementSubcategoriesInfo(params: CommonParameters = {}): Promise<Array<SubCategoryInfo>> {
    return this.request({
      path: `/procurement/subcategories/info/`,
      method: 'get',
      params,
    })
  }

  getProcurementSubcategoriesInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/subcategories/info/count`,
      method: 'get',
      params,
    })
  }

  getProcurementTypes(params: CommonParameters = {}): Promise<Array<ProductType>> {
    return this.request({
      path: `/procurement/types`,
      method: 'get',
      params,
    })
  }

  postProcurementTypes(productTypes: ProductType): Promise<ProductType> {
    return this.request({
      path: `/procurement/types`,
      method: 'post',
      data: productTypes,
    })
  }

  getProcurementTypesById(id: number, params: CommonParameters = {}): Promise<ProductType> {
    return this.request({
      path: `/procurement/types/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementTypesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/types/${id}`,
      method: 'delete',
    })
  }

  putProcurementTypesById(id: number, productTypes: ProductType): Promise<ProductType> {
    return this.request({
      path: `/procurement/types/${id}`,
      method: 'put',
      data: productTypes,
    })
  }

  patchProcurementTypesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ProductType> {
    return this.request({
      path: `/procurement/types/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementTypesByIdInfo(id: number, params: CommonParameters = {}): Promise<ProductTypeInfo> {
    return this.request({
      path: `/procurement/types/${id}/info`,
      method: 'get',
      params,
    })
  }

  getProcurementTypesByIdUsages(id: number, params: CommonParameters = {}): Promise<Array<Usage>> {
    return this.request({
      path: `/procurement/types/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getProcurementTypesByIdUsagesList(
    id: number,
    params: CommonParameters = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/procurement/types/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getProcurementTypesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/types/count`,
      method: 'get',
      params,
    })
  }

  getProcurementTypesInfo(params: CommonParameters = {}): Promise<Array<ProductTypeInfo>> {
    return this.request({
      path: `/procurement/types/info`,
      method: 'get',
      params,
    })
  }

  getProcurementTypesInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/types/info/count`,
      method: 'get',
      params,
    })
  }

  getProcurementUnitOfMeasures(params: CommonParameters = {}): Promise<Array<UnitOfMeasure>> {
    return this.request({
      path: `/procurement/unitOfMeasures`,
      method: 'get',
      params,
    })
  }

  postProcurementUnitOfMeasures(unitOfMeasure: UnitOfMeasure): Promise<UnitOfMeasure> {
    return this.request({
      path: `/procurement/unitOfMeasures`,
      method: 'post',
      data: unitOfMeasure,
    })
  }

  getProcurementUnitOfMeasuresById(
    id: number,
    params: CommonParameters = {},
  ): Promise<UnitOfMeasure> {
    return this.request({
      path: `/procurement/unitOfMeasures/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementUnitOfMeasuresById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/unitOfMeasures/${id}`,
      method: 'delete',
    })
  }

  putProcurementUnitOfMeasuresById(
    id: number,
    unitOfMeasure: UnitOfMeasure,
  ): Promise<UnitOfMeasure> {
    return this.request({
      path: `/procurement/unitOfMeasures/${id}`,
      method: 'put',
      data: unitOfMeasure,
    })
  }

  patchProcurementUnitOfMeasuresById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<UnitOfMeasure> {
    return this.request({
      path: `/procurement/unitOfMeasures/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementUnitOfMeasuresByParentIdConversions(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<Conversion>> {
    return this.request({
      path: `/procurement/unitOfMeasures/${parentId}/conversions`,
      method: 'get',
      params,
    })
  }

  postProcurementUnitOfMeasuresByParentIdConversions(
    parentId: number,
    conversion: Conversion,
  ): Promise<Conversion> {
    return this.request({
      path: `/procurement/unitOfMeasures/${parentId}/conversions`,
      method: 'post',
      data: conversion,
    })
  }

  getProcurementUnitOfMeasuresByParentIdConversionsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Conversion> {
    return this.request({
      path: `/procurement/unitOfMeasures/${parentId}/conversions/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementUnitOfMeasuresByParentIdConversionsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/unitOfMeasures/${parentId}/conversions/${id}`,
      method: 'delete',
    })
  }

  putProcurementUnitOfMeasuresByParentIdConversionsById(
    id: number,
    parentId: number,
    conversion: Conversion,
  ): Promise<Conversion> {
    return this.request({
      path: `/procurement/unitOfMeasures/${parentId}/conversions/${id}`,
      method: 'put',
      data: conversion,
    })
  }

  patchProcurementUnitOfMeasuresByParentIdConversionsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<Conversion> {
    return this.request({
      path: `/procurement/unitOfMeasures/${parentId}/conversions/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementUnitOfMeasuresByParentIdConversionsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/procurement/unitOfMeasures/${parentId}/conversions/count`,
      method: 'get',
      params,
    })
  }

  getProcurementUnitOfMeasuresCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/unitOfMeasures/count`,
      method: 'get',
      params,
    })
  }

  getProcurementWarehouseBins(params: CommonParameters = {}): Promise<Array<WarehouseBin>> {
    return this.request({
      path: `/procurement/warehouseBins`,
      method: 'get',
      params,
    })
  }

  postProcurementWarehouseBins(warehouseBin: WarehouseBin): Promise<WarehouseBin> {
    return this.request({
      path: `/procurement/warehouseBins`,
      method: 'post',
      data: warehouseBin,
    })
  }

  getProcurementWarehouseBinsById(
    id: number,
    params: CommonParameters = {},
  ): Promise<WarehouseBin> {
    return this.request({
      path: `/procurement/warehouseBins/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementWarehouseBinsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/warehouseBins/${id}`,
      method: 'delete',
    })
  }

  putProcurementWarehouseBinsById(id: number, warehouseBin: WarehouseBin): Promise<WarehouseBin> {
    return this.request({
      path: `/procurement/warehouseBins/${id}`,
      method: 'put',
      data: warehouseBin,
    })
  }

  patchProcurementWarehouseBinsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<WarehouseBin> {
    return this.request({
      path: `/procurement/warehouseBins/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementWarehouseBinsByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<WarehouseBinInfo> {
    return this.request({
      path: `/procurement/warehouseBins/${id}/info`,
      method: 'get',
      params,
    })
  }

  getProcurementWarehouseBinsByParentIdInventoryOnHand(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<InventoryOnHand>> {
    return this.request({
      path: `/procurement/warehouseBins/${parentId}/inventoryOnHand`,
      method: 'get',
      params,
    })
  }

  getProcurementWarehouseBinsByParentIdInventoryOnHandById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<InventoryOnHand> {
    return this.request({
      path: `/procurement/warehouseBins/${parentId}/inventoryOnHand/${id}`,
      method: 'get',
      params,
    })
  }

  getProcurementWarehouseBinsByParentIdInventoryOnHandCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/procurement/warehouseBins/${parentId}/inventoryOnHand/count`,
      method: 'get',
      params,
    })
  }

  getProcurementWarehouseBinsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/warehouseBins/count`,
      method: 'get',
      params,
    })
  }

  getProcurementWarehouseBinsInfo(params: CommonParameters = {}): Promise<Array<WarehouseBinInfo>> {
    return this.request({
      path: `/procurement/warehouseBins/info`,
      method: 'get',
      params,
    })
  }

  getProcurementWarehouseBinsInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/warehouseBins/info/count`,
      method: 'get',
      params,
    })
  }

  getProcurementWarehouses(params: CommonParameters = {}): Promise<Array<Warehouse>> {
    return this.request({
      path: `/procurement/warehouses`,
      method: 'get',
      params,
    })
  }

  postProcurementWarehouses(warehouse: Warehouse): Promise<Warehouse> {
    return this.request({
      path: `/procurement/warehouses`,
      method: 'post',
      data: warehouse,
    })
  }

  getProcurementWarehousesById(id: number, params: CommonParameters = {}): Promise<Warehouse> {
    return this.request({
      path: `/procurement/warehouses/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProcurementWarehousesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/procurement/warehouses/${id}`,
      method: 'delete',
    })
  }

  putProcurementWarehousesById(id: number, warehouse: Warehouse): Promise<Warehouse> {
    return this.request({
      path: `/procurement/warehouses/${id}`,
      method: 'put',
      data: warehouse,
    })
  }

  patchProcurementWarehousesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<Warehouse> {
    return this.request({
      path: `/procurement/warehouses/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProcurementWarehousesByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<WarehouseInfo> {
    return this.request({
      path: `/procurement/warehouses/${id}/info`,
      method: 'get',
      params,
    })
  }

  getProcurementWarehousesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/warehouses/count`,
      method: 'get',
      params,
    })
  }

  getProcurementWarehousesInfo(params: CommonParameters = {}): Promise<Array<WarehouseInfo>> {
    return this.request({
      path: `/procurement/warehouses/info`,
      method: 'get',
      params,
    })
  }

  getProcurementWarehousesInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/procurement/warehouses/info/count`,
      method: 'get',
      params,
    })
  }
}
