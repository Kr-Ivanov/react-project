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
            }
            let product = db.collection('products')
                .doc('products')
                .collection(category)
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
        <form onSubmit={addProduct}>
            <h1>Add new Product</h1>

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

            <button>Add product</button>
        </form >
    )
}

export default Form
