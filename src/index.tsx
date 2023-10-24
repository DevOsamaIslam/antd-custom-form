import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
  Space,
  Switch,
  Upload,
} from "antd"
import { Store } from "antd/lib/form/interface"
import React from "react"
import { ICustomField, ICustomForm } from "./types"
import TextArea from "antd/lib/input/TextArea"

export * from "./types"

export const CustomForm = <T,>({
  fieldGroups,
  onSubmit,
  formControl,
  initialValues,
  layout = "horizontal",
  actionButtonsPlacement = "end",
  submitButton,
  resetButton,
  formProps,
}: ICustomForm<T>): JSX.Element => {
  const buttonsPlacement =
    actionButtonsPlacement === "start"
      ? "flex-start"
      : actionButtonsPlacement === "center"
      ? "center"
      : "flex-end"

  const form = formControl || Form.useForm()[0]

  const submitButtonProps =
    typeof submitButton === "object" ? submitButton : undefined

  const resetButtonProps =
    typeof submitButton === "object" ? submitButton : undefined

  return (
    <Form
      form={form}
      onFinish={onSubmit}
      layout={layout}
      initialValues={initialValues as Store}
      {...formProps}>
      {fieldGroups.map((fields, rowIndex) => (
        <Row gutter={[16, 16]} key={rowIndex}>
          {fields.map(
            (field, fieldIndex) =>
              !field.hide && (
                <Col key={fieldIndex} span={field.span || 24 / fields.length}>
                  {renderField(field as ICustomField<string>)}
                </Col>
              )
          )}
        </Row>
      ))}
      <Space style={{ width: "100%", justifyContent: buttonsPlacement }}>
        {resetButton !== false && (
          <Button
            type="text"
            onClick={() => form.resetFields()}
            {...resetButtonProps}>
            Reset
          </Button>
        )}
        {submitButton !== false && (
          <Button type="primary" htmlType="submit" {...submitButtonProps}>
            Submit
          </Button>
        )}
      </Space>
    </Form>
  )
}

const renderField = (field: ICustomField<string>) => {
  const inputProps = {
    "data-testid": Array.isArray(field.name)
      ? field.name.join("-")
      : field.name,
    ...field.otherProps,
  }

  switch (field.type) {
    case "text":
      return (
        <Form.Item label={field.label} name={field.name} rules={field.rules}>
          <Input
            disabled={field.disabled}
            style={{ width: "100%" }}
            placeholder={field.placeholder}
            {...inputProps}
          />
        </Form.Item>
      )
    case "textarea":
      return (
        <Form.Item label={field.label} name={field.name} rules={field.rules}>
          <TextArea
            disabled={field.disabled}
            style={{ width: "100%" }}
            placeholder={field.placeholder}
            {...inputProps}
          />
        </Form.Item>
      )
    case "password":
      return (
        <Form.Item label={field.label} name={field.name} rules={field.rules}>
          <Input.Password
            disabled={field.disabled}
            style={{ width: "100%" }}
            placeholder={field.placeholder}
            {...inputProps}
          />
        </Form.Item>
      )
    case "number":
      return (
        <Form.Item label={field.label} name={field.name} rules={field.rules}>
          <InputNumber
            style={{ width: "100%" }}
            disabled={field.disabled}
            placeholder={field.placeholder}
            {...inputProps}
          />
        </Form.Item>
      )
    case "single-select":
    case "multi-select":
      return (
        <Form.Item label={field.label} name={field.name} rules={field.rules}>
          <Select
            disabled={field.disabled}
            placeholder={field.placeholder}
            style={{ width: "100%" }}
            mode={field.type === "multi-select" ? "multiple" : undefined}
            showSearch={(field.list?.length || 0) > 10}
            allowClear
            {...inputProps}>
            {field.list?.map((item) => (
              <Select.Option key={item.value} value={item.value}>
                {item.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      )
    case "date":
      return (
        <Form.Item label={field.label} name={field.name} rules={field.rules}>
          <DatePicker
            style={{ width: "100%" }}
            disabled={field.disabled}
            placeholder={field.placeholder}
            {...inputProps}
          />
        </Form.Item>
      )
    case "file":
      return (
        <Form.Item label={field.label} name={field.name} rules={field.rules}>
          <Upload
            style={{ width: "100%" }}
            placeholder={field.placeholder}
            {...inputProps}>
            <Button disabled={field.disabled}>{field.placeholder}</Button>
          </Upload>
        </Form.Item>
      )
    case "checkbox":
      return (
        <Form.Item name={field.name} label={field.label} rules={field.rules}>
          <Checkbox.Group
            options={field.list}
            disabled={field.disabled}
            {...inputProps}
          />
        </Form.Item>
      )
    case "radio":
      return (
        <Form.Item name={field.name} label={field.label} rules={field.rules}>
          <Radio.Group
            options={field.list}
            disabled={field.disabled}
            {...inputProps}
          />
        </Form.Item>
      )
    case "toggle":
      return (
        <Form.Item
          name={field.name}
          label={field.label}
          rules={field.rules}
          valuePropName="checked">
          <Switch
            checkedChildren={field.list[0].label}
            unCheckedChildren={field.list[1].label}
            disabled={field.disabled}
            {...inputProps}
          />
        </Form.Item>
      )
    default:
      return null
  }
}
