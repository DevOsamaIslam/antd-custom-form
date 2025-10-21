# antd-custom-form 🚀

Say goodbye to the boilerplate blues! Introducing `antd-custom-form`, your one-stop shop for all things form-related in Ant Design. Create forms that are as easy to set up as they are on the eyes.

## Features 🌟

- 📝 **Versatile Fields**: Text, number, select, date, file—you name it, we've got it.
- 🐜 **Ant Design BFF**: Seamlessly integrates with your favorite UI library.
- 📐 **Flexible Layout**: Uses Ant Design's grid system to make your forms look like a million bucks.
- 🎬 **Action Button Customization**: Place 'em where you want 'em.
- 🎁 **Initial Values**: Because sometimes, you just want to give your users a head start.

## Installation 🛠️

```bash
# With npm
npm i antd-custom-form

# Or if you're a yarn person
yarn add antd-custom-form
```

## Props 📚

### For the Form 📋

- `fieldGroups` - Required. An array of field groups. It's like Inception but for forms.
- `onSubmit` - Required. What happens in the form, stays in the form—until you submit it.
- `formControl` - Optional. Your very own Ant Design form instance.
- `initialValue` - Optional. Pre-fill like a pro.
- `layout` - Optional. "horizontal" by default. How do you like your forms? Stacked or side-by-side?
- `actionButtonsPlacement` - Optional. "end" by default. Where the action happens.
- `submitButton` - Optional. `true` by default. The button that seals the deal.
- `resetButton` - Optional. `true` by default. The button that says, "Let's start over, shall we?"
- `formProps` - Optional. Extra props? Yes, please!

### For the Fields 🌱

- `label` - Required. What's in a name? Well, a lot actually.
- `name` - Required. The key to your field's heart.
- `type` - Required. The personality of your field.
- `list` - Conditional. The options that make your select fields happy.
- `rules` - Optional. Keep your fields in check.
- `hide` - Optional. `false` by default. Whether to render.
- `formItemProps` - Optional. The props for each form item.
- `inputProps` - Optional. The custom spices for each input.
- `span` - Optional. `24` by default. How much personal space to give your field?

> 🤔 The `list` prop is only required for `single-select`, `multi-select` and `toggle`. For other field types, it's a "thanks, but no thanks" situation.

### Custom Field Types 🧩

#### Custom Node (`type: 'custom'`)
Custom nodes allow you to add any React component as a standalone element in your form layout. This is perfect for adding dividers, custom HTML elements, or any other React component that doesn't need to be part of the form data flow.

- `type` must be set to `'custom'`
- `label` - The React component to render

#### Custom Input (`type: 'custom-input'`)
Custom inputs allow you to create completely custom form fields that integrate with the form's data flow. These fields will be wrapped in a Form.Item and participate in form validation and submission.

- `type` - Must be set to `'custom-input'`
- `component` - Function that returns your custom component

The `component` function receives two parameters:
- `value`: The current value of the field
- `onChange`: A function to update the field's value

## Usage 🎨

Ready to create your first masterpiece? Here's a quick example to get you started:

```ts
import React from "react"
import { CustomForm, IFieldGroup } from "antd-custom-form"
import { Typography, Divider, Input } from "antd"

interface Fields {
  firstName: string
  age: number
  color: string
  dob: Moment
  hobbies: string[]
  gender?: "male" | "female"
  isEnabled?: boolean
  bio: string
  customValue: string
}

function App() {
  const fieldsGroups: IFieldGroup<Fields> = [
    [
      {
        label: "Name",
        name: "firstName",
        type: "text",
        rules: [{ required: true, message: "Please enter a name" }],
        hide: true,
        formItemProps: {
          validateStatus: "success",
          hasFeedback: true,
        },
      },
      {
        label: "Age",
        name: "age",
        type: "number",
      },
    ],
    [
      {
        type: 'custom',
        label: <Divider />,
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
    [
      {
        label: "Hobbies",
        name: "hobbies",
        type: "checkbox",
        list: [
          { label: "Hobby 1", value: "h1" },
          { label: "Hobby 2", value: "h2" },
        ],
      },
      {
        label: "Gender",
        name: "gender",
        type: "radio",
        list: [
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
        ],
      },
    ],
    [
      {
        label: "Bio",
        name: "bio",
        type: "textarea",
      },
      {
        label: "Is Active?",
        name: "isEnabled",
        type: "toggle",
        list: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
    ],
    [
      {
        label: "Custom Input",
        name: "customValue",
        type: "custom-input",
        component: (value, onChange) => (
          <YourCustomInput
            value={value}
            onChange={onChange}
          />
        ),
        rules: [{ required: true, message: "Please enter a custom value" }],
      },
    ],
  ]

  const handleSubmit = (data: Fields) => {
    console.log("Form Data:", data)
  }

  return (
    <div style={{ width: "70vw", marginInline: "auto" }}>
      <Typography.Title>Basic Form</Typography.Title>
      <CustomForm
        fieldGroups={fieldsGroups}
        onSubmit={handleSubmit}
        resetButton={false}
        layout="vertical"
        initialValues={{
          firstName: "Osama",
          age: 27,
          color: "teal",
          dob: moment(),
          hobbies: [],
          bio: "",
        }}
      />
    </div>
  )
}
```

---

## License 📜

MIT
