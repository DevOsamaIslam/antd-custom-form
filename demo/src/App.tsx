import { Typography } from "antd"
import "antd/dist/antd.css"
import { CustomForm, IFieldGroup } from "../../src"
import moment, { Moment } from "moment"

interface Fields {
  firstName: string
  age: number
  color: string
  dob: Moment
  hobbies: string[]
  gender?: "male" | "female"
  isEnabled?: boolean
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
        fieldsGroups={fieldsGroups}
        onSubmit={handleSubmit}
        resetButton={false}
        layout="vertical"
        initialValues={{
          firstName: "Osama",
          age: 27,
          color: "teal",
          dob: moment(),
          hobbies: [],
        }}
      />
    </div>
  )
}

export default App
