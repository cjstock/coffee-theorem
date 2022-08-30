import LoginButton from "./loginbutton";

const Unauthorized = () => {
  return (
    <div className="card w-96 bg-secondary shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Unauthorized!</h2>
        <p>Please login to track your beans.</p>
        <div className="card-actions justify-end">
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
