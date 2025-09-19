// First version of the Item component
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {/* /* If the item is packed, show a checkmark; otherwise, show only the name */ */}
      {name} {isPacked && '✅'}
    </li>
  );
}

// Second version of the Item component (this will override the first one)
function Item({ name, isPacked }) {
  return (
    <li className="item">
        {/* If the item is packed, show the name with a checkmark and strikethrough  */}
        {/* using the <del> tag. Otherwise, just show the name normally. */}
        
      {isPacked ? (
        <del>
          {name + ' ✅'}
        </del>
      ) : (
        name
      )}
    </li>
  );
}

// Main component that renders the entire packing list
export default function PackingList() {
  return (
    <section>
      {/* Title of the packing list */}
      <h1>Sally Ride's Packing List</h1>
      <ul>
        {/* Render each item with packed status and name */}
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
