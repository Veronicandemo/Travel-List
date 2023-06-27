import React, { useState } from 'react'
import Item from './Item'
// const initialItems = [
//   { id: 1, description: 'Passports', quantity: 2, packed: false },
//   { id: 2, description: 'Socks', quantity: 12, packed: true },
//   { id: 3, description: 'Laptop', quantity: 1, packed: false },
// ]
const PackingList = ({ items, onDeleteItem, onToggleItem, onClearList }) => {
  const [sortBy, setSortBy] = useState('input')
  let sortItems
  if (sortBy === 'input') sortItems = items
  if (sortBy === 'description')
    sortItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description)) //copy of items
  if (sortBy === 'packed')
    sortItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed))

  return (
    <div className="list">
      <ul>
        {sortItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by input description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  )
}

export default PackingList
