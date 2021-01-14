import { useState } from 'react'

export default function CardManager(props) {
  const { options } = props
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return <div></div>
}
