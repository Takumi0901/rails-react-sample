// @flow
import React from "react"
import {Field} from 'react-final-form'
import FormField from "../../atoms/FormField"
import FormSelectField from "../../atoms/FormSelectField"
import {required, url, composeValidators} from "../../../helper/Validate"
import CardText from 'material-ui/Card/CardText'

const UpdateBookFields = ({categories}: {categories: Array<any>}) => (
  <CardText>
    <Field
      name="name"
      component={FormField}
      hintText="例) ドラゴンボール"
      floatingLabelText="本のタイトルを入力"
      floatingLabelFixed={true}
      fullWidth={true}
      validate={composeValidators(required)}
    />
    <Field
      component={FormField}
      name="author"
      hintText="例) 鳥山明"
      floatingLabelText="本の作者を入力"
      floatingLabelFixed={true}
      fullWidth={true}
      validate={composeValidators(required)}
    />
    <Field
      component={FormSelectField}
      name="categoryId"
      floatingLabelText="本のカテゴリを選択"
      floatingLabelFixed={true}
      fullWidth={true}
      list={categories}
      validate={composeValidators(required)}
    />
    <Field
      component={FormField}
      name="url"
      hintText="例) http://exampl.com"
      floatingLabelText="AmazonのURLを入力"
      floatingLabelFixed={true}
      fullWidth={true}
      validate={composeValidators(url)}
    />
    <Field
      component={FormField}
      name="description"
      hintText="例) cha-ra he-cha-ra"
      floatingLabelText="本の説明文を入力"
      multiLine={true}
      fullWidth={true}
      rows={4}
      rowsMax={4}
    />
  </CardText>
)

export default UpdateBookFields