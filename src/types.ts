import { FormInstance, ButtonProps, FormProps } from "antd"
import { FormItemProps, Rule } from "antd/lib/form"
import { FormLayout } from "antd/lib/form/Form"

type FieldTypes = "text" | "password" | "number" | "date" | "file"
type SelectTypes = "single-select" | "multi-select"

export interface ICustomFieldBase<T = string> {
  label?: string
  name: name<T> | name<T>[]
  placeholder?: string
  rules?: Rule[]
  otherProps?: any
  span?: number
}

interface ISelectField<T = string> extends ICustomFieldBase<T> {
  type: SelectTypes
  list: TOption[]
}

interface IOtherField<T = string> extends ICustomFieldBase<T> {
  type: FieldTypes
  list?: never
}

export type ICustomField<T = string> = ISelectField<T> | IOtherField<T>

export type TOption<T = any> = {
  icon?: React.ReactNode
  label: string
  value: T
}

type name<T> = T extends string ? string : keyof T

export type IFieldGroup<T = any> = ICustomField<T>[][]

export interface ICustomForm<T> {
  fieldsGroups: IFieldGroup<T>
  onSubmit: (values: T) => void
  formControl?: FormInstance
  initialValue?: T
  layout?: FormLayout
  actionButtonsPlacement?: "start" | "center" | "end"
  submitButton?: ButtonProps | boolean
  resetButton?: ButtonProps | boolean
  formProps?: FormProps
}
