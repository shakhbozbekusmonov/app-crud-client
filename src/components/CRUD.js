import React, {Component} from 'react';
import {selectOptions} from "@testing-library/user-event/dist/select-options";

class Crud extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            selectedIndex: -1
        };
    };

    render() {

        const arrayMethods = () => {
            let numbers = [42, -23, 55, 39, -59, 49];

            for (let i = 0; i < numbers.length; i++){
                console.log(numbers[i]);
            }

            numbers.forEach((item, index, array) => {
                console.log(item, index, array);


                // item  ====>  numbers[i]
                // index ====>  i
            });

            // forEach() - qiymat, indeks, jadval qaytaradi har biriga amal qo'llash

            let mappedNumbers = numbers.map((item, index) => {
                return 1
            });

            console.log(mappedNumbers);

            // map() - qayta chizib beradi izlash deb tushunsak ham bo'ladi

            let filteredNumbers = numbers.filter((item, index) => {
                return item > 0;
            });

            console.log(filteredNumbers);

            // filter() - filter o'z nomi bilan filter qilib beradi

            let  sortedNumber = numbers.sort((item1, item2) => {
                return item1 - item2
            });

            console.log(sortedNumber);

            // sort() - sortirovka qilib beradi

            let numbers1 = [23, 12, 43], numbers2 = [565, 32];

            numbers1.push(...numbers2);

            console.log(numbers1);

            // push(...array) - arrayga yangi array ichidagi qiymatni oxiridan qo'shib qo'yish
        };
        arrayMethods();

        const addProduct = (event) => {
            // preventDefault() ==> sahifa yangilanib ketishini oldini oladi
            event.preventDefault();

            let productName = event.target.productName.value;
            let productPrice = event.target.productPrice.value;
            let productColor = event.target.productColor.value;

            // reset() ==> inputlarni ichini tozalab beradi
            event.target.reset();

            let newProduct = {
                name: productName,
                price: productPrice,
                color: productColor
            }

            if (this.state.selectedIndex > 0){
                this.state.products[this.state.selectedIndex] = newProduct;
                this.state.selectedIndex = -1
            } else {
                this.state.products.push(newProduct);
            }

            this.setState({
                products: this.state.products
            })
        }

        const deleteProduct = (index) => {
            this.state.products.splice(index, 1);

            this.setState({
                products: this.state.products
            });
        };

        const editProduct = (index) => {
            this.setState({
                selectedIndex: index
            });
        };

        return (
            <div className='container'>
                <div className="row">
                    <div className="col-3 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={addProduct}>
                                    <input
                                        type="text"
                                        defaultValue={this.state.products[this.state.selectedIndex]?.name}
                                        className="form-control"
                                        placeholder="Product name"
                                        name="productName"
                                    />
                                    <input
                                        type="number"
                                        defaultValue={this.state.products[this.state.selectedIndex]?.price}
                                        className="form-control mt-3"
                                        placeholder="Product price"
                                        name="productPrice"
                                    />
                                    <input
                                        type="color"
                                        defaultValue={this.state.products[this.state.selectedIndex]?.color}
                                        className="form-control mt-3"
                                        name="productColor"
                                    />
                                    <button
                                        type="submit"
                                        className="btn btn-success mt-3 ml-auto d-block">
                                        Add
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-9 mt-3">
                        <div className="row">
                            {this.state.products.map((item, index) => {
                                return (
                                    <div className="col-4 mt-3">
                                        <div className="card">
                                            <div className="card-header">
                                                <h3>{item.name}</h3>
                                            </div>
                                            <div className="card-body">
                                                <p>Price: <b>{item.price}</b></p>
                                                <p>Color: <b>{item.color}</b></p>
                                            </div>
                                            <div className="card-footer d-flex justify-content-between align-items-center">
                                                <button type="button" className="btn btn-success" onClick={() => {editProduct(index)}}>Edit</button>
                                                <button type="button" className="btn btn-danger" onClick={() => {deleteProduct(index)}}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Crud;