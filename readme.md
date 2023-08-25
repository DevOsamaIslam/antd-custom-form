# antd-custom-form

A custom form component built with Ant Design, providing a flexible and easy-to-use interface for creating forms.

## Features

- Supports various field types including text, number, select, date, and file.
- Integrates seamlessly with Ant Design's form components.
- Provides a flexible layout with Ant Design's grid system.
- Customizable action buttons with placement options.
- Supports initial values for the form.

## Installation

```bash
npm i antd-custom-form
```

or

```bash
yarn add antd-custom-form
```

or

## Usage

Here's a basic example of how to use the `CustomForm` component:

```ts
import React from "react"
import { CustomForm, IFieldGroup } from "antd-custom-form"
import { Typography } from "antd"

interface Fields {
  firstName: string
  age: number
  color: string
  dob: Date
}

function App() {
  const fieldsGroups: IFieldGroup<Fields> = [
    [
      {
        label: "Name",
        name: "firstName",
        type: "text",
        rules: [{ required: true, message: "Please enter a name" }],
      },
      {
        label: "Age",
        name: "age",
        type: "number",
      },
    ],
    [
      {
        label: "Favorite Color",
        name: ["color"],
        type: "single-select",
        list: [
          { label: "Red", value: "red" },
          { label: "Blue", value: "blue" },
          { label: "Green", value: "green" },
        ],
      },
      {
        label: "Date of Birth",
        name: "dob",
        type: "date",
      },
    ],
  ]

  const handleSubmit = (data: Fields) => {
    console.log("Form Data:", data)
  }

  return (
    <>
      <Typography.Title>Basic Form</Typography.Title>
      <CustomForm
        fieldsGroups={fieldsGroups}
        onSubmit={handleSubmit}
        resetButton={false}
        layout="vertical"
      />
    </>
  )
}
```

## Props

### Form

| Prop                     | Required? | Default      | Description                                                      |
| ------------------------ | --------- | ------------ | ---------------------------------------------------------------- |
| `fieldsGroups`           | Yes       | -            | An array of field groups. Each group is an array of fields.      |
| `onSubmit`               | Yes       | -            | Callback function when the form is submitted.                    |
| `formControl`            | No        | -            | Ant Design's form instance.                                      |
| `initialValue`           | No        | -            | Initial values for the form fields.                              |
| `layout`                 | No        | "horizontal" | Form layout. Can be "horizontal", "vertical", or "inline".       |
| `actionButtonsPlacement` | No        | "end"        | Placement of action buttons. Can be "start", "center", or "end". |
| `submitButton`           | No        | `true`       | Props for the submit button or a boolean to show/hide.           |
| `resetButton`            | No        | `true`       | Props for the reset button or a boolean to show/hide.            |
| `formProps`              | No        | -            | Additional props for Ant Design's Form component.                |

### Field

| Prop         | Required?     | Default | Description                                                                                      |
| ------------ | ------------- | ------- | ------------------------------------------------------------------------------------------------ |
| `label`      | Yes           | -       | The label text for the field.                                                                    |
| `name`       | Yes           | -       | The name of the field. Can be a string or an array of strings (for nested fields).               |
| `type`       | Yes           | -       | The type of the field. Can be "text", "number", "single-select", "multi-select", "date", "file". |
| `list`       | Conditional\* | -       | An array of options for select fields. Each option has a label and a value.                      |
| `rules`      | No            | -       | An array of validation rules for the field.                                                      |
| `otherProps` | No            | -       | Additional props that can be passed to the underlying Ant Design component.                      |
| `span`       | No            | `24`    | The span of the field in the grid. Represents the width of the field in the form layout.         |

\* The `list` prop is required only when the `type` is either `single-select` or `multi-select`.
For other field types, the `list` prop should not be provided.

---

## License

MIT
