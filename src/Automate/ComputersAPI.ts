/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type AutomateApiDomainContractsPatchingComputerPatchingStats = schemas['Automate.Api.Domain.Contracts.Patching.ComputerPatchingStats']
type LabTechDatabaseResultSetWithCount_LabTechModelsCommandExecute_ = schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.CommandExecute_']
type LabTechDatabaseResultSetWithCount_LabTechModelsCommandHistory_ = schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.CommandHistory_']
type LabTechDatabaseResultSetWithCount_LabTechModelsComputerChassis_ = schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.ComputerChassis_']
type LabTechDatabaseResultSetWithCount_LabTechModelsComputerDrive_ = schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.ComputerDrive_']
type LabTechDatabaseResultSetWithCount_LabTechModelsComputerMemorySlot_ = schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.ComputerMemorySlot_']
type LabTechDatabaseResultSetWithCount_LabTechModelsComputerPatchingPolicy_ = schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.ComputerPatchingPolicy_']
type LabTechDatabaseResultSetWithCount_LabTechModelsComputerPrinter_ = schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.ComputerPrinter_']
type LabTechDatabaseResultSetWithCount_LabTechModelsComputerProcessor_ = schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.ComputerProcessor_']
type LabTechDatabaseResultSetWithCount_LabTechModelsComputerSensor_ = schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.ComputerSensor_']
type LabTechDatabaseResultSetWithCount_LabTechModelsComputerService_ = schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.ComputerService_']
type LabTechDatabaseResultSetWithCount_LabTechModelsComputerSoftware_ = schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.ComputerSoftware_']
type LabTechDatabaseResultSetWithCount_LabTechModelsComputerSystemSlot_ = schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.ComputerSystemSlot_']
type LabTechDatabaseResultSetWithCount_LabTechModelsComputerVideoCard_ = schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.ComputerVideoCard_']
type LabTechDatabaseResultSetWithCount_LabTechModelsComputer_ = schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.Computer_']
type LabTechDatabaseResultSetWithCount_LabTechModelsMaintenanceMode_ = schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.MaintenanceMode_']
type LabTechDatabaseResultSetWithCount_LabTechModelsSmartData_ = schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.SmartData_']
type LabTechDatabaseResultSetWithCount_LabTechRepositoriesMySQLDomainModelsComputerDriver_ = schemas['LabTech.Database.ResultSetWithCount_LabTech.Repositories.MySQL.Domain.Models.ComputerDriver_']
type LabTechModelsCommandExecute = schemas['LabTech.Models.CommandExecute']
type LabTechModelsComputerBios = schemas['LabTech.Models.ComputerBios']
type LabTechModelsComputerDevice = schemas['LabTech.Models.ComputerDevice']
type LabTechModelsComputerEffectivePatchingPolicy = schemas['LabTech.Models.ComputerEffectivePatchingPolicy']
type LabTechModelsComputerOperatingSystem = schemas['LabTech.Models.ComputerOperatingSystem']
type LabTechModelsComputerRunningScript = schemas['LabTech.Models.ComputerRunningScript']
type LabTechModelsComputerScheduledTask = schemas['LabTech.Models.ComputerScheduledTask']
type LabTechModelsComputerScriptHistory = schemas['LabTech.Models.ComputerScriptHistory']
type LabTechModelsComputerUps = schemas['LabTech.Models.ComputerUps']
type LabTechModelsScheduledScript = schemas['LabTech.Models.ScheduledScript']
type LabTechRESTApiRpcContractsSoftwareUninstallInfo = schemas['LabTech.RESTApi.RpcContracts.SoftwareUninstallInfo']
type LabTechRepositoriesMySQLDomainModelsAlertingMonitorAlertSuspension = schemas['LabTech.Repositories.MySQL.Domain.Models.Alerting.MonitorAlertSuspension']

/**
 * @internal
 */
export default class ComputersAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  
   Computers_GetComputerList(params: CommonParameters = {}): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsComputer_> {
    return this.request({
      path: `/api/v1/Computers`, method: 'get', params
    })
   }

   ComputerAlerts_GetComputerAlerts(computerId: number, params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/Alerts`, method: 'get', params
    })
   }

   MaintenanceAlertSuspensions_GetSuspensionList(computerId: number, params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/AlertSuspensions/MaintenanceWindow`, method: 'get', params
    })
   }

   TemplateAlertSuspension_GetSuspensionList(computerId: number, params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/AlertSuspensions/TemplateDiversion`, method: 'get', params
    })
   }

   ComputerBios_GetComputerBios(computerId: number, params: CommonParameters = {}): Promise<LabTechModelsComputerBios> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/bios`, method: 'get', params
    })
   }

   CommandExecute_GetCommandExecuteList(computerId: number, params: CommonParameters = {}): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsCommandExecute_> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/CommandExecute`, method: 'get', params
    })
   }

   CommandExecute_PostCommandExecute(computerId: number, CommandExecute: LabTechModelsCommandExecute): Promise<LabTechModelsCommandExecute> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/CommandExecute`, method: 'post', data: CommandExecute
    })
   }

   CommandHistory_GetCommandHistoryList(computerId: number, params: CommonParameters = {}): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsCommandHistory_> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/CommandHistory`, method: 'get', params
    })
   }

   ComputerPatchingPolicies_GetComputerPatchingPolicyListAsync(computerId: number, params: CommonParameters = {}): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsComputerPatchingPolicy_> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/ComputerPatchingPolicies`, method: 'get', params
    })
   }

   Computers_GetComputerDeviceList(computerId: number, params: CommonParameters = {}): Promise<LabTechModelsComputerDevice[]> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/Devices`, method: 'get', params
    })
   }

   ComputerDrivers_GetComputerDrivers(computerId: number, params: CommonParameters = {}): Promise<LabTechDatabaseResultSetWithCount_LabTechRepositoriesMySQLDomainModelsComputerDriver_> {
    return this.request({
      path: `/api/v1/computers/${computerId}/drivers`, method: 'get', params
    })
   }

   ComputerDrives_GetComputerDriveSmartDataList(computerId: number, driveId: number, params: CommonParameters = {}): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsSmartData_> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/Drives/{driveId}/SmartData`, method: 'get', params
    })
   }

   ComputerEffectivePatchingPolicy_GetComputerEffectivePatchingPolicy(computerId: number, params: CommonParameters = {}): Promise<LabTechModelsComputerEffectivePatchingPolicy> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/EffectivePatchingPolicy`, method: 'get', params
    })
   }

   ComputerMicrosoftUpdateData_GetComputerMicrosoftUpdateDataListAsync(computerId: number, params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/MicrosoftUpdates`, method: 'get', params
    })
   }

   MonitorAlertSuspensions_GetSuspensionList(computerId: number, params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/MonitorAlertSuspensions`, method: 'get', params
    })
   }

   MonitorAlertSuspensions_PostSuspension(computerId: number, : ): Promise<LabTechRepositoriesMySQLDomainModelsAlertingMonitorAlertSuspension> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/MonitorAlertSuspensions`, method: 'post', data: 
    })
   }

   ComputerMonitors_GetComputerMonitorsList(computerId: number, params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/Monitors`, method: 'get', params
    })
   }

   ComputerOperatingSystem_GetComputerOperatingSystem(computerId: number, params: CommonParameters = {}): Promise<LabTechModelsComputerOperatingSystem> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/OperatingSystem`, method: 'get', params
    })
   }

   DevicePatchingStatistics_GetDevicePatchingStatisticsAsync(computerId: number, params: CommonParameters = {}): Promise<AutomateApiDomainContractsPatchingComputerPatchingStats> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/PatchingStats`, method: 'get', params
    })
   }

   PatchJob_GetComputerPatchJobListAsync(computerId: number, params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/PatchJobs`, method: 'get', params
    })
   }

   ComputerPrinters_GetComputerPrintersList(computerId: number, params: CommonParameters = {}): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsComputerPrinter_> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/Printers`, method: 'get', params
    })
   }

   Computers_GetComputerProcessorList(computerId: number, params: CommonParameters = {}): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsComputerProcessor_> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/Processors`, method: 'get', params
    })
   }

   ComputerRunningScripts_GetComputerRunningScripts(computerId: number, params: CommonParameters = {}): Promise<LabTechModelsComputerRunningScript[]> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/RunningScripts`, method: 'get', params
    })
   }

   ScheduledScript_GetComputerScheduledScripts(computerId: number, params: CommonParameters = {}): Promise<LabTechModelsScheduledScript[]> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/ScheduledScripts`, method: 'get', params
    })
   }

   ScheduledScript_PostComputerScheduledScript(computerId: number, ScheduledScript: LabTechModelsScheduledScript): Promise<LabTechModelsScheduledScript> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/ScheduledScripts`, method: 'post', data: ScheduledScript
    })
   }

   ScheduledScript_GetComputerScheduledScript(computerId: number, entityId: number, params: CommonParameters = {}): Promise<LabTechModelsScheduledScript> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/ScheduledScripts/{entityId}`, method: 'get', params
    })
   }

   ComputerScheduledTasks_GetScheduledTaskList(computerId: number, params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/ScheduledTasks`, method: 'get', params
    })
   }

   ComputerScheduledTasks_PostScheduledTask(computerId: number, ComputerScheduledTask: LabTechModelsComputerScheduledTask): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/ScheduledTasks`, method: 'post', data: ComputerScheduledTask
    })
   }

   ComputerScriptHistory_GetComputerScriptHistoryList(computerId: number, params: CommonParameters = {}): Promise<LabTechModelsComputerScriptHistory[]> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/ScriptHistory`, method: 'get', params
    })
   }

   ComputerSensor_GetComputerSensorListAsync(computerId: number, params: CommonParameters = {}): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsComputerSensor_> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/Sensors`, method: 'get', params
    })
   }

   Computers_GetComputerServiceList(computerId: number, params: CommonParameters = {}): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsComputerService_> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/Services`, method: 'get', params
    })
   }

   Computers_GetComputerSoftwareList(computerId: number, params: CommonParameters = {}): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsComputerSoftware_> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/Software`, method: 'get', params
    })
   }

   ComputerSoftwareActions_UninstallSoftware(computerId: number, softwareId: number, SoftwareUninstallInfo: LabTechRESTApiRpcContractsSoftwareUninstallInfo): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/computers/${computerId}/software/{softwareId}/uninstall`, method: 'post', data: SoftwareUninstallInfo
    })
   }

   ComputerSystemSlots_GetComputerSystemSlotList(computerId: number, params: CommonParameters = {}): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsComputerSystemSlot_> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/SystemSlots`, method: 'get', params
    })
   }

   ComputerThirdPartyPatches_GetComputerThirdPartyPatchListAsync(computerId: number, params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/ThirdPartyPatches`, method: 'get', params
    })
   }

   ComputerUps_GetComputerUpsListAsync(computerId: number, params: CommonParameters = {}): Promise<LabTechModelsComputerUps[]> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/Ups`, method: 'get', params
    })
   }

   Computers_GetComputerVideoCardList(computerId: number, params: CommonParameters = {}): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsComputerVideoCard_> {
    return this.request({
      path: `/api/v1/Computers/${computerId}/VideoCards`, method: 'get', params
    })
   }

   Chassis_GetComputerChassis(params: CommonParameters = {}): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsComputerChassis_> {
    return this.request({
      path: `/api/v1/Computers/Chassis`, method: 'get', params
    })
   }

   ComputerDrives_GetComputerDriveList(params: CommonParameters = {}): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsComputerDrive_> {
    return this.request({
      path: `/api/v1/Computers/Drives`, method: 'get', params
    })
   }

   Computers_GetComputerMaintenanceModeList(params: CommonParameters = {}): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsMaintenanceMode_> {
    return this.request({
      path: `/api/v1/Computers/MaintenanceModes`, method: 'get', params
    })
   }

   Computers_GetComputerMemorySlotList(params: CommonParameters = {}): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsComputerMemorySlot_> {
    return this.request({
      path: `/api/v1/Computers/MemorySlots`, method: 'get', params
    })
   }

   Computers_GetComputerSoftwareList(params: CommonParameters = {}): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsComputerSoftware_> {
    return this.request({
      path: `/api/v1/Computers/Software`, method: 'get', params
    })
   }
}
  