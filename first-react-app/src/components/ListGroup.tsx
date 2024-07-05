function ListGroup() {
  let items = [
    "Rohan Kadam",
    "Aakash Kanchan",
    "Mrunal Kadam",
    "Kunal Jadhav",
    "Akanksha Deshpande",
    "Gaurav Bagal",
    "Yash Dhumal",
  ];
  // items = [];
  return (
    <>
      <h1>List of items : </h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
