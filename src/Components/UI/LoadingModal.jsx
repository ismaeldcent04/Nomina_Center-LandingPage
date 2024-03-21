import { Modal } from "react-bootstrap"
import { BarLoader, BeatLoader, FadeLoader } from "react-spinners"

export const LoadingModal = ()=>{

    return(
      <Modal
      show={true}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      height
      dialogClassName="loading_modal"
    >
      <Modal.Header >
      </Modal.Header>
      <Modal.Body >
        <div style={{margin:"0 auto", textAlign:"center"}}>
            
            <FadeLoader color="#2768e5" loading cssOverride={{margin:"0 auto"}}/>
            <h5 style={{marginTop:"10px"}}>Iniciando sesión</h5>
        </div>
      </Modal.Body>
    </Modal>
    )
}