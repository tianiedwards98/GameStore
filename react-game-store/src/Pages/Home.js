function Home({ updateUserRole }) {
  // if (userRole === "") {
  return (
    <>
      <button
        type="button"
        value="Admin"
        onClick={() => updateUserRole("Admin")}
        className="btn btn-outline-primary"
      >
        Admin
        </button>
      <button
        type="button"
        value="Customer"
        onClick={() => updateUserRole("Customer")}
        className="btn btn-outline-secondary"
      >
        Customer
        </button>
    </>
  );
  // }

}
export default Home;