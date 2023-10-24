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

| Prop                     | Required? | Default      | Description                                                      |
| ------------------------ | --------- | ------------ | ---------------------------------------------------------------- |
| `fieldGroups`           | Yes 🚨    | -            | An array of field groups. It's like Inception but for forms.     |
| `onSubmit`               | Yes 🚨    | -            | What happens in the form, stays in the form—until you submit it. |
| `formControl`            | No 🤷     | -            | Your very own Ant Design form instance.                          |
| `initialValue`           | No 🤷     | -            | Pre-fill like a pro.                                             |
| `layout`                 | No 🤷     | "horizontal" | How do you like your forms? Stacked or side-by-side?             |
| `actionButtonsPlacement` | No 🤷     | "end"        | Where the action happens.                                        |
| `submitButton`           | No 🤷     | `true`       | The button that seals the deal.                                  |
| `resetButton`            | No 🤷     | `true`       | The button that says, "Let's start over, shall we?"              |
| `formProps`              | No 🤷     | -            | Extra props? Yes, please!                                        |

### For the Fields 🌱

| Prop         | Required?      | Default | Description                                      |
| ------------ | -------------- | ------- | ------------------------------------------------ |
| `label`      | Yes 🚨         | -       | What's in a name? Well, a lot actually.          |
| `name`       | Yes 🚨         | -       | The key to your field's heart.                   |
| `type`       | Yes 🚨         | -       | The personality of your field.                   |
| `list`       | Conditional 🤔 | -       | The options that make your select fields happy.  |
| `rules`      | No 🤷          | -       | Keep your fields in check.                       |
| `hide`       | No 🤷          | false   | Whether to render.                               |
| `otherProps` | No 🤷          | -       | The standard sauce for your Ant Design components. |
| `span`       | No 🤷          | `24`    | How much personal space to give your field?      |

> 🤔 The `list` prop is only required for `single-select`, `multi-select` and `toggle`. For other field types, it's a "thanks, but no thanks" situation.

---

## Usage 🎨

Ready to create your first masterpiece? Here's a quick example to get you started:

```ts
import React from "react"
import { CustomForm, IFieldGroup } from "antd-custom-form"
import { Typography } from "antd"

interface Fields {
  firstName: string
  age: number
  color: string
  dob: Moment
  hobbies: string[]
  gender?: "male" | "female"
  isEnabled?: boolean
  bio: string
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
