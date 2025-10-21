import { FormInstance, FormProps } from "antd"
import { FormItemProps, Rule } from "antd/lib/form"
import { FormLayout } from "antd/lib/form/Form"
import { ReactNode } from "react"

type FieldTypes = "text" | "password" | "number" | "date" | "file" | "textarea"

type SelectTypes =
  | "single-select"
  | "multi-select"
  | "checkbox"
  | "radio"
  | "custom-input"

interface ICustomFieldBase<T = string> {
  label?: ReactNode
  name: name<T> | string[]
  placeholder?: string
  rules?: Rule[]
  span?: number
  disabled?: boolean
  hide?: boolean
  inputProps?: any
  formItemProps?: FormItemProps
  component?: (value: any, onChange: (value: any) => void) => React.ReactNode
}

interface IComponentField<T = string>
  extends Omit<ICustomFieldBase<T>, "name" | "label" | "component"> {
  type: "custom"
  label: ReactNode
  name?: name<T> | string[]
}

interface ISelectField<T = string> extends ICustomFieldBase<T> {
  type?: SelectTypes
  list: TOption[]
}

interface IOtherField<T = string> extends ICustomFieldBase<T> {
  type?: FieldTypes
}

interface IToggleFieldType<T = string> extends ICustomFieldBase<T> {
  type: "toggle"
  list: [TOption, TOption]
}

interface ICustomInputFieldType<T = string> extends ICustomFieldBase<T> {
  type: "custom-input"
  component: (value: any, onChange: (value: any) => void) => React.ReactNode
}

export type ICustomField<T = string> =
  | ISelectField<T>
  | IOtherField<T>
  | IToggleFieldType<T>
  | IComponentField<T>
  | ICustomInputFieldType<T>

export type TOption<T = any> = {
  icon?: React.ReactNode
  label: string
  value: T
}

type name<T> = T extends string ? string : keyof T

export type IFieldGroup<T = any> = ICustomField<T>[][]

export type ICustomForm<T> = {
  fieldGroups: IFieldGroup<T>
  onSubmit: (values: T) => void
  initialValues?: Partial<T>
  layout?: FormLayout
  actionButtonsPlacement?: "start" | "center" | "end"
  resetButton?: ReactNode | boolean
  formProps?: FormProps
} & (
  | {
      submitButton: ReactNode | true
      formControl?: FormInstance
    }
  | {
      submitButton?: false
      formControl: FormInstance
    }
  | {
      submitButton?: ReactNode | true
      formControl?: FormInstance
    }
)
