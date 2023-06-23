function List({ item }) {
  return (
    <div className="list">
      <div className="container">
        <h2>{item.codProducto}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default List;
