import React from "react"
import Dropzone from 'react-dropzone'
import RaisedButton from 'material-ui/RaisedButton/RaisedButton'
import Avatar from 'material-ui/Avatar'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/clear'
import DropZoneHOC from '../../containers/hoc/DropZoneHOC'

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

const FieldDropZone = (props) => {
  return (
    <div style={{padding: "24px 0"}}>
      {Object.keys(props.dropDownImage).length > 0 ?
        <div>
          <Avatar
            src={props.dropDownImage.preview}
            size={200}
          />
          <FloatingActionButton mini={true} secondary={true} onClick={props.onHandleRemove}>
            <ContentAdd/>
          </FloatingActionButton>
        </div>
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