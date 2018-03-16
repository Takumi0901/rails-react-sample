import React from 'react'
import {Form, Field} from 'react-final-form'
import Card from 'material-ui/Card/Card'
import MenuItem from 'material-ui/MenuItem/MenuItem'
import Delete from 'material-ui/svg-icons/action/delete'
import Create from 'material-ui/svg-icons/content/create'
import ContentAdd from 'material-ui/svg-icons/content/add'
import FormField from "../atoms/FormField"
import {composeValidators, required} from "../../helper/Validate"
import {grey300, green300} from 'material-ui/styles/colors'
import FloatingActionButton from 'material-ui/FloatingActionButton';

const CategoriesContent = ({list, onClickDelete, isEdit, onClickEdit, onSubmitDetail}) => {

  const style = {
    position: "absolute",
    top: "50%",
    right: "24px",
    marginTop: "-32px"
  }

  return (
    <Card>
      {list && list.map((e, index) => {
        return (
          <Form
            key={index}
            initialValues={{id: e.id, name: e.name}}
            onSubmit={onSubmitDetail}
            render={({ handleSubmit, pristine, invalid }) => (
              <form style={{position: "relative"}}>
                <MenuItem
                  style={{paddingTop: " 16px", paddingBottom: "16px"}}
                  leftIcon={<Delete color={grey300} onClick={() => onClickDelete(e.id)}/>}>
                    <Field
                      name="name"
                      component={FormField}
                      floatingLabelFixed={true}
                      fullWidth={true}
                      validate={composeValidators(required)}
                    />
                </MenuItem>
                <FloatingActionButton mini={true} style={style}>
                  <Create onClick={handleSubmit}/>
                </FloatingActionButton>
              </form>
            )}
          />
        )
      })}
    </Card>
  )
}

export default CategoriesContent