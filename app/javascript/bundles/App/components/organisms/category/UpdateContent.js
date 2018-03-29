// @flow
import React from 'react'
import {Form, Field} from 'react-final-form'
import setFieldData from 'final-form-set-field-data'
import Card from 'material-ui/Card/Card'
import MenuItem from 'material-ui/MenuItem/MenuItem'
import Delete from 'material-ui/svg-icons/action/delete'
import {pink300} from 'material-ui/styles/colors'
import {composeValidators, required} from "../../../helper/Validate"
import FormField from "../../atoms/FormField"
import AutoSave from '../AutoSave'
import ErrorHOC from '../../../containers/hoc/ErrorHOC'

type Props = {
  list: Array<any>,
  onClickDelete: Function,
  onSubmitDetail: Function
}

const CategoriesContent = (props: Props) => {

  return (
    <Card>
      {props.list && props.list.map((e, index) => {
        return (
          <Form
            key={index}
            initialValues={{id: e.id, name: e.name}}
            onSubmit={props.onSubmitDetail}
            mutators={{setFieldData}}>
            {({ mutators }) => {
              return (
                <div style={{position: "relative"}}>
                  <AutoSave setFieldData={mutators.setFieldData} save={props.onSubmitDetail}/>
                  <MenuItem
                    style={{paddingTop: " 16px", paddingBottom: "16px"}}
                    rightIcon={<Delete color={pink300} onClick={() => props.onClickDelete(e.id)}/>}>
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

export default ErrorHOC(CategoriesContent)