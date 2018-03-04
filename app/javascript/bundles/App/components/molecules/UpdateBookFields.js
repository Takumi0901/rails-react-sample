import React from "react"
import {Field} from 'redux-form'
import FormField from "../atoms/FormField"
import {CardText} from 'material-ui/Card'

const UpdateBookFields = () => (
  <CardText>
    <form>
      <Field
        name="name"
        component={FormField}
        hintText="例) ドラゴンボール"
        floatingLabelText="本のタイトルを入力"
        floatingLabelFixed={true}
        fullWidth={true}
      />
      <Field
        component={FormField}
        name="about"
        hintText="例) cha-ra he-cha-ra"
        floatingLabelText="本の説明文を入力"
        multiLine={true}
        fullWidth={true}
        rows={4}
        rowsMax={4}
      />
    </form>
  </CardText>
)

export default UpdateBookFields