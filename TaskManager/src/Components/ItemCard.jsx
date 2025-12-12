const ItemCard = ({ item, index, toggleItem, deleteItem }) => {
  return (
    <div className="card p-3 mb-2">
      <div className="d-flex justify-content-between align-items-center">

        <span style={{ textDecoration: item.done ? "line-through" : "none" }}>
          {item.text}
        </span>

        <div>
          <button
            className="btn btn-success btn-sm me-2"
            onClick={() => toggleItem(index)}
          >
            {item.done ? "Undo" : "Done"}
          </button>

          <button
            className="btn btn-danger btn-sm"
            onClick={() => deleteItem(index)}
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  );
};

export default ItemCard;
