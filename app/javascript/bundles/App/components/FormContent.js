import React from "react"
import {Field} from 'redux-form'
import FormField from "./FormField";
import RaisedButton from 'material-ui/RaisedButton'
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';

export default class FormContent extends React.Component {
  render() {
    const {card, onSubmit, onDelete} = this.props
    return (
      <Card>
        <CardTitle title={card.title} subtitle={card.subtitle} />
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
        <CardActions>
          {onSubmit &&
            <RaisedButton
              label={onSubmit.label}
              onClick={onSubmit.method}
              primary={true}
            />
          }
          {onDelete &&
            <RaisedButton
              label="削除する"
              onClick={onDelete.method}
              secondary={true}
            />
          }
        </CardActions>
      </Card>
    )
  }
}