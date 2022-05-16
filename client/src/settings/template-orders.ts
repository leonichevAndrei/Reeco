export const templateOrder = {
    "id": 0,
    "supplier": "East coast fruits & vegetables",
    "shippingDate": "2022-12-22T18:22:22.511Z",
    "total": "",
    "categoryIDs" : [ 1, 2, 3, 4, 5, 6, 7, 8 ],
    "department" : "300-444-678",
    "status" : "awaiting",
    "items" : [
      {
        "id": 1,
        "productID": 1,
        "price": 11,
        "quantity": 15,
        "status": "none",
        "updated": [],
        "updReason": ""
      },
      {
        "id": 2,
        "productID": 2,
        "price": 22,
        "quantity": 20,
        "status": "approved",
        "updated": [],
        "updReason": ""
      },
      {
        "id": 3,
        "productID": 1,
        "price": 33,
        "quantity": 25,
        "status": "approved",
        "updated": ["price"],
        "updReason": "price-not-same"
      },
      {
        "id": 4,
        "productID": 2,
        "price": 44,
        "quantity": 30,
        "status": "approved",
        "updated": ["quantity"],
        "updReason": "quantity-not-same"
      },
      {
        "id": 5,
        "productID": 1,
        "price": 55,
        "quantity": 35,
        "status": "approved",
        "updated": ["price", "quantity"],
        "updReason": "missing-product"
      },
      {
        "id": 6,
        "productID": 2,
        "price": 66,
        "quantity": 40,
        "status": "missing",
        "updated": [],
        "updReason": ""
      },
      {
        "id": 7,
        "productID": 1,
        "price": 77,
        "quantity": 45,
        "status": "missing-urgent",
        "updated": [],
        "updReason": ""
      }
    ]
  }
  export const templateOrderClean = {
    "id": 0,
    "supplier": "East coast fruits & vegetables",
    "shippingDate": "2022-12-22T18:22:22.511Z",
    "total": "",
    "categoryIDs" : [ 1, 2, 3, 4, 5, 6, 7, 8 ],
    "department" : "300-444-678",
    "status" : "awaiting",
    "items" : [
      {
        "id": 1,
        "productID": 1,
        "price": 11,
        "quantity": 15,
        "status": "none",
        "updated": [],
        "updReason": ""
      },
      {
        "id": 2,
        "productID": 2,
        "price": 22,
        "quantity": 20,
        "status": "none",
        "updated": [],
        "updReason": ""
      },
      {
        "id": 3,
        "productID": 1,
        "price": 33,
        "quantity": 25,
        "status": "none",
        "updated": [],
        "updReason": ""
      },
      {
        "id": 4,
        "productID": 2,
        "price": 44,
        "quantity": 30,
        "status": "none",
        "updated": [],
        "updReason": ""
      },
      {
        "id": 5,
        "productID": 1,
        "price": 55,
        "quantity": 35,
        "status": "none",
        "updated": [],
        "updReason": ""
      },
      {
        "id": 6,
        "productID": 2,
        "price": 66,
        "quantity": 40,
        "status": "none",
        "updated": [],
        "updReason": ""
      },
      {
        "id": 7,
        "productID": 1,
        "price": 77,
        "quantity": 45,
        "status": "none",
        "updated": [],
        "updReason": ""
      }
    ]
  }
  export const emptyItem = {
    "id": -1,
    "productID": -1,
    "price": 0,
    "quantity": 0,
    "status": "",
    "updated": [],
    "updReason": ""
  }