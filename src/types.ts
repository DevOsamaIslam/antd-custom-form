import { ButtonProps, FormInstance, FormProps } from "antd"
import { FormItemProps, Rule } from "antd/lib/form"
import { FormLayout } from "antd/lib/form/Form"

type FieldTypes = "text" | "password" | "number" | "date" | "file" | "textarea"

type SelectTypes = "single-select" | "multi-select" | "checkbox" | "radio"

export interface ICustomFieldBase<T = string> {
  label?: string
  name: name<T> | name<T>[]
  placeholder?: string
  rules?: Rule[]
  span?: number
  disabled?: boolean
  hide?: boolean
  inputProps?: any
  formItemProps?: FormItemProps
}

interface ISelectField<T = string> extends ICustomFieldBase<T> {
  type: SelectTypes
  list: TOption[]
}

interface IOtherField<T = string> extends ICustomFieldBase<T> {
  type: FieldTypes
}

interface IToggleFieldType<T = string> extends ICustomFieldBase<T> {
  type: "toggle"
  list: [TOption, TOption]
}

export type ICustomField<T = string> =
  | ISelectField<T>
  | IOtherField<T>
  | IToggleFieldType<T>

export type TOption<T = any> = {
  icon?: React.ReactNode
  label: string
  value: T
}

type name<T> = T extends string ? string : keyof T

export type IFieldGroup<T = any> = ICustomField<T>[][]

export interface ICustomForm<T> {
  fieldGroups: IFieldGroup<T>
  onSubmit: (values: T) => void
  formControl?: FormInstance
  initialValues?: T
  layout?: FormLayout
  actionButtonsPlacement?: "start" | "center" | "end"
  submitButton?: ButtonProps | boolean
  resetButton?: ButtonProps | boolean
  formProps?: FormProps
}
