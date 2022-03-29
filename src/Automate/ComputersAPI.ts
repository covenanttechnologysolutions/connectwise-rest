/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type requestBodies = components['requestBodies']
/** {@link AutomateApiDomainContractsPatchingComputerPatchingStats} */
export type AutomateApiDomainContractsPatchingComputerPatchingStats =
  schemas['Automate.Api.Domain.Contracts.Patching.ComputerPatchingStats']
/** {@link LabTechModelsCommandExecute} */
export type LabTechModelsCommandExecute = schemas['LabTech.Models.CommandExecute']
/** {@link LabTechModelsCommandHistory} */
export type LabTechModelsCommandHistory = schemas['LabTech.Models.CommandHistory']
/** {@link LabTechModelsComputer} */
export type LabTechModelsComputer = schemas['LabTech.Models.Computer']
/** {@link LabTechModelsComputerBios} */
export type LabTechModelsComputerBios = schemas['LabTech.Models.ComputerBios']
/** {@link LabTechModelsComputerChassis} */
export type LabTechModelsComputerChassis = schemas['LabTech.Models.ComputerChassis']
/** {@link LabTechModelsComputerDevice} */
export type LabTechModelsComputerDevice = schemas['LabTech.Models.ComputerDevice']
/** {@link LabTechModelsComputerDrive} */
export type LabTechModelsComputerDrive = schemas['LabTech.Models.ComputerDrive']
/** {@link LabTechModelsComputerEffectivePatchingPolicy} */
export type LabTechModelsComputerEffectivePatchingPolicy =
  schemas['LabTech.Models.ComputerEffectivePatchingPolicy']
/** {@link LabTechModelsComputerMemorySlot} */
export type LabTechModelsComputerMemorySlot = schemas['LabTech.Models.ComputerMemorySlot']
/** {@link LabTechModelsComputerMenu} */
export type LabTechModelsComputerMenu = schemas['LabTech.Models.ComputerMenu']
/** {@link LabTechModelsComputerOperatingSystem} */
export type LabTechModelsComputerOperatingSystem = schemas['LabTech.Models.ComputerOperatingSystem']
/** {@link LabTechModelsComputerPatchingPolicy} */
export type LabTechModelsComputerPatchingPolicy = schemas['LabTech.Models.ComputerPatchingPolicy']
/** {@link LabTechModelsComputerPrinter} */
export type LabTechModelsComputerPrinter = schemas['LabTech.Models.ComputerPrinter']
/** {@link LabTechModelsComputerProcessor} */
export type LabTechModelsComputerProcessor = schemas['LabTech.Models.ComputerProcessor']
/** {@link LabTechModelsComputerRunningScript} */
export type LabTechModelsComputerRunningScript = schemas['LabTech.Models.ComputerRunningScript']
/** {@link LabTechModelsComputerScheduledTask} */
export type LabTechModelsComputerScheduledTask = schemas['LabTech.Models.ComputerScheduledTask']
/** {@link LabTechModelsComputerScriptHistory} */
export type LabTechModelsComputerScriptHistory = schemas['LabTech.Models.ComputerScriptHistory']
/** {@link LabTechModelsComputerSensor} */
export type LabTechModelsComputerSensor = schemas['LabTech.Models.ComputerSensor']
/** {@link LabTechModelsComputerService} */
export type LabTechModelsComputerService = schemas['LabTech.Models.ComputerService']
/** {@link LabTechModelsComputerSoftware} */
export type LabTechModelsComputerSoftware = schemas['LabTech.Models.ComputerSoftware']
/** {@link LabTechModelsComputerSystemSlot} */
export type LabTechModelsComputerSystemSlot = schemas['LabTech.Models.ComputerSystemSlot']
/** {@link LabTechModelsComputerUps} */
export type LabTechModelsComputerUps = schemas['LabTech.Models.ComputerUps']
/** {@link LabTechModelsComputerVideoCard} */
export type LabTechModelsComputerVideoCard = schemas['LabTech.Models.ComputerVideoCard']
/** {@link LabTechModelsMaintenanceMode} */
export type LabTechModelsMaintenanceMode = schemas['LabTech.Models.MaintenanceMode']
/** {@link LabTechModelsRetiredAsset} */
export type LabTechModelsRetiredAsset = schemas['LabTech.Models.RetiredAsset']
/** {@link LabTechModelsScheduledScript} */
export type LabTechModelsScheduledScript = schemas['LabTech.Models.ScheduledScript']
/** {@link LabTechModelsServiceClassification} */
export type LabTechModelsServiceClassification = schemas['LabTech.Models.ServiceClassification']
/** {@link LabTechModelsSmartData} */
export type LabTechModelsSmartData = schemas['LabTech.Models.SmartData']
/** {@link LabTechModelsVirusScannerDef} */
export type LabTechModelsVirusScannerDef = schemas['LabTech.Models.VirusScannerDef']
/** {@link LabTechRESTApiRpcContractsSoftwareUninstallInfo} */
export type LabTechRESTApiRpcContractsSoftwareUninstallInfo =
  schemas['LabTech.RESTApi.RpcContracts.SoftwareUninstallInfo']
/** {@link LabTechRepositoriesMySQLDomainModelsAlertingMonitorAlertSuspension} */
export type LabTechRepositoriesMySQLDomainModelsAlertingMonitorAlertSuspension =
  schemas['LabTech.Repositories.MySQL.Domain.Models.Alerting.MonitorAlertSuspension']
/** {@link LabTechRepositoriesMySQLDomainModelsComputerDriver} */
export type LabTechRepositoriesMySQLDomainModelsComputerDriver =
  schemas['LabTech.Repositories.MySQL.Domain.Models.ComputerDriver']

/**
 * @module ComputersAPI
 */

/**
 * Computers module
 * @public
 */
export class ComputersAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  getComputerMenuList(params: CommonParameters = {}): Promise<Array<LabTechModelsComputerMenu>> {
    return this.request({
      path: `/api/v1/ComputerMenus`,
      method: 'get',
      params,
    })
  }

  postComputerMenu(ComputerMenu: LabTechModelsComputerMenu): Promise<LabTechModelsComputerMenu> {
    return this.request({
      path: `/api/v1/ComputerMenus`,
      method: 'post',
      data: ComputerMenu,
    })
  }

  getComputerList(params: CommonParameters = {}): Promise<Array<LabTechModelsComputer>> {
    return this.request({
      path: `/api/v1/Computers`,
      method: 'get',
      params,
    })
  }

  getComputerAlerts(computerId: number, params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/Alerts`,
      method: 'get',
      params,
    })
  }

  getMaintenanceAlertSuspensionList(
    computerId: number,
    params: CommonParameters = {},
  ): Promise<object> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/AlertSuspensions/MaintenanceWindow`,
      method: 'get',
      params,
    })
  }

  getTemplateAlertSuspensionList(
    computerId: number,
    params: CommonParameters = {},
  ): Promise<object> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/AlertSuspensions/TemplateDiversion`,
      method: 'get',
      params,
    })
  }

  getComputerBios(
    computerId: number,
    params: CommonParameters = {},
  ): Promise<LabTechModelsComputerBios> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/bios`,
      method: 'get',
      params,
    })
  }

  getCommandExecuteList(
    computerId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsCommandExecute>> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/CommandExecute`,
      method: 'get',
      params,
    })
  }

  postCommandExecute(
    computerId: number,
    CommandExecute: LabTechModelsCommandExecute,
  ): Promise<LabTechModelsCommandExecute> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/CommandExecute`,
      method: 'post',
      data: CommandExecute,
    })
  }

  getCommandHistoryList(
    computerId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsCommandHistory>> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/CommandHistory`,
      method: 'get',
      params,
    })
  }

  getComputerPatchingPolicyListAsync(
    computerId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsComputerPatchingPolicy>> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/ComputerPatchingPolicies`,
      method: 'get',
      params,
    })
  }

  getComputerDeviceList(
    computerId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsComputerDevice>> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/Devices`,
      method: 'get',
      params,
    })
  }

  getComputerDrivers(
    computerId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechRepositoriesMySQLDomainModelsComputerDriver>> {
    return this.request({
      path: `/api/v1/computers/${computerId}/drivers`,
      method: 'get',
      params,
    })
  }

  getComputerDriveSmartDataList(
    computerId: number,
    driveId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsSmartData>> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/Drives/${driveId}/SmartData`,
      method: 'get',
      params,
    })
  }

  getComputerEffectivePatchingPolicy(
    computerId: number,
    params: CommonParameters = {},
  ): Promise<LabTechModelsComputerEffectivePatchingPolicy> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/EffectivePatchingPolicy`,
      method: 'get',
      params,
    })
  }

  getComputerMicrosoftUpdateDataListAsync(
    computerId: number,
    params: CommonParameters = {},
  ): Promise<object> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/MicrosoftUpdates`,
      method: 'get',
      params,
    })
  }

  getMonitorAlertSuspensionList(
    computerId: number,
    params: CommonParameters = {},
  ): Promise<object> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/MonitorAlertSuspensions`,
      method: 'get',
      params,
    })
  }

  postSuspension(
    computerId: number,
    integer: number,
  ): Promise<LabTechRepositoriesMySQLDomainModelsAlertingMonitorAlertSuspension> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/MonitorAlertSuspensions`,
      method: 'post',
      data: integer,
    })
  }

  getComputerMonitorsList(computerId: number, params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/Monitors`,
      method: 'get',
      params,
    })
  }

  getComputerOperatingSystem(
    computerId: number,
    params: CommonParameters = {},
  ): Promise<LabTechModelsComputerOperatingSystem> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/OperatingSystem`,
      method: 'get',
      params,
    })
  }

  getDevicePatchingStatisticsAsync(
    computerId: number,
    params: CommonParameters = {},
  ): Promise<AutomateApiDomainContractsPatchingComputerPatchingStats> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/PatchingStats`,
      method: 'get',
      params,
    })
  }

  getComputerPatchJobListAsync(computerId: number, params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/PatchJobs`,
      method: 'get',
      params,
    })
  }

  getComputerPrintersList(
    computerId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsComputerPrinter>> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/Printers`,
      method: 'get',
      params,
    })
  }

  getComputerProcessorList(
    computerId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsComputerProcessor>> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/Processors`,
      method: 'get',
      params,
    })
  }

  getComputerRunningScripts(
    computerId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsComputerRunningScript>> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/RunningScripts`,
      method: 'get',
      params,
    })
  }

  getComputerScheduledScripts(
    computerId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsScheduledScript>> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/ScheduledScripts`,
      method: 'get',
      params,
    })
  }

  postComputerScheduledScript(
    computerId: number,
    ScheduledScript: LabTechModelsScheduledScript,
  ): Promise<LabTechModelsScheduledScript> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/ScheduledScripts`,
      method: 'post',
      data: ScheduledScript,
    })
  }

  getComputerScheduledScript(
    computerId: number,
    entityId: number,
    params: CommonParameters = {},
  ): Promise<LabTechModelsScheduledScript> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/ScheduledScripts/${entityId}`,
      method: 'get',
      params,
    })
  }

  getScheduledTaskList(computerId: number, params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/ScheduledTasks`,
      method: 'get',
      params,
    })
  }

  postScheduledTask(
    computerId: number,
    ComputerScheduledTask: LabTechModelsComputerScheduledTask,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/ScheduledTasks`,
      method: 'post',
      data: ComputerScheduledTask,
    })
  }

  getComputerScriptHistoryList(
    computerId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsComputerScriptHistory>> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/ScriptHistory`,
      method: 'get',
      params,
    })
  }

  getComputerSensorListAsync(
    computerId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsComputerSensor>> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/Sensors`,
      method: 'get',
      params,
    })
  }

  getComputerServiceList(
    computerId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsComputerService>> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/Services`,
      method: 'get',
      params,
    })
  }

  getComputerSoftwareList(
    computerId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsComputerSoftware>> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/Software`,
      method: 'get',
      params,
    })
  }

  uninstallSoftware(
    computerId: number,
    softwareId: number,
    SoftwareUninstallInfo: LabTechRESTApiRpcContractsSoftwareUninstallInfo,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/computers/${computerId}/software/${softwareId}/uninstall`,
      method: 'post',
      data: SoftwareUninstallInfo,
    })
  }

  getComputerSystemSlotList(
    computerId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsComputerSystemSlot>> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/SystemSlots`,
      method: 'get',
      params,
    })
  }

  getComputerThirdPartyPatchListAsync(
    computerId: number,
    params: CommonParameters = {},
  ): Promise<object> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/ThirdPartyPatches`,
      method: 'get',
      params,
    })
  }

  getComputerUpsListAsync(
    computerId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsComputerUps>> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/Ups`,
      method: 'get',
      params,
    })
  }

  getComputerVideoCardList(
    computerId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsComputerVideoCard>> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/VideoCards`,
      method: 'get',
      params,
    })
  }

  getComputerChassis(params: CommonParameters = {}): Promise<Array<LabTechModelsComputerChassis>> {
    return this.request({
      path: `/api/v1/Computers/Chassis`,
      method: 'get',
      params,
    })
  }

  getComputerDriveList(params: CommonParameters = {}): Promise<Array<LabTechModelsComputerDrive>> {
    return this.request({
      path: `/api/v1/Computers/Drives`,
      method: 'get',
      params,
    })
  }

  getComputerMaintenanceModeList(
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsMaintenanceMode>> {
    return this.request({
      path: `/api/v1/Computers/MaintenanceModes`,
      method: 'get',
      params,
    })
  }

  getComputerMemorySlotList(
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsComputerMemorySlot>> {
    return this.request({
      path: `/api/v1/Computers/MemorySlots`,
      method: 'get',
      params,
    })
  }

  getComputersSoftwareList(
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsComputerSoftware>> {
    return this.request({
      path: `/api/v1/Computers/Software`,
      method: 'get',
      params,
    })
  }

  getRetiredAssetList(params: CommonParameters = {}): Promise<Array<LabTechModelsRetiredAsset>> {
    return this.request({
      path: `/api/v1/RetiredAssets`,
      method: 'get',
      params,
    })
  }

  classifyService(
    serviceId: number,
    ServiceClassification: LabTechModelsServiceClassification,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/services/${serviceId}/classify`,
      method: 'post',
      data: ServiceClassification,
    })
  }

  getVirusScannerDefinitionList(
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsVirusScannerDef>> {
    return this.request({
      path: `/api/v1/VirusScannerDefs`,
      method: 'get',
      params,
    })
  }

  postVirusScannerDefinition(
    VirusScannerDef: LabTechModelsVirusScannerDef,
  ): Promise<LabTechModelsVirusScannerDef> {
    return this.request({
      path: `/api/v1/VirusScannerDefs`,
      method: 'post',
      data: VirusScannerDef,
    })
  }
}
