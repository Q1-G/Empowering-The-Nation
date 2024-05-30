import { SelectList } from 'react-native-dropdown-select-list'

const App = () => {

  const [selected, setSelected] = React.useState("");
  
  const data = [
      {key:'1', value:'Rosebank', disabled:true},
      {key:'2', value:'Sandton'},
      {key:'3', value:'Alberton'},
  ]

  return(
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
    />
  )

};