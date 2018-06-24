define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/superbazar/cart/add",
    "title": "Add to cart",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>The id of Product passed as a body parameter(Required).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Product added successfully!\",\n           \"status\": 200,\n           \"data\": {\n               \"productId\": \"String\",\n               \"_id\": \"String\",\n               \"cartId\": \"String\",\n               \"created\": \"Date\",\n               \"lastModified\": \"Date\",\n               \"__v\": Number\n           }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"Error Occured\",\n            \"status\": 500,\n            \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cartRoute.js",
    "groupTitle": "create",
    "name": "PostApiV1SuperbazarCartAdd"
  },
  {
    "type": "post",
    "url": "/api/v1/superbazar/category/create",
    "title": "Create Category",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryName",
            "description": "<p>Name of the Category passed as a body parameter(Required).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Category created successfully\",\n           \"status\": 200,\n           \"data\": {\n               \"categoryName\": \"String\",\n               \"_id\": \"String\",\n               \"categoryId\": \"String\",\n               \"created\": \"Date\",\n               \"lastModified\": \"Date\",\n               \"__v\": Number\n           }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"Error Occured\",\n            \"status\": 500,\n            \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/categoryRoute.js",
    "groupTitle": "create",
    "name": "PostApiV1SuperbazarCategoryCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/superbazar/product/category/:categoryId/create",
    "title": "Create Product",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": "<p>The id of Category passed as a Url parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>Name of the Product passed as a body parameter(Required).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productDescription",
            "description": "<p>Description of the Product passed as a body parameter(Required).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "productPrice",
            "description": "<p>Price of the Product passed as a body parameter(Required).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productAvailability",
            "description": "<p>Availability of the Product(In stock/out of stock) passed as a body parameter(Required).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productCondition",
            "description": "<p>condition of the Product passed as a body parameter(Required).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "freeDelivery",
            "description": "<p>Delivery of the Product(free or online payment) passed as a body parameter(Required).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ratings",
            "description": "<p>Rating of the Product passed as a body parameter(Optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "reviews",
            "description": "<p>Reviews of the Product passed as a body parameter(Optional).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Product created successfully!\",\n           \"status\": 200,\n           \"data\": {\n               \"categoryId\": \"String\",\n               \"productName\": \"String\",\n               \"productDescription\": \"String\",\n               \"productPrice\": Number,\n               \"productAvailability\": \"String\",\n               \"productCondition\": \"String\",\n               \"freeDelivery\": \"String\",\n               \"ratings\": Number,\n               \"reviews\": object(type = array),\n               \"_id\": \"String\",\n               \"productId\": \"String\",\n               \"created\": \"date\",\n               \"lastModified\": \"date\",\n               \"__v\": Number\n           }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"Error Occured\",\n            \"status\": 500,\n            \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productRoute.js",
    "groupTitle": "create",
    "name": "PostApiV1SuperbazarProductCategoryCategoryidCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/superbazar/cart/:cartId/delete",
    "title": "Delete Product from cart",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cartId",
            "description": "<p>The Id of the cart passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Cart Deleted successfully!\",\n           \"status\": 200,\n           \"data\": {\n               \"n\": 1,\n               \"ok\": 1\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"Error Occured\",\n            \"status\": 500,\n            \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cartRoute.js",
    "groupTitle": "delete",
    "name": "PostApiV1SuperbazarCartCartidDelete"
  },
  {
    "type": "post",
    "url": "/api/v1/superbazar/category/:categoryId/delete",
    "title": "Delete Category by categoryId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": "<p>The Id of the category passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Category Deleted successfully!\",\n           \"status\": 200,\n           \"data\": {\n               \"n\": 1,\n               \"ok\": 1\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"Error Occured\",\n            \"status\": 500,\n            \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/categoryRoute.js",
    "groupTitle": "delete",
    "name": "PostApiV1SuperbazarCategoryCategoryidDelete"
  },
  {
    "type": "post",
    "url": "/api/v1/superbazar/product/:productId/delete",
    "title": "Delete Product by productId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>The Id of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Product Deleted successfully!\",\n           \"status\": 200,\n           \"data\": {\n               \"n\": 1,\n               \"ok\": 1\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"Error Occured\",\n            \"status\": 500,\n            \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productRoute.js",
    "groupTitle": "delete",
    "name": "PostApiV1SuperbazarProductProductidDelete"
  },
  {
    "type": "put",
    "url": "/api/v1/superbazar/category/:categoryId/edit",
    "title": "Edit Category by categorytId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": "<p>The Id of the category passed as the URL parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Category Edited successfully!\",\n           \"status\": 200,\n           \"data\": {\n               \"n\": 1,\n               \"nModified\": 1,\n               \"ok\": 1\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"Error Occured\",\n            \"status\": 500,\n            \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/categoryRoute.js",
    "groupTitle": "edit",
    "name": "PutApiV1SuperbazarCategoryCategoryidEdit"
  },
  {
    "type": "put",
    "url": "/api/v1/superbazar/product/:productId/edit",
    "title": "Edit Product by productId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ProductId",
            "description": "<p>The Id of the product passed as the URL parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Product Edited successfully!\",\n           \"status\": 200,\n           \"data\":  {\n               \"n\": 1,\n               \"nModified\": 1,\n               \"ok\": 1\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"Error Occured\",\n            \"status\": 500,\n            \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productRoute.js",
    "groupTitle": "edit",
    "name": "PutApiV1SuperbazarProductProductidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/superbazar/cart/view",
    "title": "View product in cart",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"All cart found\",\n           \"status\": 200,\n           \"data\": [\n               {\n                   \"productId\": \"String\",\n                   \"cartId\": \"String\",\n                   \"created\": \"Date\",\n                   \"lastModified\": \"Date\"\n               }\n           ]\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n              \"error\": true,\n              \"message\": \"Error Occured\",\n              \"status\": 500,\n              \"data\": null\n          }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cartRoute.js",
    "groupTitle": "read",
    "name": "GetApiV1SuperbazarCartView"
  },
  {
    "type": "get",
    "url": "/api/v1/superbazar/category/all",
    "title": "Get all Category",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"All Category found\",\n           \"status\": 200,\n           \"data\": [\n               {\n                   \"categoryName\": \"String\",\n                   \"categoryId\": \"String\",\n                   \"created\": \"Date\",\n                   \"lastModified\": \"Date\",\n               }\n           ]\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n              \"error\": true,\n              \"message\": \"Failed to find Category details\",\n              \"status\": 500,\n              \"data\": null\n          }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/categoryRoute.js",
    "groupTitle": "read",
    "name": "GetApiV1SuperbazarCategoryAll"
  },
  {
    "type": "get",
    "url": "/api/v1/superbazar/category/view/:categoryId",
    "title": "Single Category View",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CategoryId",
            "description": "<p>The categoryId should be passed as the URL parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Category Found successfully!\",\n           \"status\": 200,\n           \"data\": {\n               \"categoryName\": \"String\",\n               \"_id\": \"String\",\n               \"categoryId\": \"String\",\n               \"created\": \"Date\",\n               \"lastModified\": \"Date\",\n               \"__v\": Number\n           }   \n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n\n{\n    \"error\": true,\n    \"message\": \"Error Occured\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/categoryRoute.js",
    "groupTitle": "read",
    "name": "GetApiV1SuperbazarCategoryViewCategoryid"
  },
  {
    "type": "get",
    "url": "/api/v1/superbazar/product/all",
    "title": "Get all products",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"All Product found\",\n           \"status\": 200,\n           \"data\": [\n               {\n                   \"categoryId\": \"String\",\n                   \"productName\": \"String\",\n                   \"productDescription\": \"String\",\n                   \"productPrice\": Number,\n                   \"productAvailability\": \"String\",\n                   \"productCondition\": \"String\",\n                   \"freeDelivery\": \"String\",\n                   \"ratings\": Number,\n                   \"reviews\": object(type = array),\n                   \"productId\": \"String\",\n                   \"created\": \"date\",\n                   \"lastModified\": \"date\"\n               }\n           ]\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n              \"error\": true,\n              \"message\": \"Failed to find product details\",\n              \"status\": 500,\n              \"data\": null\n          }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productRoute.js",
    "groupTitle": "read",
    "name": "GetApiV1SuperbazarProductAll"
  },
  {
    "type": "get",
    "url": "/api/v1/superbazar/product/view/by/category/:categoryId",
    "title": "Get all Products of specific Category",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CategoryId",
            "description": "<p>The Id of the category passed as the URL parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Product of category found successfully\",\n           \"status\": 200,\n           \"data\": [\n               {\n                   \"categoryId\": \"String\",\n                   \"productName\": \"String\",\n                   \"productDescription\": \"String\",\n                   \"productPrice\": Number,\n                   \"productAvailability\": \"String\",\n                   \"productCondition\": \"String\",\n                   \"freeDelivery\": \"String\",\n                   \"ratings\": Number,\n                   \"reviews\": object(type = array),\n                   \"_id\": \"String\",\n                   \"productId\": \"String\",\n                   \"created\": \"date\",\n                   \"lastModified\": \"date\",\n                   \"__v\": Number\n               }\n           ]\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n          \"error\": true,\n          \"message\": \"No product Found!\",\n          \"status\": 404,\n          \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productRoute.js",
    "groupTitle": "read",
    "name": "GetApiV1SuperbazarProductViewByCategoryCategoryid"
  },
  {
    "type": "get",
    "url": "/api/v1/superbazar/product/view/:productId",
    "title": "Single Product View",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>The productId should be passed as the URL parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Product Found successfully!\",\n           \"status\": 200,\n           \"data\": {\n               \"categoryId\": \"String\",\n               \"productName\": \"String\",\n               \"productDescription\": \"String\",\n               \"productPrice\": Number,\n               \"productAvailability\": \"String\",\n               \"productCondition\": \"String\",\n               \"freeDelivery\": \"String\",\n               \"ratings\": Number,\n               \"reviews\": object(type = array),\n               \"_id\": \"String\",\n               \"productId\": \"String\",\n               \"created\": \"date\",\n               \"lastModified\": \"date\",\n               \"__v\": Number\n           }   \n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n\n{\n    \"error\": true,\n    \"message\": \"Error Occured.\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productRoute.js",
    "groupTitle": "read",
    "name": "GetApiV1SuperbazarProductViewProductid"
  }
] });
