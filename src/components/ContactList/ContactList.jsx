// import css from './ContactList.module.css';

function ContactList({ items, removeContact }) {
  const elements = items.map(({ name, number, id }) => {
    return (
      <li key={id}>
        {name}: {number}{' '}
        <button type="button" onClick={() => removeContact(id)}>
          Delete
        </button>
      </li>
    );
  });
  //   console.log(items);
  return <ul>{elements}</ul>;
}

export default ContactList;
