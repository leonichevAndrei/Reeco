export const templateOrder = {
    "id": 0,
    "supplier": "East coast fruits & vegetables",
    "shippingDate": "2012-04-23T18:25:43.511Z",
    "total": "15,028.3",
    "categoryIDs" : [ 1, 2, 3, 4, 5, 6, 7, 8 ],
    "department" : "300-444-678",
    "status" : "awaiting",
    "items" : [
      {
        "productID": 1,
        "price": 11,
        "quantity": 15,
        "status": "none",
        "updated": [],
        "updReason": ""
      },
      {
        "productID": 2,
        "price": 22,
        "quantity": 20,
        "status": "approved",
        "updated": [],
        "updReason": ""
      },
      {
        "productID": 1,
        "price": 33,
        "quantity": 25,
        "status": "approved",
        "updated": ["price"],
        "updReason": "Price is not the same"
      },
      {
        "productID": 2,
        "price": 44,
        "quantity": 30,
        "status": "approved",
        "updated": ["quantity"],
        "updReason": "Quantity is not the same"
      },
      {
        "productID": 1,
        "price": 55,
        "quantity": 35,
        "status": "approved",
        "updated": ["price", "quantity"],
        "updReason": "Missing product"
      },
      {
        "productID": 2,
        "price": 66,
        "quantity": 40,
        "status": "missing",
        "updated": [],
        "updReason": ""
      },
      {
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
    "shippingDate": "2012-04-23T18:25:43.511Z",
    "total": "15,028.3",
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