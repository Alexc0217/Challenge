import { React, useState, useEffect } from "react";
import { Input, FormHelperText } from "@mui/material";

export function CustomInput(props){
  const [helperText, setHelperText] = useState("");
  const [fieldValue, setFieldValue] = useState("");
  
  const validateEmail = (email) => {
    const regex = new RegExp(
      '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'    
    )

    return regex.test(email);
  }

  const handleChange = (e) => {
    setFieldValue(e.target.value);
    props.onChange?.(e);    
  };

  useEffect(() => {
    if(props.type === "email"){
      if(!validateEmail(fieldValue)){
        fieldValue && setHelperText("Formato de e-mail inválido.");
        fieldValue === "" && setHelperText("");
        props.error?.(true);
      }else{
        setHelperText("");
        props.error?.(false);
      }
    }
  }, [fieldValue])


  return (
    <>
      <Input
        name={props.name}
        id={props.id}
        key={props.key}
        onChange={(e) => handleChange(e)}
        required={props.required}
        label={props.label}
        placeholder={props.placeholder}
        variant="outlined"
        type="text"
        inputProps={{
          style: {
            height: "40px",
            fontSize: "20px",
          }
        }}
      />
      {helperText && <FormHelperText style={{color: "red", fontSize: "15px"}}>{helperText}</FormHelperText>}
    </>
  )
}