function TableHeader() {
  return (
    <div className="flex justify-between items-center p-2 font-bold border-b w-full">
      <span
        className="flex items-center justify-center m-left-2"
        style={{ flexBasis: "16%" }}
      >
      <p>
        Image
      </p>
      </span>
      <span style={{ flexBasis: "16%" }}>Name</span>
      <span style={{ flexBasis: "16%" }}>Program</span>
      <span style={{ flexBasis: "16%" }}>Email</span>
      <span style={{ flexBasis: "16%" }}>Phone</span>
      <span style={{ flexBasis: "16%" }}>Graduated</span>
    </div>
  );
}

export default TableHeader;