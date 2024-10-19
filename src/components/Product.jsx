import React from 'react';

export function ProductRow() {
    return (
        <tr>
            <td>1</td>
            <td>Product 1</td>
            <td>100</td>
            <td>10</td>
        </tr>
    );
}
export function ProductCategoryRow() {
    return (
        <tr>
            <td colSpan="4">Fruits</td>
        </tr>
    );
}
export function ProductTable() {
    return (
        <table >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                <ProductCategoryRow />
                <ProductRow />
            </tbody>
        </table>
    );
}

export function SearchBar() {
    return (
        <>
            <input type="text" placeholder="Search..." />
            <div>
                <label>
                    <input type="checkbox" />
                    Only show products in stock
                </label>
            </div>
        </>
    );
}


export function FilterableProductTable() {
    return (
        <div>
            <SearchBar />
            <ProductTable />
            
        </div>
    );
}

