const List = (props) => {
  return (
    <ul className="newsletter-benefits-list">
      {props.listItems.map((item, index) => {
        let count = index + 1;
        return (
          <li
            className={`newsletter-benefits-list__item newsletter-benefit-${count}`}
            key={count}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
