const Newsletter = () => {
  return (
    <form className="form">
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        our newsletter
      </h4>

      {/* name */}
      <div>
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          defaultValue="Mia"
        />
      </div>

      {/* last name */}
      <div>
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          defaultValue="Cooper"
        />
      </div>

      {/* email */}
      <div>
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          className="form-input"
          name="email"
          id="email"
          defaultValue="test@test.com"
        />
      </div>

      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: '0.5rem' }}
      >
        submit
      </button>
    </form>
  );
};
export default Newsletter;
