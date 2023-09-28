import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
  Upload,
} from "antd"
import { Store } from "antd/lib/form/interface"
import React from "react"
import { ICustomField, ICustomForm } from "./types"

export * from "./types"

export const CustomForm = <T,>({
  fieldsGroups,
  onSubmit,
  formControl,
  initialValue,
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
      initialValues={initialValue as Store}
      {...formProps}>
      {fieldsGroups.map((fields, rowIndex) => (
        <Row gutter={[16, 16]} key={rowIndex}>
          {fields.map((field, fieldIndex) => (
            <Col key={fieldIndex} span={field.span || 24 / fields.length}>
              {renderField(field as ICustomField<string>)}
            </Col>
          ))}
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
  switch (field.type) {
    case "text":
      return (
        <Form.Item label={field.label} name={field.name} rules={field.rules}>
          <Input
            style={{ width: "100%" }}
            placeholder={field.placeholder}
            {...field.otherProps}
          />
        </Form.Item>
      )
    case "password":
      return (
        <Form.Item label={field.label} name={field.name} rules={field.rules}>
          <Input.Password
            style={{ width: "100%" }}
            placeholder={field.placeholder}
            {...field.otherProps}
          />
        </Form.Item>
      )
    case "number":
      return (
        <Form.Item label={field.label} name={field.name} rules={field.rules}>
          <InputNumber
            style={{ width: "100%" }}
            placeholder={field.placeholder}
            {...field.otherProps}
          />
        </Form.Item>
      )
    case "single-select":
    case "multi-select":
      return (
        <Form.Item label={field.label} name={field.name} rules={field.rules}>
          <Select
            placeholder={field.placeholder}
            style={{ width: "100%" }}
            mode={field.type === "multi-select" ? "multiple" : undefined}
            showSearch={(field.list?.length || 0) > 10}
            {...field.otherProps}>
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
            placeholder={field.placeholder}
            {...field.otherProps}
          />
        </Form.Item>
      )
    case "file":
      return (
        <Form.Item label={field.label} name={field.name} rules={field.rules}>
          <Upload
            style={{ width: "100%" }}
            placeholder={field.placeholder}
            {...field.otherProps}>
            <Button>Upload File</Button>
          </Upload>
        </Form.Item>
      )
    default:
      return null
  }
}
