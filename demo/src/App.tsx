import { Typography } from "antd"
import "antd/dist/antd.css"
import { CustomForm } from "../../src"
import { IFieldGroup } from "../../src/types"

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
    <div style={{ width: "70vw", marginInline: "auto" }}>
      <Typography.Title>Basic Form</Typography.Title>
      <CustomForm
        fieldsGroups={fieldsGroups}
        onSubmit={handleSubmit}
        resetButton={false}
        layout="vertical"
        initialValue={{
          firstName: "Osama",
          age: 27,
          color: "teal",
          dob: new Date(),
        }}
      />
    </div>
  )
}

export default App
