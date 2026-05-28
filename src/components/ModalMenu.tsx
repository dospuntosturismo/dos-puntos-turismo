
import { Paquetes } from 'types/global'


interface ModalProps {
	setOpenModal: (open: boolean) => void;
	selectedFile: Paquetes;
}

const ModalMenu = ({ setOpenModal, selectedFile }: ModalProps) => {
	if (!selectedFile) return null;
	return (
		<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
			<div className='relative bg-white p-4 rounded max-w-[90%] max-h-[90%]'>
				<div className='overflow-y-auto max-h-[80vh] max-w-[80vw]'>
					<img src={selectedFile.imageInfo} alt={selectedFile.title} className='w-full h-auto object-contain' />
				</div>
				<button className='absolute top-2 right-2 px-3 py-1 bg-gray-200 rounded' onClick={() => setOpenModal(false)}>Cerrar</button>
			</div>
		</div>
	)
}

export default ModalMenu