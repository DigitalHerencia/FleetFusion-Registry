import { toast } from "sonner"

type ToastProps = {
  title?: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
}

/**
 * useToast hook provides convenient toast notification methods for fleet management actions.
 * Wraps the Sonner toast API to fit FleetFusion usage patterns.
 */
export function useToast() {
  return {
    /** Show a generic info toast */
    toast: (message: string, options?: ToastProps) => {
      return toast(message, {
        description: options?.description,
        action: options?.action,
      })
    },
    
    /** Show a success-style toast (green check icon, etc.) */
    success: (message: string, options?: ToastProps) => {
      return toast.success(message, {
        description: options?.description,
        action: options?.action,
      })
    },
    
    /** Show an error-style toast (red error icon, etc.) */
    error: (message: string, options?: ToastProps) => {
      return toast.error(message, {
        description: options?.description,
        action: options?.action,
      })
    },
    
    /** Show a warning-style toast (yellow warning icon, etc.) */
    warning: (message: string, options?: ToastProps) => {
      return toast.warning(message, {
        description: options?.description,
        action: options?.action,
      })
    },
    
    /** Show an info-style toast (blue info icon, etc.) */
    info: (message: string, options?: ToastProps) => {
      return toast.info(message, {
        description: options?.description,
        action: options?.action,
      })
    },
    
    /** Show a loading toast that can be updated */
    loading: (message: string, options?: ToastProps) => {
      return toast.loading(message, {
        description: options?.description,
      })
    },
    
    /** Dismiss a specific toast */
    dismiss: (toastId?: string | number) => {
      return toast.dismiss(toastId)
    },
    
    /** Fleet-specific toast methods */
    fleet: {
      /** Driver-related success notification */
      driverSuccess: (message: string) => {
        return toast.success(message, {
          description: "Driver operation completed successfully",
        })
      },
      
      /** Vehicle-related success notification */
      vehicleSuccess: (message: string) => {
        return toast.success(message, {
          description: "Vehicle operation completed successfully",
        })
      },
      
      /** Dispatch-related success notification */
      dispatchSuccess: (message: string) => {
        return toast.success(message, {
          description: "Dispatch operation completed successfully",
        })
      },
      
      /** Compliance-related warning */
      complianceWarning: (message: string) => {
        return toast.warning(message, {
          description: "Please review compliance requirements",
        })
      },
      
      /** Maintenance-related info */
      maintenanceInfo: (message: string) => {
        return toast.info(message, {
          description: "Vehicle maintenance notification",
        })
      },
    },
  }
}

export type { ToastProps }