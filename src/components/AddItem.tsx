const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        id="addItem"
        type="text"
        placeholder="Add Task"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit" aria-label="Add Item">
        Add Item
      </button>
    </form>
  );
};

export default AddItem;
