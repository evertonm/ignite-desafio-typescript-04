import { FormHandles } from "@unform/core";
import { useRef } from "react";
import { Form } from './styles';
import { Input } from '../Input';
import { Modal } from '../Modal';
import { FiCheckSquare } from 'react-icons/fi';


interface FoodProps {
    id: number;
    name: string;
    description: string;
    price: string;
    available: boolean;
    image: string;
}

interface ModalEditFoodProps {
    isOpen: boolean;
    editingFood: FoodProps;
    setIsOpen: () => void;
    handleUpdateFood: (food: FoodProps) => void;
}

export function ModalEditFood({ isOpen, editingFood, setIsOpen, handleUpdateFood }: ModalEditFoodProps) {
    const formRef = useRef<FormHandles>(null);

    async function handleSubmit(data: FoodProps) {
        handleUpdateFood(data);
        setIsOpen();
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
                <h1>Editar Prato</h1>
                <Input name="image" placeholder="Cole o link aqui" />

                <Input name="name" placeholder="Ex: Moda Italiana" />
                <Input name="price" placeholder="Ex: 19.90" />

                <Input name="description" placeholder="Descrição" />

                <button type="submit" data-testid="edit-food-button">
                    <div className="text">Editar Prato</div>
                    <div className="icon">
                        <FiCheckSquare size={24} />
                    </div>
                </button>
            </Form>
        </Modal>
    );
}