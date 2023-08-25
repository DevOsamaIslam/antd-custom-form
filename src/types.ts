import { FormInstance, ButtonProps, FormProps } from "antd"
import { Rule } from "antd/lib/form"
import { FormLayout } from "antd/lib/form/Form"

type SelectTypes = "single-select" | "multi-select"

export interface ICustomFieldBase<T = string> {
  label: string
  name: name<T> | name<T>[]
  rules?: Rule[]
  otherProps?: any
  span?: number
}

export interface ISelectField<T = string> extends ICustomFieldBase<T> {
  type: SelectTypes
  list: $option[]
}

export interface IOtherField<T = string> extends ICustomFieldBase<T> {
  type: Exclude<"text" | "number" | "date" | "file", SelectTypes>
  list?: never
}

export type ICustomField<T = string> = ISelectField<T> | IOtherField<T>

export type $option<T = any> = {
  icon?: React.ReactNode
  label: string
  value: T
}

type name<T> = T extends string ? string : keyof T

// export interface ICustomField<T = string> {
//   label: string
//   name: name<T> | name<T>[]
//   type: "text" | "number" | "single-select" | "multi-select" | "date" | "file"
//   list?: $option[]
//   rules?: Rule[]
//   otherProps?: any
//   span?: number
// }

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
