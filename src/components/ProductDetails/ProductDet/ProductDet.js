import { useState } from 'react';
import { useStateValue } from '../../../StateProvider';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import './ProductDet.css';
import { db } from '../../../utils/Firebase/firebase';


const ProductDet = ({ id, name, image, description, price, category }) => {
    const [{ admin, user, }, dispatch] = useStateValue();
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false)
    const [editModalIsOpen, setEditModalIsOpen] = useState(false)
    const history = useHistory();
    console.log(category);

    const editDoc = (e) => {
        e.preventDefault()
        let nameEdited = e.target.name.value;
        let priceEdited = e.target.price.value;
        let descriptionEdited = e.target.description.value;
        let imageEdited = e.target.image.value;
        let categoryEdited = e.target.category.value;
        console.log([nameEdited, priceEdited, descriptionEdited, imageEdited, categoryEdited])

        if (e.target.name.value !== '' &&
            e.target.price.value !== '' &&
            e.target.description.value !== '' &&
            e.target.image.value !== ''
        ) {
            db.collection('products')
                .doc(id)
                .update({
                    name: nameEdited,
                    price: priceEdited,
                    description: descriptionEdited,
                    image: imageEdited,
                    category: categoryEdited,
                })
        }
        history.push(`/categories/${categoryEdited}`);
    }

    const deleteDoc = () => {
        db.collection('products')
            .doc(id)
            .delete()
            .then(() => setDeleteModalIsOpen(false));
        history.replace(`/categories/${category}`);
    }

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                name: name,
                image: image,
                price: price,

            }
        });
    };

    return (
        <div className="productDet">
            <h2>{name}</h2>
            <img src={image} alt="" />
            <p>{description}</p>
            <p>{price}</p>
            {admin
                ?
                <>
                    <button onClick={() => setEditModalIsOpen(true)}>Edit</button>
                    <button onClick={() => setDeleteModalIsOpen(true)}>Delete</button>
                </>
                :
                <button onClick={addToBasket}>Add to basket</button>
            }

            <Modal className="modal__delete" isOpen={deleteModalIsOpen} ariaHideApp={false}>
                <h2>Are you sure, you want to delete this item</h2>
                <button className="delete__button" onClick={deleteDoc}>Delete Item</button>
                <button className="cancel__button" onClick={() => setDeleteModalIsOpen(false)}>Cancel</button>
            </Modal>
            <Modal className="modal__edit" isOpen={editModalIsOpen} ariaHideApp={false}>

                <div className="modal__edit-cont">
                    <div className="modal__edit-container">
                        <form onSubmit={editDoc}>
                            <h5 >Name</h5>
                            <input type="text" name="nameEdited" id="name" placeholder="Name" defaultValue={name} />

                            <h5 >Price</h5>
                            <input type="text" name="priceEdited" id="price" placeholder="Price" defaultValue={price} />

                            <h5 >Description</h5>
                            <textarea rows="4" cols="45" type="text" name="descriptionEdited" id="description" defaultValue={description}
                                placeholder="Description"></textarea>

                            <h5 >Image</h5>
                            <input type="text" name="imageEdited" id="image" placeholder="Image" defaultValue={image} />

                            <h5 >Category</h5>
                            <select type="text" name="category" defaultValue={category} >
                                <option value="Rods">Rods</option>
                                <option value="Reels">Reels</option>
                                <option value="Lines">Lines</option>
                                <option value="Hooks">Hooks</option>
                                <option value="Baits">Baits</option>
                                <option value="Floats">Floats</option>
                            </select>
                            <button type="submit" className="edit__button" >Edit Item</button>
                        </form>
                        <button className="cancel__button" onClick={() => setEditModalIsOpen(false)}>Cancel</button>

                    </div >
                </div >
            </Modal>
        </div>
    )
}

export default ProductDet
