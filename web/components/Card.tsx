const Card = ({ children }) => {
  return (
    <div className="shadow-xl hover:shadow-2xl border hover:border-blue-300 rounded-lg m-4">
      {children}
    </div>
  );
};

export default Card;
