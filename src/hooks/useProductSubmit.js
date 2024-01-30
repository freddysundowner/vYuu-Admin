import { useContext, useEffect, useState, setArray } from "react";
import { useForm } from "react-hook-form";
import { SidebarContext } from "../context/SidebarContext";
import ProductServices from "../services/ProductServices";
import { notifyError, notifySuccess } from "../utils/toast";

const useProductSubmit = (id) => {
  const [imageUrl, setImageUrl] = useState([]);
  const [children, setChildren] = useState("");
  const [productdata, setProductData] = useState(null);
  const [toUpdate, setToUpdate] = useState(false);
  const [tag, setTag] = useState([]);
  const [variations, setVariations] = useState([]);
  const { isDrawerOpen, closeDrawer, setIsUpdate, files, setFiles } =
    useContext(SidebarContext);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const updateProductImages = (files, id) => {
    ProductServices.updateProduct(id, { images: files })
      .then((res) => {
        setIsUpdate(true);
        notifySuccess(res.message);
      })
      .catch((err) => notifyError(err.message));
  };

  const onSubmit = (data) => {
    if (data.discountedPrice < data.salePrice) {
      notifyError("SalePrice must be less then or equal of product price!");
      return;
    }
    _updateAddProduct(data);
  };

  const _updateAddProduct = (data) => {
    const productData = {
      sku: data.sku,
      name: data.title,
      description: data.description,
      category: Array.from(new Set(tag.flatMap((x) => x.name.split(", ")))),
      quantity: data.quantity,
      price: data.salePrice ? data.salePrice : data.originalPrice,
      discountedPrice:
        data.discountedPrice == undefined ? 0 : data.discountedPrice,
    };

    if (id) {
      ProductServices.updateProduct(id, productData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess("product updated");
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    } else {
      ProductServices.addProduct(productData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess("product added");
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    }
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      setValue("sku");
      setValue("title");
      setValue("slug");
      setValue("description");
      setValue("parent");
      setValue("children");
      setValue("type");
      setValue("unit");
      setValue("quantity");
      setValue("originalPrice");
      setValue("salePrice");
      setImageUrl("");
      setChildren("");
      // setTag([]);
      clearErrors("sku");
      clearErrors("title");
      clearErrors("slug");
      clearErrors("description");
      clearErrors("parent");
      clearErrors("children");
      clearErrors("type");
      clearErrors("unit");
      clearErrors("quantity");
      clearErrors("originalPrice");
      clearErrors("salePrice");
      clearErrors("tax1");
      clearErrors("tax2");
      return;
    }

    if (id) {
      ProductServices.getProductById(id)
        .then((res) => {
          console.log(res);
          if (res) {
            var categories = [];
            res.interest.forEach((v, k) => {
              categories.push({ id: v._id, name: v.name });
            });
            setValue("sku", res._id.substring(18, 26));
            setValue("title", res.name);
            setValue("id", res._id);
            // setValue('slug', res.slug);
            setValue("description", res.description);
            setValue("parent", res.category);
            setValue("variations", res.variations);
            setValue("quantity", res.quantity);
            setValue("originalPrice", res.discountedPrice);
            setValue("salePrice", res.price);
            setTag(categories);
            setProductData(res);
            setFiles(res.images);
            setImageUrl(res.images);
            console.log(res.variations);
            setVariations(res.variations);
          }
        })
        .catch((err) => {
          notifyError("There is a server error!");
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, setValue, isDrawerOpen]);

  useEffect(() => {
    setChildren(watch("children"));
  }, [watch, children]);

  return {
    register,
    watch,
    handleSubmit,
    updateProductImages,
    onSubmit,
    errors,
    imageUrl,
    setImageUrl,
    tag,
    setTag,
    variations,
    setVariations,
  };
};

export default useProductSubmit;
