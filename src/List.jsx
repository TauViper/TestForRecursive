const List = ({ res }) => {
  return (
    <div className='list'>
      {res.map((item) => (
        <ul key={item.id}>
          <li key={item.id}>
            {item.name} - {item.price} <span>руб</span>
          </li>
          {item.children.length > 0 && <List res={item.children} />}
        </ul>
      ))}
    </div>
  );
};

export default List;
