import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://images.macrumors.com/t/e0o2RzHJ5cPlD4FgyKQ5jCdSGko=/1600x/article-new/2016/05/iphone8gold.jpg",
        "images": [
            "https://i.pcmag.com/imagery/articles/03Xtjkm0c708hMTMCDk4yhm-1.fit_lim.v1569488723.jpg",
            "https://i.pcmag.com/imagery/articles/03Xtjkm0c708hMTMCDk4yhm-1.fit_lim.v1569488723.jpg",
            "https://assets.thehansindia.com/h-upload/2020/01/21/255809-iphone.webp ",
            "https://images.macrumors.com/t/e0o2RzHJ5cPlD4FgyKQ5jCdSGko=/1600x/article-new/2016/05/iphone8gold.jpg"
        ]
    },
    {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://cdn.vox-cdn.com/thumbor/0sCYxx6i5MvJQKTh5e9pELHZPzM=/0x0:2040x1360/2040x1360/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/9599227/jbareham_171101_2099_A_0088_02.jpg",
        "images": [
            "https://www.apple.com/newsroom/images/product/iphone/standard/iphonex_front_crop_top_corner-splash_inline.jpg.large.jpg",
            "https://www.cnet.com/a/img/resize/755704844d1e6efc7481dc5c1ebf577eb1e7c733/hub/2017/10/31/312b3b6e-59b7-499a-aea4-9bc5f9721a21/iphone-x-54.jpg?auto=webp&width=768",
            "https://photos5.appleinsider.com/gallery/product_pages/105-hero.jpg",
            "https://image.cnbcfm.com/api/v1/image/104807570-iphone-x-10.JPG?v=1509410693&w=1600&h=900"
        ]
    },
    {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "category": "smartphones",
        "thumbnail": "https://cdn.wccftech.com/wp-content/uploads/2018/01/Galaxy-Note-8-9.jpg",
        "images": [
            "https://www.androidheadlines.com/wp-content/uploads/2018/07/Samsung-Galaxy-Note-9-Ice-Universe-Weibo-July-16-Collage.webp",
            "https://s.yimg.com/ny/api/res/1.2/MXgz5o24Q8sv9APQKRf1Wg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM5NQ--/https://media.zenfs.com/en-US/homerun/techmedianetwork.tomguide.com/b77e09709d4bdf218cbb5d7689642e75",
            "https://cdn.wccftech.com/wp-content/uploads/2018/01/Galaxy-Note-8-9.jpg"
        ]
    },
    {
        "id": 4,
        "title": "OPPOF19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 280,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "brand": "OPPO",
        "category": "smartphones",
        "thumbnail": "https://m.media-amazon.com/images/I/41VbEQTtOnL._AC_UF1000,1000_QL80_.jpg",
        "images": [
            "https://rukminim2.flixcart.com/image/850/1000/kn97te80/mobile/t/i/o/f19-pro-5g-cph2213-oppo-original-imagfz382yuhmggg.jpeg?q=90&crop=false",
            "https://tiimg.tistatic.com/fp/1/007/836/golden-yellow-color-6gb-ram-128gb-storage-48mp-triple-camera-5000-mah-battery-oppo-f19-smart-phone--864.jpg",
            "https://m.media-amazon.com/images/I/41VbEQTtOnL._AC_UF1000,1000_QL80_.jpg"
        ]
    },
    {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 499,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 32,
        "brand": "Huawei",
        "category": "smartphones",
        "thumbnail": "https://i.gadgets360cdn.com/products/large/1553612275_635_huawei_p30.jpg?downsize=*:360",
        "images": [
            "https://i.gadgets360cdn.com/products/large/1553612275_635_huawei_p30.jpg?downsize=*:360",
            "https://i.gadgets360cdn.com/products/large/1553612275_635_huawei_p30.jpg?downsize=*:360",
            "https://imei.org/storage/files/images/2859/preview/huawei-p30-pro-new-edition-1.png"
        ]
    }
  ],
  quantities: {
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1
  },
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    handleQuantityChange: (state, action) => {
      const { productId, newQuantity } = action.payload;
      state.quantities[productId] = newQuantity;
    },
    handleRemove: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter(product => product.id !== productId);
      delete state.quantities[productId];
    }
  }
});

export const { handleQuantityChange, handleRemove } = productSlice.actions;
export default productSlice.reducer;
