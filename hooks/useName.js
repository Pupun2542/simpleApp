import axios from 'axios';
import React, { useState } from 'react'

const useName = (defaultvalue) => {
    const [value, setValue] = useState(defaultvalue);
    const apiPath = "/api"
    const valuePath = apiPath.concat("/value");

    const getValue = async()=> {
        try {
            const res = await axios.get(valuePath);
            if (res.status === 200) {
                setValue(res.data);
            }
            
        } catch (err) {
            alert(err)
        }
    }
    const updateValue = async (e)=> {
        e.preventDefault()
        try {
            const res = await axios.post(valuePath, {
                name: e.target.name.value
            });
            if (res.status === 200) {
                alert("update data successful")
            }
        } catch(err) {
            alert(err)
        }
    }
  return {
    getValue,
    updateValue,
    value
  }
}

export default useName