import { useState } from "react";

export default function RadioButton({ options, defaultValue, onChange }) {
  // State untuk menyimpan pilihan yang sedang dipilih
  const [selected, setSelected] = useState(defaultValue || options[0]?.value);

  // Fungsi untuk menangani perubahan pilihan
  const handleSelection = (value) => {
    setSelected(value); // Perbarui state lokal
    if (onChange) onChange(value); // Panggil callback jika diberikan
  };

  return (
    <div className="flex gap-4">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center cursor-pointer gap-2"
        >
          <input
            type="radio"
            name="customRadio"
            value={option.value}
            checked={selected === option.value}
            onChange={() => handleSelection(option.value)}
            className="hidden" // Sembunyikan radio button default
          />
          <span
            className={`w-4 h-4 rounded-full flex items-center justify-center border ${
              selected === option.value
                ? "bg-[#6173E6] border-[#6173E6]"
                : "border-[#656666]"
            }`}
            style={{ width: "16px", height: "16px", borderWidth: "1px" }}
          >
            {selected === option.value && (
              <span className="w-2.5 h-2.5 bg-[#ffffff] rounded-full"></span>
            )}
          </span>
          <span
            className={`ml-2 ${
              selected === option.value ? "text-[#081116]" : "text-[#656666]"
            }`}
          >
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
}