import express from "express";
import { isAdmin,requireSignIn } from "../midldlewares/authMiddleware.js";
import ExpressFormidable from "express-formidable";
import { createProductController,getProductController ,getSingleProductController,productPhotoController,deleteProductController,updateProductController, productFiltersController, productCountController, productListController, searchProductController, productCategoryController, realtedProductController, braintreeTokenController, brainTreePaymentController, } from "../controllers/productController.js";


//,, brainTreePaymentController

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  ExpressFormidable(),
  createProductController
);
//routes
router.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
   ExpressFormidable(),
    updateProductController
  );
  

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

//filter product

router.post('/product-filters',productFiltersController)

//product count 
router.get('/product-count', productCountController)

//product per page
router.get("/product-list/:page", productListController);

//search
router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", realtedProductController);


router.get("/product-category/:slug",productCategoryController);

// //payments Routes
// //token 

router.get('/braintree/token',braintreeTokenController)


//payments 
router.post('/braintree/payment',requireSignIn, brainTreePaymentController)
export default router;