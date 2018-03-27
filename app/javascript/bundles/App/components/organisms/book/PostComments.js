// @flow
import React from "react"
import RaisedButton from 'material-ui/RaisedButton/RaisedButton'
import { Form, Field } from 'react-final-form'
import Card from 'material-ui/Card/Card'
import CardText from 'material-ui/Card/CardText'
import FormField from "../../atoms/FormField"

type Props = {
  onSubmit: Function
}

const PostComments = (props: Props) => {
  return (
    <Card style={{marginBottom: "24px"}}>
      <Form
        onSubmit={props.onSubmit}
        render={({ handleSubmit }) => (
          <CardText>
            <Field
              name="subject"
              component={FormField}
              hintText="例) コメント"
              floatingLabelText="コメントを入力"
              floatingLabelFixed={true}
              fullWidth={true}
            />
            <RaisedButton
              label={'コメントを登録'}
              onClick={handleSubmit}
              primary={true}
            />
          </CardText>
        )}
      />
    </Card>
  )
}

export default PostComments