// @flow
import React from "react"
import Dropzone from 'react-dropzone'
import RaisedButton from 'material-ui/RaisedButton/RaisedButton'
import Avatar from 'material-ui/Avatar/Avatar'
import FloatingActionButton from 'material-ui/FloatingActionButton/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/clear'


type Props = {
  dropDownImage: Object,
  onHandleRemove: Function,
  onHandleSelect: Function
}

const style = {
  width: 100 + '%',
  height: 200 + 'px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  borderColor: '#e5e5e5',
  borderStyle: 'dashed',
  borderRadius: 5
}


const FieldDropZoneInner = () => {
  return (
    <div style={{textAlign: "center"}}>
      <p style={{marginBottom: "16px"}}>アップロードするファイルをドロップ</p>
      <p style={{marginBottom: "16px"}}>または</p>
      <RaisedButton label={"ファイルを選択"}/>
    </div>
  )
}

const FieldDropZonePreview = (props: Props) => {
  return (
    <div>
      <Avatar
        src={props.dropDownImage.picture ? `/assets/images/${props.dropDownImage.picture}` : props.dropDownImage.preview}
        size={200}
      />
      <FloatingActionButton mini={true} secondary={true} onClick={props.onHandleRemove}>
        <ContentAdd/>
      </FloatingActionButton>
    </div>
  )
}

const FieldDropZone = (props: Props) => {
  return (
    <div style={{padding: "24px 0"}}>
      {Object.keys(props.dropDownImage).length > 0 ?
        <FieldDropZonePreview {...props}/>
        :
        <Dropzone
          style={style}
          activeStyle={{}}
          rejectStyle={{}}
          onDrop={props.onHandleSelect}
          multiple={false}
          accept={''}>
          <FieldDropZoneInner/>
        </Dropzone>
      }
    </div>
  )
}

export default FieldDropZone