const initState = {
    products: [
        {id: 1, name: 'man t-shirt summer season', image: 'https://cdn.shopify.com/s/files/1/0623/8850/2700/products/WM0033_700x.png?v=1654782386', price: 20, discount: 2, discountPrice: 20  - 2 / 100 * 20, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
        {id: 2, name: 'woman jacket for summer', image: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2019/8/31/d11b8a54-6750-4bbc-bb33-82d46f33d8561567243407133-1.jpg', price: 30, discount: 5, discountPrice: 30  - 5 / 100 * 30, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
        {id: 3, name: 'man trouser for all seasons', image: 'https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/n/u/9/38-t686-trouser-baleno-light-sgrey-aa-ad-av-original-imagyvfera9ygbx2-bb.jpeg?q=70', price: 15, discount: 3, discountPrice: 15  - 3 / 100 * 15, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
        {id: 4, name: 'shoes for all season', image: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/l/q/2/-original-imaghvb38tysbvtb.jpeg?q=70', price: 50, discount: 4, discountPrice: 50  - 4 / 100 * 50, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
        {id: 5, name: 'female soot for summer', image: 'https://i.pinimg.com/474x/8c/4d/6a/8c4d6af8ff938a320d7768fd69d65f0c.jpg', price: 25, discount: 2, discountPrice: 25  - 2 / 100 * 25, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
        {id: 6, name: 'male jeans', image: 'https://rukminim1.flixcart.com/image/832/832/xif0q/jean/w/f/u/30-hljn000690-highlander-original-imafpchxfs6zzjyh-bb.jpeg?q=70', price: 60, discount: 6, discountPrice: 60  - 6 / 100 * 60, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
        {id: 7, name: 'male trouser for all seasons', image: 'https://rukminim1.flixcart.com/image/832/832/klscivk0/trouser/q/q/k/28-sktr-4242-olv-fubar-original-imagyuff8uq6cxny.jpeg?q=70', price: 35, discount: 2, discountPrice: 35  - 2 / 100 * 35, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
        {id: 8, name: 'male jacket for winter', image: 'https://rukminim1.flixcart.com/image/832/832/k0zlsi80/jacket/m/h/j/l-mens-jkt-009-mrn-candy-house-original-imafg4hzyjzfffq2.jpeg?q=70', price: 80, discount: 7, discountPrice: 80  - 7 / 100 * 80, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
        {id: 9, name: 'male jacket for all season', image: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1491521/2016/8/26/11472194210257-Campus-Sutra-Black-Bomber-Jacket-3981472194210038-1.jpg', price: 95, discount: 4, discountPrice: 95  - 4 / 100 * 95, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},        
        {id: 10, name: 'male winter jacket', image: 'https://rukminim1.flixcart.com/image/832/832/kx50gi80/jacket/p/h/8/s-no-rs19newbjk-gy-rope-original-imag9nypgcbfrxza.jpeg?q=70', price: 120, discount: 3, discountPrice: 120  - 3 / 100 * 120, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},        

    ],
    product: {}
}
const ProductsReducer = (state = initState, action) => {
    switch(action.type){
        case "PRODUCT": 
        return {...state, product: state.products.find(product => product.id === parseInt(action.id))}
        default: 
        return state;
    }
}
export default ProductsReducer;