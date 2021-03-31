import { db } from '../../../utils/Firebase/firebase';
import { useHistory } from 'react-router-dom'
import './Form.css'

function Form() {

    const history = useHistory();

    const addProduct = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let price = e.target.price.value;
        let description = e.target.description.value;
        let image = e.target.image.value;
        let category = e.target.category.value;

        if (e.target.name.value !== '' &&
            e.target.price.value !== '' &&
            e.target.description.value !== '' &&
            e.target.image.value !== ''
        ) {
            let newProduct = {
                name,
                price,
                description,
                image,
                category
            }
            let product = db.collection('products')
                .doc()

            product.set({
                ...newProduct,
                id: product.id
            })
                .then((res) => {
                    e.target.name.value = ''
                    e.target.price.value = ''
                    e.target.description.value = ''
                    e.target.image.value = ''
                    history.replace(`/categories/${category}`)

                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className="addProduct" >

            <div className="addProduct__container">
                <h1>Add new Product</h1>
                <form onSubmit={addProduct} >

                    <h5>Name</h5>
                    <input type="text" name="name" id="name" placeholder="Name" />

                    <h5>Price</h5>
                    <input type="text" name="price" id="price" placeholder="Price" />

                    <h5>Description</h5>
                    <textarea rows="4" cols="45" type="text" name="description" id="description"
                        placeholder="Description"></textarea>

                    <h5>Image</h5>
                    <input type="text" name="image" id="image" placeholder="Image" />

                    <h5>Category</h5>
                    <select type="text" name="category">
                        <option>Rods</option>
                        <option>Reels</option>
                        <option>Lines</option>
                        <option>Hooks</option>
                        <option>Baits</option>
                    </select>

                    <button className="addProduct__button-addProduct">Add product</button>
                </form >
            </div>

        </div>

    )
}

export default Form
