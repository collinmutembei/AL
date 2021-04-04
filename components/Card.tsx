const Card = ({ children }) => {
  return (
    <div className="shadow-xl hover:shadow-2xl hover:shadow-darkmode transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 border hover:border-blue-300 rounded-lg m-4">
      {children}
    </div>
  );
};

export default Card;
