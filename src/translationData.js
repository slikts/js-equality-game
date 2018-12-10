import latvian from "./translations/lv-LV.json"
import english from "./translations/en-US.json"
import dutch from "./translations/nl-NL.json"

const translationData = new Map() //
  .set(`en-US`, { data: english, name: `English` })
  .set(`nl-NL`, { data: dutch, name: `Dutch` })
  .set(`lv-LV`, { data: latvian, name: `Latvian` })

export default translationData
