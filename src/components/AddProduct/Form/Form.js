import './Form.css'

function Form() {
    return (
        <form action="#" method="post">
            <fieldset>
                <legend>Add new Product</legend>
                <p class="field">
                    <label for="name">Name</label>
                    <span class="input">
                        <input type="text" name="name" id="name" placeholder="Name" />
                        <span class="actions"></span>
                    </span>
                </p>
                <p class="field">
                    <label for="name">Price</label>
                    <span class="input">
                        <input type="text" name="price" id="price" placeholder="Price" />
                        <span class="actions"></span>
                    </span>
                </p>
                <p class="field">
                    <label for="description">Description</label>
                    <span class="input">
                        <textarea rows="4" cols="45" type="text" name="description" id="description"
                            placeholder="Description"></textarea>
                        <span class="actions"></span>
                    </span>
                </p>
                <p class="field">
                    <label for="image">Image</label>
                    <span class="input">
                        <input type="text" name="image" id="image" placeholder="Image" />
                        <span class="actions"></span>
                    </span>
                </p>
                <p class="field">
                    <label for="category">Category</label>
                    <span class="input">
                        <select type="text" name="category">
                            <option>Rods</option>
                            <option>Reels</option>
                            <option>Lines</option>
                            <option>Hooks</option>
                            <option>Baits</option>
                        </select>
                        <span class="actions"></span>
                    </span>
                </p>
                <input class="button" type="submit" class="submit" value="Add Product" />
            </fieldset>
        </form>
    )
}

export default Form
