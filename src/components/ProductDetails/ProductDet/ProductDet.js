import { useState } from 'react';
import { useStateValue } from '../../../StateProvider';
import { Link, useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import './ProductDet.css';
import { db } from '../../../utils/Firebase/firebase';

const ProductDet = ({ id, name, image, description, price, category }) => {
    const [{ admin, user, basket }, dispatch] = useStateValue();
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false)
    const [editModalIsOpen, setEditModalIsOpen] = useState(false)
    const history = useHistory();

    const editDoc = () => {

    }

    const deleteDoc = () => {
        db.collection('products')
            .doc('products')
            .collection(category)
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
            <h2>{id}</h2>
            <h2>{name}</h2>
            <img src={image} alt="" />
            <p>{description}</p>
            <p>{price}</p>
            {admin &&
                <button onClick={() => setEditModalIsOpen(true)}>Edit</button>
            }
            {admin &&
                <button onClick={() => setDeleteModalIsOpen(true)}>Delete</button>

            }
            {user &&
                <button onClick={addToBasket}>Add to basket</button>
            }
            <Modal className="modal__delete" isOpen={deleteModalIsOpen}>
                <h2>Are you sure, you want to delete this item</h2>
                <button className="delete__button" onClick={deleteDoc}>Delete Item</button>
                <button className="cancel__button" onClick={() => setDeleteModalIsOpen(false)}>Cancel</button>
            </Modal>
            <Modal className="modal__edit" isOpen={editModalIsOpen}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Name" />

                <label htmlFor="name">Price</label>
                <input type="text" name="price" id="price" placeholder="Price" />

                <label htmlFor="description">Description</label>
                <textarea rows="4" cols="45" type="text" name="description" id="description"
                    placeholder="Description"></textarea>

                <label htmlFor="image">Image</label>
                <input type="text" name="image" id="image" placeholder="Image" />

                <label htmlFor="category">Category</label>
                <select type="text" name="category">
                    <option>Rods</option>
                    <option>Reels</option>
                    <option>Lines</option>
                    <option>Hooks</option>
                    <option>Baits</option>
                </select>
                <button className="edit__button" onClick={editDoc}>Delete Item</button>
                <button className="cancel__button" onClick={() => setEditModalIsOpen(false)}>Cancel</button>
            </Modal>
        </div>
    )
}

export default ProductDet
