import { Divider, Typography } from "antd"
import "antd/dist/antd.css"
import moment, { Moment } from "moment"
import { CustomForm, IFieldGroup } from "../../src"

interface Fields {
  firstName: string
  age: number
  color: string
  dob: Moment
  hobbies: string[]
  gender?: "male" | "female"
  isEnabled?: string
  bio: string
  customInput?: string
}

function App() {
  // optional
  // const [formHook] = Form.useForm()

  const fieldsGroups: IFieldGroup<Fields> = [
    [
      {
        label: "Name",
        name: "firstName",
        rules: [{ required: true, message: "Please enter a name" }],
        formItemProps: {
          validateStatus: "success",
          hasFeedback: true,
        },
        // hide: true,
      },
      {
        label: "Age",
        name: "age",
        type: "number",
      },
    ],
    [
      {
        type: "custom" as const,
        label: <Divider />,
      },
    ],
    [
      {
        label: "Custom Input",
        name: "customInput",
        type: "custom-input",
        component: (value, onChange) => (
          <input value={value} onChange={(e) => onChange(e.target.value)} />
        ),
        rules: [{ required: true, message: "Please enter custom input" }],
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
        type: "checkbox",
        list: [
          { label: "Yes", value: "true" },
          // { label: "No", value: false },
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
          isEnabled: "true",
          customInput: "Custom value",
        }}
      />
    </div>
  )
}

export default App
