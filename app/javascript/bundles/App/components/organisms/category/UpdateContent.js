// @flow
import React from 'react'
import {Form, Field} from 'react-final-form'
import setFieldData from 'final-form-set-field-data'
import Card from 'material-ui/Card/Card'
import MenuItem from 'material-ui/MenuItem/MenuItem'
import Delete from 'material-ui/svg-icons/action/delete'
import {pink300} from 'material-ui/styles/colors'
import FormField from "../../atoms/FormField"
import {composeValidators, required} from "../../../helper/Validate"
import AutoSave from '../AutoSave'


type Props = {
  list: Array<any>,
  onClickDelete: Function,
  onSubmitDetail: Function
}

const CategoriesContent = ({list, onClickDelete, onSubmitDetail}: Props) => {

  return (
    <Card>
      {list && list.map((e, index) => {
        return (
          <Form
            key={index}
            initialValues={{id: e.id, name: e.name}}
            onSubmit={onSubmitDetail}
            mutators={{setFieldData}}>
            {({ mutators }) => {
              return (
                <div style={{position: "relative"}}>
                  <AutoSave setFieldData={mutators.setFieldData} save={onSubmitDetail}/>
                  <MenuItem
                    style={{paddingTop: " 16px", paddingBottom: "16px"}}
                    rightIcon={<Delete color={pink300} onClick={() => onClickDelete(e.id)}/>}>
                    <Field
                      name="name"
                      component={FormField}
                      floatingLabelFixed={true}
                      fullWidth={true}
                      validate={composeValidators(required)}
                    />
                  </MenuItem>
                </div>
              )
            }}

          </Form>
        )
      })}
    </Card>
  )
}

export default CategoriesContent