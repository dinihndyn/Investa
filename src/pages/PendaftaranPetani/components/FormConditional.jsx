export const FormConditional = ({ handleChange, num }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 items-center">
        <div>
          <input
            required
            name={`kebutuhan[${num}][nama]`}
            type="text"
            onChange={handleChange}
            min={0}
            // value={formik.values.kebutuhan[num].nama}
            className="w-full capitalize rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
          />
        </div>
        <div>
          <input
            required
            name={`kebutuhan[${num}][jenis]`}
            type="text"
            onChange={handleChange}
            min={0}
            // value={formik.values.kebutuhan[num].jenis}
            className="w-full capitalize rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
          />
        </div>
        <div>
          <input
            required
            name={`kebutuhan[${num}][jumlah]`}
            type="number"
            onChange={handleChange}
            min={0}
            // value={formik.values.kebutuhan[num].jumlah}
            className="w-full capitalize rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
          />
        </div>
        <div>
          <input
            required
            name={`kebutuhan[${num}][satuan]`}
            type="text"
            onChange={handleChange}
            min={0}
            className="w-full capitalize rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
          />
        </div>
        <div>
          <input
            required
            name={`kebutuhan[${num}][harga]`}
            type="number"
            onChange={handleChange}
            min={0}
            // value={formik.values.kebutuhan[num].harga}
            className="w-full capitalize rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
          />
        </div>
      </div>
    </div>
  );
};
