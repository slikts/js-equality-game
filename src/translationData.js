import latvian from "./translations/lv-LV.json"
import english from "./translations/en-US.json"

const translationData = new Map() //
  .set(`en-US`, { data: english, name: `English` })
  .set(`lv-LV`, { data: latvian, name: `Latvian` })

export default translationData
