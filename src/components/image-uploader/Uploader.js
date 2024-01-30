import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";
import { SidebarContext } from "../../context/SidebarContext";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Tooltip from "../../components/tooltip/Tooltip";
import useProductSubmit from "../../hooks/useProductSubmit";

const Uploader = ({ id }) => {
  const { files, setFiles, closeDrawer } = useContext(SidebarContext);

  const { updateProductImages } = useProductSubmit(id);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: false,
    maxSize: 500000,
    onDrop: (acceptedFiles) => {
      // setFiles((prevArr) => {
      //   return [
      //     ...prevArr,
      //     acceptedFiles.map((file) =>
      //       Object.assign(file, {
      //         preview: URL.createObjectURL(file),
      //       })
      //     ),
      //   ];
      // });
      // setFiles(
      //   acceptedFiles.map((file) =>
      //     Object.assign(file, {
      //       preview: URL.createObjectURL(file),
      //     })
      //   )
      // );
    },
  });

  // useEffect(() => {
  //   const uploadURL = uploadUrl;
  //   const uploadPreset = upload_Preset;
  //   if (files) {
  //     files.forEach((file) => {
  //       const formData = new FormData();
  //       formData.append("file", file);
  //       formData.append("upload_preset", uploadPreset);
  //       const storageRef = ref(storage, `/files/${file.name}`);
  //       const uploadTask = uploadBytesResumable(storageRef, file);
  //       uploadTask.on(
  //         "state_changed",
  //         (snapshot) => {
  //           const percent = Math.round(
  //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //           );

  //           // update progress
  //           setPercent(percent);
  //         },
  //         (err) => console.log(err),
  //         () => {
  //           // download url
  //           getDownloadURL(uploadTask.snapshot.ref).then((url) => {
  //             console.log(url);
  //           });
  //         }
  //       );
  //       // axios({
  //       //   url: uploadURL,
  //       //   method: 'POST',
  //       //   headers: {
  //       //     'Content-Type': 'application/x-www-form-urlencoded',
  //       //   },
  //       //   data: formData,
  //       // })
  //       //   .then((res) => {
  //       //     setImageUrl(res.data.secure_url);
  //       //   })
  //       //   .catch((err) => console.log(err));
  //     });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [files]);
  var thumbs;

  if (files.length > 0) {
    thumbs = files.map(function (file, i) {
      if (typeof file === "string" || file instanceof String) {
        return (
          <div key={i}>
            <div>
              {files.length > 1 ? (
                <div
                  onClick={() => {
                    files.splice(i, 1);
                    updateProductImages(files, id);
                  }}
                  className="p-2 cursor-pointer text-gray-400 hover:text-red-600"
                >
                  <Tooltip
                    id="delete"
                    Icon={FiTrash2}
                    title="Delete"
                    bgColor="#EF4444"
                  />
                </div>
              ) : ""}
              <img
                className="inline-flex border-2 border-gray-100 w-24 max-h-24"
                src={file}
              />
            </div>
          </div>
        );
      }
      if (file[0] == undefined) return;
      return (
        <div key={i}>
          <div>
            <div
              onClick={() => {
                console.log(i);
                files.splice(i, 1);
                setFiles((prevArr) => {
                  return [...prevArr, files];
                });
              }}
              className="p-2 cursor-pointer text-gray-400 hover:text-red-600"
            >
              <Tooltip
                id="delete"
                Icon={FiTrash2}
                title="Delete"
                bgColor="#EF4444"
              />
            </div>
            <img
              className="inline-flex border-2 border-gray-100 w-24 max-h-24"
              src={file[0].preview}
            />
          </div>
        </div>
      );
    });
  }

  // useEffect(() => {
  //   if (imageUrl) {
  //     var tt = imageUrl.map(function (file, i) {
  //       return (
  //         <div key={i}>
  //           <div>
  //             <img
  //               className="inline-flex border-2 border-gray-100 w-24 max-h-24"
  //               src={file}
  //             />
  //           </div>
  //         </div>
  //       );
  //     });
  //     thumbs.push(tt);
  //   }
  // }, []);
  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <div className="w-full text-center">
      <div
        className="px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <span className="mx-auto flex justify-center">
          <FiUploadCloud className="text-3xl text-green-500" />
        </span>
        <p className="text-sm mt-2">Drag your image here</p>
        <em className="text-xs text-gray-400">
          (Only *.jpeg and *.png images will be accepted)
        </em>
      </div>
      <aside className="flex flex-row flex-wrap mt-4">
        {thumbs}
        {/* {imageUrl ? (
          <img
            className="inline-flex border rounded-md border-gray-100 dark:border-gray-600 w-24 max-h-24 p-2"
            src={imageUrl}
            alt="product"
          />
        ) : (
          thumbs
        )} */}
      </aside>
    </div>
  );
};

export default Uploader;
