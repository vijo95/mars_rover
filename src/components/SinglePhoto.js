import React, {useState} from 'react'
import { Image, Modal } from 'semantic-ui-react'

export default function SinglePhoto({img}) {

  const [open, setOpen] =   useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <div className="img_wrap_grid">
          <img alt=""
            className="img-post"
            width="100%"
            height="100%"
            src={img}
          />
        </div>
        }
    >
      <Modal.Content image>
        <Image fluid src={img} wrapped centered/>
      </Modal.Content>
    </Modal>
  )
}

  