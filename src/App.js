import Logo from './components/Logo'
import PackingList from './components/PackingList'
import Form from './components/Form'
import Stats from './components/Stats'
import { useState } from 'react'

const App = () => {
  const [items, setItems] = useState([])
  const handleAddItems = (item) => {
    setItems((items) => [...items, item])
  }
  const deleteItemHandler = (id) => {
    setItems((items) => items.filter((item) => item.id !== id))
  }
  const toggleItemHandler = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    )
  }
  const clearListHandler = () => {
    const confirmed = window.confirm('Are you sure you to delete all items?')
    if (confirmed) setItems([])
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItemsHandler={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={deleteItemHandler}
        onToggleItem={toggleItemHandler}
        onClearList={clearListHandler}
      />
      <Stats items={items} />
    </div>
  )
}

export default App
