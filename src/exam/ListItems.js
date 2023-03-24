import React from 'react';
import "./App.css";

const ListItems = (props) => {
  const [selectedItems, setSelectedItems] = React.useState([]);
  const handleChange = (e, id) => {
    if (e.target.checked) {
      setSelectedItems([...selectedItems, id]);
    } else {
      const newSelectedItems = selectedItems.filter((item) => item !== id);
      setSelectedItems(newSelectedItems);
    }
  };
  const handleClick = () => {
    alert(`Selected item IDs: ${selectedItems.join(', ') || 'none'}`);
  };

  return (
    <div>
      {props.items.length === 0 ? (
        <p>No items to display</p>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Selected</th>
              </tr>
            </thead>
            <tbody>
              {props.items.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={(e) => handleChange(e, item.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleClick}>Show Selected Item IDs</button>
        </div>
      )}
    </div>
  );
};

export default ListItems;
