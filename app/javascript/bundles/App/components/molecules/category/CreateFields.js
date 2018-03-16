// @flow
import React from "react"
import {Field} from 'react-final-form'
import FormField from "../../atoms/FormField"
import {composeValidators, required} from "../../../helper/Validate"
import CardText from 'material-ui/Card/CardText'

const CreateCategoryFields = () => (
  <CardText>
    <Field
      name="name"
      component={FormField}
      hintText="例) アクション"
      floatingLabelText="カテゴリ名を入力"
      floatingLabelFixed={true}
      fullWidth={true}
      validate={composeValidators(required)}
    />
  </CardText>
)

export default CreateCategoryFields