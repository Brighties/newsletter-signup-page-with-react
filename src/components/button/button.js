function Button({ onClick }) {
  return (
    <button onClick={onClick} className="submit-button">
      Subscribe to monthly newsletter
    </button>
  );
}

export default Button;
