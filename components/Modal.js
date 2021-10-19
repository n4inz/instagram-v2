import {useRecoilState} from "recoil";
import {modalState} from "../atoms/modalAtom";
function Modal() {
    const [open, setOpen] = useRecoilState(modalState)
    console.log('Open',open)
    return (
       
        <div>
            {open && <p>The Modal Is Open</p>}
        </div>
    )
}

export default Modal
