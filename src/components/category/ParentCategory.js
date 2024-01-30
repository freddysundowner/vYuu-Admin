import React, { useEffect } from "react";

import useAsync from "../../hooks/useAsync";
import CategoryServices from "../../services/CategoryServices";
import Multiselect from "multiselect-react-dropdown";
const suggestions = [];

const ParentCategory = ({ tag, setTag }) => {
  console.log(tag);
  const handleTagClick = (tags) => {
    setTag(tags);
  };

  const handleDelete = (i) => {
    setTag(i);
  };

  const { data } = useAsync(CategoryServices.getAllCategory); //   console.log(value);

  useEffect(() => {
    data.forEach((v, k) => {
      suggestions.push({ id: k, name: v.name });
    });
  }, [data]);
  return (
    <Multiselect
      options={suggestions} // Options to display in the dropdown
      selectedValues={tag} // Preselected value to persist in dropdown
      onSelect={handleTagClick} // Function will trigger on select event
      onRemove={handleDelete} // Function will trigger on remove event
      displayValue="name" // Property name to display in the dropdown options
    />
  );
};

export default ParentCategory;
