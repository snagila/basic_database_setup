import form from "./FormSchema";

// create

export const insetTask = (formObj) => {
  return form(formObj).save();
};
// read
export const getData = () => {
  return form.find();
};
// update

export const updateData = (id, formObj) => {
  console.log(id, type);
  return form.updateOne({ _id: id }, { $set: { ...formObj } });
};
// delete
export const deleteTask = (id) => {
  return form.deleteOne({ _id: id });
};