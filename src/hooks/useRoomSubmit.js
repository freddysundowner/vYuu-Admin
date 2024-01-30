import { useContext, useEffect, useState, setArray } from "react";
import { useForm } from "react-hook-form";
import { SidebarContext } from "../context/SidebarContext";
import RoomseServices from "../services/RoomseServices";
import { notifyError, notifySuccess } from "../utils/toast";

const useRoomSubmit = (id) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

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
      categories: Array.from(new Set(tag.flatMap((x) => x.name.split(", ")))),
      quantity: data.quantity,
      price: data.salePrice ? data.salePrice : data.originalPrice,
      discountedPrice:
        data.discountedPrice == undefined ? 0 : data.discountedPrice,
    };

    if (id) {
      RoomseServices.updateRoomById(id, productData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess("product updated");
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
      RoomseServices.getRoomById(id)
        .then((res) => {
          console.log(res);
          if (res) {
            var categories = [];
            res.categories.forEach((v, k) => {
              categories.push({ id: k, name: v });
            });
            setValue("sku", res._id.substring(18, 26));
            setValue("title", res.name);
            setValue("id", res._id);
            // setValue('slug', res.slug);
            setValue("description", res.description);
            setValue("parent", res.categories);
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

export default useRoomSubmit;
